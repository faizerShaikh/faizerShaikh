import { firaCode } from "@/constants";
import "./globals.css";
import type { Metadata } from "next";
import { FaHeart } from "react-icons/fa";
import Navbar from "@/components/common/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import AOSProvider from "@/components/aos-provider";
import { Suspense } from "react";
import Loading from "./loading";

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
      <body className={firaCode.className}>
        <Suspense fallback={<Loading />}>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <Navbar />

            <AOSProvider>
              <div className='container mx-auto px-5'>{children}</div>
            </AOSProvider>
            <footer className='flex justify-center items-center py-7 bg-secondary'>
              <p className='text-text-color-1 flex gap-1 md:text-base text-xs'>
                2024 | Designed and coded with{" "}
                <FaHeart fontSize={18} className='text-red-600' />
                by Faizer Shaikh
              </p>
            </footer>
          </ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
