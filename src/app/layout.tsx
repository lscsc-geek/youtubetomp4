import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "How to Convert YouTube Video to MP4 - Best Free Online Tools",
  description: "Learn how to convert YouTube videos to MP4 format with our step-by-step guide. Discover the best tools and easy methods to download videos safely.",
  keywords: "how to convert youtube to mp4, youtube video downloader, youtube converter, download youtube videos, mp4 converter",
  metadataBase: new URL('https://youtubetomp4.vip'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "How to Convert YouTube Video to MP4 - Best Free Online Tools",
    description: "Learn how to convert YouTube videos to MP4 format with our step-by-step guide. Discover the best tools and easy methods to download videos safely.",
    type: "website",
    url: 'https://youtubetomp4.vip',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
        >
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "po212xvzom");
          `}
        </Script>
        <Script
          id="google-adsense"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4514454519275192"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
