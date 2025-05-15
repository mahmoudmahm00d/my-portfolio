"use client";

import { useTheme } from '@/components/theme-provider';
import { Sun, Moon, Monitor } from '@phosphor-icons/react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        className="rounded-md p-2 bg-secondary hover:bg-secondary/80 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'light' ? (
          <Moon size={20} weight="duotone" className="text-indigo-600" />
        ) : (
          <Sun size={20} weight="duotone" className="text-yellow-300" />
        )}
      </button>
    </div>
  );
}