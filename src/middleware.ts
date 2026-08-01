import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { routing } from "./routing";

const handleI18n = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const headers = new Headers(request.headers);
  const port = headers.get("x-forwarded-port");
  // Drop internal Node ports so redirects stay on 443/80 behind nginx
  if (port && port !== "443" && port !== "80") {
    headers.delete("x-forwarded-port");
  }
  return handleI18n(new NextRequest(request, { headers }));
}

export const config = {
  matcher: ["/", "/(ar|en)/:path*"],
};
