import type { Metadata } from "next";
import "./globals.css";
import TanstackQueryProvider from "@/components/common/entities/TanstackQueryProvider";

export const metadata: Metadata = {
  title: "산악구조",
  description: "New Project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
      </body>
    </html>
  );
}
