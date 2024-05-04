import { firaCode } from "@/constants";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/aos-provider";

export const metadata: Metadata = {
  title: "Faizer Shaikh | Portfolio",
  description:
    "Experienced Full-Stack Software Engineer with 3 years of expertise in Next.js, Angular, and NestJS. Proven track record of delivering scalable solutions tailored to client needs. Skilled leader and mentor, driving team success and fostering growth.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={firaCode.className} id='top'>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <AOSProvider>{children}</AOSProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
