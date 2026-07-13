# My Portfolio

This is a personal portfolio website built with [Next.js](https://nextjs.org), bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Portfolio Configuration](#portfolio-configuration)
- [Contact Form Setup](#contact-form-setup)
- [Technologies Used](#technologies-used)
- [中文](#中文)
- [عربي](#عربي)

## Getting Started

To get a local copy up and running, follow these simple steps:

### Prerequisites

Make sure you have Node.js and npm installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/my-portfolio.git
   ```
2. Navigate to the project directory:
   ```bash
   cd my-portfolio
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

## Project Structure

The project follows a standard Next.js structure with additional directories for components, data, and utilities:

```
my-portfolio/
├── .git/
├── .gitignore
├── .idx/
├── .vscode/
├── README.md
├── components.json
├── env.example
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── code.webp
│   ├── frame.webp
│   └── og-image.jpeg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── send/
│   │   │       └── route.ts      # Contact form API
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Magnet.tsx
│   │   ├── RotatingText.tsx
│   │   ├── TiltedCard.tsx
│   │   ├── theme-provider.tsx
│   │   └── ui/
│   │       ├── button.tsx
│   │       ├── input.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       └── use-toast.ts
│   ├── data/
│   │   ├── portfolio.json        # Portfolio content (edit this!)
│   │   └── portfolio.ts          # Data access layer
│   ├── types/
│   │   └── portfolio.ts          # TypeScript interfaces
│   └── lib/
│       └── utils.ts
└── tsconfig.json
```

## Features

- **Responsive Design**: Optimized for various screen sizes.
- **Dark Mode**: Toggle between light and dark themes.
- **SEO Friendly**: Meta tags and Open Graph tags for better search engine optimization.
- **Contact Form**: Allows visitors to get in touch.

## Portfolio Configuration

All portfolio content is managed through a single JSON configuration file at `src/data/portfolio.json`. See [types/portfolio.ts](src/types/portfolio.ts) for the full data schema.

To customize, edit `src/data/portfolio.json` with your own information (name, skills, experience, projects, certifications, contact, and SEO metadata).

## Contact Form Setup

The contact form requires **Nodemailer** (for sending emails) and **Cloudflare Turnstile** (for CAPTCHA protection).

### 1. Environment Variables

Create a `.env` file based on `env.example`:

```bash
# Email Configuration
EMAIL_TO=recipient@example.com          # Your email address (receives messages)
EMAIL_FROM=sender@example.com          # Sender email address
SMTP_HOST=smtp.example.com             # SMTP server host
SMTP_PORT=587                          # SMTP port (587 for TLS, 465 for SSL)
SMTP_USER=your_smtp_username           # SMTP username
SMTP_PASS=your_smtp_password            # SMTP password

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your_site_key          # Public key (client-side)
NEXT_PRIVATE_TURNSTILE_SECRET_KEY=your_secret_key    # Private key (server-side)
```

### 2. Cloudflare Turnstile Setup

1. Go to [Cloudflare Turnstile Dashboard](https://dash.cloudflare.com/turnstile)
2. Click **Add a widget**
3. Choose widget type (Managed or Invisible)
4. Add your domain(s) under **Domain Verification**
5. Copy the **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
6. Copy the **Secret Key** → `NEXT_PRIVATE_TURNSTILE_SECRET_KEY`

### 3. SMTP Configuration

**Option A: Gmail**
1. Enable 2-Factor Authentication on your Google account
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use `smtp.gmail.com` as host, `587` as port, your email as username, and the app password as password

**Option B: Resend (Recommended for dev)**
1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Use Resend's SMTP credentials:
   - Host: `smtp.resend.com`
   - Port: `587`
   - User: `resend`
   - Pass: your API key
   - From: Your verified domain on Resend

**Option C: Other SMTP Providers**
Any SMTP provider works (SendGrid, Mailgun, Amazon SES, etc.) — just fill in their SMTP credentials.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Nodemailer](https://nodemailer.com/) — Email sending
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) — CAPTCHA protection
- [Vercel](https://vercel.com/)

---

## 中文

这是我使用 [Next.js](https://nextjs.org) 构建的个人作品集网站。

### 快速开始

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

### 配置

在 `src/data/portfolio.json` 中编辑您的个人信息。

### 联系方式设置

在 `.env` 文件中配置以下环境变量（参考 `env.example`）：

- **邮箱**: `EMAIL_TO`, `EMAIL_FROM`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
- **Cloudflare Turnstile**: `NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `NEXT_PRIVATE_TURNSTILE_SECRET_KEY`

---

## عربي

هذا موقع شخصي لمعرض الأعمال تم بناؤه باستخدام [Next.js](https://nextjs.org).

### البدء السريع

```bash
git clone https://github.com/your-username/my-portfolio.git
cd my-portfolio
npm install
npm run dev
```

### هيكل المشروع

```
src/
├── data/
│   ├── portfolio.json      # محتوى الموقع (عدّل هذا!)
│   └── portfolio.ts        # طبقة الوصول للبيانات
├── types/
│   └── portfolio.ts        # واجهات TypeScript
└── components/              # المكونات
```

### إعدادات نموذج التواصل

أنشئ ملف `.env` بناءً على `env.example`:

```bash
# إعدادات البريد الإلكتروني
EMAIL_TO=بريدك@example.com
EMAIL_FROM=مرسل@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=اسم_المستخدم
SMTP_PASS=كلمة_المرور

# Cloudflare Turnstile
NEXT_PUBLIC_TURNSTILE_SITE_KEY=المفتاح_العام
NEXT_PRIVATE_TURNSTILE_SECRET_KEY=المفتاح_الخاص
```

### إعداد Cloudflare Turnstile

1. اذهب إلى [لوحة تحكم Turnstile](https://dash.cloudflare.com/turnstile)
2. أضف widget جديد
3. اختر نوع الـ widget (Managed أو Invisible)
4. أضف نطاقك/نطاقاتك
5. انسخ **Site Key** → `NEXT_PUBLIC_TURNSTILE_SITE_KEY`
6. انسخ **Secret Key** → `NEXT_PRIVATE_TURNSTILE_SECRET_KEY`

### إعداد SMTP

**الخيار أ: Gmail**
1. فعّل التحقق بخطوتين على حساب Google
2. أنشئ [كلمة مرور تطبيق](https://myaccount.google.com/apppasswords)
3. استخدم `smtp.gmail.com` كـ host و `587` كـ port

**الخيار ب: Resend (موصى به للتطوير)**
1. سجّل في [Resend](https://resend.com)
2. أنشئ API key
3. استخدم بيانات SMTP الخاصة بـ Resend:
   - Host: `smtp.resend.com`
   - Port: `587`
   - User: `resend`
   - Pass: مفتاح API الخاص بك

**الخيار ج: مزودات SMTP أخرى**
أي مزود يعمل (SendGrid، Mailgun، Amazon SES...) — فقط أدخل بيانات SMTP الخاصة بهم.
