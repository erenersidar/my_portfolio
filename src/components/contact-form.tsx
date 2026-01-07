"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { handleContactForm } from "@/actions/contact";
import { Loader2, Send } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  privacyConsent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the privacy policy.",
  }),
});

declare global {
  interface Window {
    turnstile: {
      render: (selector: string, options: any) => string;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
      remove: (widgetId?: string) => void;
    };
  }
}

export default function ContactForm() {
  const { toast } = useToast();
  const widgetIdRef = useRef<string | undefined>(undefined);
  const [captchaToken, setCaptchaToken] = useState<string>("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      privacyConsent: false,
    },
  });

  useEffect(() => {
    // Check if script already exists
    const existingScript = document.querySelector(
      'script[src="https://challenges.cloudflare.com/turnstile/v0/api.js"]'
    );

    const initTurnstile = () => {
      const container = document.getElementById("turnstile-widget");
      if (window.turnstile && container && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render("#turnstile-widget", {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          theme: "light",
          callback: (token: string) => {
            setCaptchaToken(token);
          },
          "expired-callback": () => {
            setCaptchaToken("");
          },
          "error-callback": () => {
            setCaptchaToken("");
          },
        });
      }
    };

    if (existingScript) {
      // Script already loaded, just init
      if (window.turnstile) {
        initTurnstile();
      }
    } else {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
      script.onload = initTurnstile;
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = undefined;
      }
    };
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!captchaToken) {
      toast({
        variant: "destructive",
        title: "CAPTCHA Error",
        description: "Please complete the CAPTCHA verification.",
      });
      return;
    }

    const formData = {
      ...values,
      "cf-turnstile-response": captchaToken,
    };

    const result = await handleContactForm(formData);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      setCaptchaToken("");
      if (window.turnstile) {
        window.turnstile.reset();
      }
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.error || "Could not send the message. Please try again.",
      });
      setCaptchaToken("");
      if (window.turnstile) {
        window.turnstile.reset();
      }
    }
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="your.email@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="privacyConsent"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm font-normal">
                      I agree to the{" "}
                      <Link href="/datenschutz" className="underline hover:text-primary">
                        Privacy Policy
                      </Link>{" "}
                      and consent to the processing of my data.
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />
            <div id="turnstile-widget" className="flex justify-center" />
            <Button type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? (
                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Message
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
