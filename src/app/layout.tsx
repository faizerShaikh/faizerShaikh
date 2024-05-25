import { firaCode } from "@/constants";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/aos-provider";

export const metadata: Metadata = {
  title: "Faizer Shaikh | Portfolio",
  description:
    "Full-Stack Software Engineer with 3+ years of experience in Next.js, Angular, and NestJS. Proven leader in developing scalable web applications and reusable components. Strong skills in optimizing performance and mentoring teams for high-quality project outcomes. Adept at utilizing modern frontend and backend technologies, implementing reusable component libraries, and optimizing database schemas for enhanced performance.",
  keywords:
    "Protfolio, Full Stack Developer, Software Engineer, Frontend Developer, Backend Developer, Portfolio website, Microservies, Frontend",
  openGraph: {
    title: "Faizer Shaikh | Portfolio",
    description:
      "Full-Stack Software Engineer with 3+ years of experience in Next.js, Angular, and NestJS. Proven leader in developing scalable web applications and reusable components. Strong skills in optimizing performance and mentoring teams for high-quality project outcomes. Adept at utilizing modern frontend and backend technologies, implementing reusable component libraries, and optimizing database schemas for enhanced performance.",
    url: "https://faizer-shaikh.vercel.app/",
    siteName: "Faizer Shaikh | Portfolio",
    images: [
      {
        url: "https://faizer-shaikh.vercel.app/images/my-pic.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
    countryName: "India",
    emails: "faizershaikh25@gmail.com",
    phoneNumbers: "+91 7030652233",
  },
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
