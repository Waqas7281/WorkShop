import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from './components/web/navbar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rapid Road Assist - 24/7 Car Assistance in UAE",
  description:
    "Rapid Road Assist offers 24/7 car assistance services across the UAE, including towing, battery jump-starts, flat tire changes, and fuel delivery. Reliable help when you need it most.",
  keywords:
    "roadside assistance, car towing, battery jump-start, flat tire change, fuel delivery, UAE car services, emergency car help, 24/7 roadside support, vehicle breakdown assistance, Rapid Road Assist",
  openGraph: {
    title: "Rapid Road Assist - 24/7 Car Assistance in UAE",
    description:
      "Rapid Road Assist offers 24/7 car assistance services across the UAE, including towing, battery jump-starts, flat tire changes, and fuel delivery. Reliable help when you need it most.",
    url: "https://taqiworkshop.vercel.app",
    siteName: "Rapid Road Assist",
    locale:'en_AE',
    type: "website",
  },
  robots: {
    index:true,
    follow:true,
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
