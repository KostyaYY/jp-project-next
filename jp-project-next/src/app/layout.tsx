import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const Playfair = Playfair_Display({
  variable: "--font-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Justyfin Partners - Юридичні та бізнес-рішення',
    template: '%s | Justyfin Partners',
  },
  description: 'Інноваційні юридичні послуги та бізнес-консалтинг для успіху вашого бізнесу.',
  keywords: 'юридичні послуги, бізнес-консалтинг, Justyfin Partners, новини, аналітика',
  // openGraph: {
  //   title: 'Justyfin Partners',
  //   description: 'Професійні рішення для бізнесу.',
  //   url: 'https://www.justyfinpartners.com', // Заміни на реальний домен
  //   siteName: 'Justyfin Partners',
  //   images: '/og-image.jpg',
  //   locale: 'uk_UA',
  //   type: 'website',
  // },
  // twitter: {
  //   card: 'summary_large_image',
  //   title: 'Justyfin Partners',
  //   description: 'Інноваційні рішення.',
  //   images: '/twitter-image.jpg',
  // },
  // alternates: {
  //   canonical: 'https://www.justyfinpartners.com',
  //   languages: {
  //     'uk-UA': 'https://www.justyfinpartners.com/uk', // Якщо повна i18n
  //     'en-US': 'https://www.justyfinpartners.com/en',
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Playfair.variable} antialiased`}
      >
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
