"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "@phosphor-icons/react";

export default function LanguageToggle({ locale }: { locale: string }) {
  const pathname = usePathname();
  const otherLocale = locale === "en" ? "ar" : "en";
  const currentPath = pathname.replace(`/${locale}`, "") || "/";
  const href = `/${otherLocale}${currentPath === "/" ? "" : currentPath}`;

  return (
    <Link
      href={href}
      className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors"
      aria-label="Toggle language"
      hrefLang={otherLocale}
    >
      <Globe size={20} weight="duotone" />
      <span className="font-medium">{locale === "en" ? "عربي" : "EN"}</span>
    </Link>
  );
}
