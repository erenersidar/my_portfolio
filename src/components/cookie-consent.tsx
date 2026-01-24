"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";

const COOKIE_CONSENT_KEY = "cookie_consent";

type ConsentStatus = "accepted" | "rejected" | null;

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY) as ConsentStatus;
    if (consent === null) {
      // Small delay for better UX - don't show immediately on page load
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "rejected");
    setShowBanner(false);
  };

  const handleClose = () => {
    // Close without saving preference - will show again on next visit
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-4 duration-500">
      <div className="container mx-auto max-w-4xl">
        <div className="relative flex flex-col gap-4 rounded-lg border border-border/60 bg-card/95 p-4 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:justify-between">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute right-2 top-2 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:right-3 sm:top-3"
            aria-label="Schließen"
          >
            <X className="h-4 w-4" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-3 pr-6 sm:pr-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Cookie className="h-5 w-5 text-primary" />
            </div>
            <div className="space-y-1">
              <h3 className="font-medium text-sm text-foreground">
                Cookie-Einstellungen
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
                Diese Website verwendet technisch notwendige Cookies für die Funktionalität der Seite.
                Weitere Informationen finden Sie in unserer{" "}
                <Link
                  href="/datenschutz"
                  className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
                >
                  Datenschutzerklärung
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex shrink-0 gap-2 sm:ml-4">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="text-xs"
            >
              Ablehnen
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-xs"
            >
              Akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
