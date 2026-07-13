"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Globe } from "@phosphor-icons/react";

export default function LanguageToggle({ locale }: { locale: string }) {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const newLocale = locale === "en" ? "ar" : "en";
    const currentPath = pathname.replace(`/${locale}`, "") || "/";
    startTransition(() => {
      router.push(`/${newLocale}${currentPath === "/" ? "" : currentPath}`);
    });
  };

  return (
    <button
      onClick={toggleLocale}
      disabled={isPending}
      className="flex items-center gap-2 px-3 py-2 text-sm text-foreground/80 hover:text-primary transition-colors disabled:opacity-50"
      aria-label="Toggle language"
    >
      <Globe size={20} weight="duotone" />
      <span className="font-medium">{locale === "en" ? "عربي" : "EN"}</span>
    </button>
  );
}
