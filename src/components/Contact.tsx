"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { At, House, User } from "@phosphor-icons/react";
import { toast } from "sonner";
import Script from "next/script";
import { getPortfolio } from "@/data/portfolio";
import { useTranslations, useLocale } from "next-intl";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    cfTurnstileResponse: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const locale = useLocale();
  const portfolio = getPortfolio(locale);
  const t = useTranslations("contact");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = new FormData(e.target as HTMLFormElement);
    const cfTurnstileResponse = form.get("cf-turnstile-response");
    if (cfTurnstileResponse === null || cfTurnstileResponse === "") {
      toast(t("captchaError"), {
        description: t("errorDescription"),
      });
      return;
    }

    formData.cfTurnstileResponse = cfTurnstileResponse as string;
    if (
      formData.cfTurnstileResponse === null ||
      formData.cfTurnstileResponse === ""
    ) {
      toast(t("captchaError"), {
        description: t("errorDescription"),
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const json = await res.json();
        toast(t("errorTitle"), {
          description: json.error || t("errorDescription"),
        });
        setIsSubmitting(false);
        return;
      }

      toast(t("successTitle"), {
        description: t("successDescription"),
      });
      setFormData({
        name: "",
        email: "",
        message: "",
        cfTurnstileResponse: "",
      });
      setIsSubmitting(false);
    } catch {
      setFormData({
        name: "",
        email: "",
        message: "",
        cfTurnstileResponse: "",
      });
      setIsSubmitting(false);
      toast(t("errorTitle"), {
        description: t("errorDescription"),
      });
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-muted/30 bg-primary/2">
      <div className="container px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            {t("title")}
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">{t("description")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t("infoTitle")}</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <At className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("email")}</h4>
                  <a
                    href={`mailto:${portfolio.contact.email}`}
                    className="text-muted-foreground text-md md:text-sm hover:text-primary transition-colors"
                  >
                    {portfolio.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <House className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("location")}</h4>
                  <p className="text-muted-foreground">
                    {portfolio.contact.location}
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{t("socialProfiles")}</h4>
                  <div className="flex space-x-3">
                    {portfolio.contact.social.github && (
                      <a
                        href={portfolio.contact.social.github}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        GitHub
                      </a>
                    )}
                    {portfolio.contact.social.linkedin && (
                      <a
                        href={portfolio.contact.social.linkedin}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        LinkedIn
                      </a>
                    )}
                    {portfolio.contact.social.twitter && (
                      <a
                        href={portfolio.contact.social.twitter}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        Twitter
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">{t("formTitle")}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {t("nameLabel")}
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("namePlaceholder")}
                  className="shadow-md shadow-black/5 border-black/9"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {t("emailLabel")}
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("emailPlaceholder")}
                  className="shadow-md shadow-black/5 border-black/9"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {t("messageLabel")}
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("messagePlaceholder")}
                  className="shadow-md shadow-black/5 border-black/9"
                  rows={5}
                  required
                />
              </div>
              <Script
                src="https://challenges.cloudflare.com/turnstile/v0/api.js"
                async
                defer
              />
              <div
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
                data-callback="javascriptCallback"
              ></div>
              <Button
                type="submit"
                className="w-full bg-primary text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? t("submittingButton") : t("submitButton")}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
