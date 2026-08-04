import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { Toaster } from "@/components/ui/sonner";

const kanit = Kanit({
  variable: "--font-sans",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sangthong-Garlic",
  description: "Sangthong-Garlic ขายส่งกระเทียมคุณภาพ",
  keywords: [
    "กระเทียม",
    "กระเทียมแสงทอง",
    "ขายส่งกระเทียม",
    "Sangthong-Garlic",
    "garlic",
  ],
  openGraph: {
    title: "Sangthong-Garlic",
    description: "Sangthong-Garlic ขายส่งกระเทียมคุณภาพ",
    siteName: "Sangthong-Garlic",
    images: [
      {
        url: "/images/brand/logo.jpg",
        width: 800,
        height: 600,
        alt: "Sangthong-Garlic Logo",
      },
    ],
    locale: "th_TH",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sangthong-Garlic",
    description: "Sangthong-Garlic ขายส่งกระเทียมคุณภาพ",
    images: ["/images/brand/logo.jpg"],
  },
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${kanit.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#faf0e6]">
        <ClientLayout>
          {children}
        </ClientLayout>
        <Toaster />
      </body>
    </html>
  );
}
