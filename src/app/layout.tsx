import IndexProvider from "@/components/providers";
import QueryProvider from "@/components/providers/queryProvider";
import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "V0.1.0",
  description: "Polaris V0.1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning={true}>
      <body
        className={` ${onest.className} bg-slate-50 text-slate-200 dark:bg-background   antialiased`}
      >
        <QueryProvider>
          <IndexProvider>{children}</IndexProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
