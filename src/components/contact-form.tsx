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
import { useRef, useEffect } from "react";

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
  "cf-turnstile-response": z.string().min(1, {
    message: "Please complete the CAPTCHA.",
  }),
});

declare global {
  interface Window {
    turnstile: {
      render: (selector: string, options: any) => void;
      reset: (widgetId?: string) => void;
      getResponse: (widgetId?: string) => string;
      remove: (widgetId?: string) => void;
    };
  }
}

export default function ContactForm() {
  const { toast } = useToast();
  const turnstileRef = useRef<void | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      "cf-turnstile-response": "",
    },
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (window.turnstile && document.getElementById("turnstile-widget")) {
        turnstileRef.current = window.turnstile.render("#turnstile-widget", {
          sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
          theme: "light",
        });
      }
    };

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Get Turnstile token
    const turnstileToken = window.turnstile?.getResponse();
    console.log("Turnstile token:", turnstileToken ? "✓ Present" : "✗ Missing");

    if (!turnstileToken) {
      toast({
        variant: "destructive",
        title: "CAPTCHA Error",
        description: "Please complete the CAPTCHA verification.",
      });
      return;
    }

    const formData = {
      ...values,
      "cf-turnstile-response": turnstileToken,
    };

    console.log("Form data:", formData);
    const result = await handleContactForm(formData);
    console.log("Contact form result:", result);

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
      if (window.turnstile) {
        window.turnstile.reset();
      }
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong.",
        description: result.error || "Could not send the message. Please try again.",
      });
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
