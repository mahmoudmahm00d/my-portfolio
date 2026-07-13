"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";
import LanguageToggle from "@/components/LanguageToggle";
import { List, X } from "@phosphor-icons/react";
import { getPortfolio } from "@/data/portfolio";
import { useTranslations } from "next-intl";

interface HeaderProps {
  locale: string;
}

export default function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const portfolio = getPortfolio(locale);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t("home"), href: `/${locale}/#home` },
    { label: t("skills"), href: `/${locale}/#skills` },
    { label: t("experience"), href: `/${locale}/#experience` },
    { label: t("contact"), href: `/${locale}/#contact` },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${scrolled
        ? "bg-background/80 backdrop-blur-sm shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href={`/${locale}`} className="text-xl font-bold gradient-text">
              {portfolio.name}
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-4 md:space-x-8">
            <motion.ul
              className="flex space-x-4 md:space-x-8"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, staggerChildren: 0.1 }}
            >
              {navItems.map((item) => (
                <motion.li key={item.href} whileHover={{ scale: 1.05 }}>
                  <Link
                    href={item.href}
                    onClick={(e) => {
                      const hash = item.href.split("#")[1];
                      if (hash) {
                        e.preventDefault();
                        document
                          .getElementById(hash)
                          ?.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="px-4 py-2 text-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            <ThemeToggle />
            <LanguageToggle locale={locale} />
          </nav>

          <div className="flex items-center md:hidden">
            <ThemeToggle />
            <LanguageToggle locale={locale} />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="ml-2 p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} weight="bold" />
              ) : (
                <List size={24} weight="bold" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <motion.nav
            className="md:hidden mt-4 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </div>
    </header>
  );
}
