import type { Metadata } from "next";
import "../styles/globals.css";
import BaseLayout from "../components/layout/BaseLayout";
import { Poppins } from 'next/font/google'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})
export const metadata: Metadata = {
  title: "Buyzium",
  description: "Discover a wide range of products at Buyzium, including electronics, fashion, and home essentials. Enjoy secure shopping and fast delivery!",
  openGraph: {
    title: "Buyzium - Your One-Stop Shop for Electronics, Fashion, and More",
    description: "Shop electronics, fashion, and home essentials at Buyzium. Secure shopping and fast delivery await you!",
    url: "https://www.buyzium.com",
    type: "website",
    images: ["/path-to-preview-image.jpg"], // Replace with actual image path
  },
  twitter: {
    card: "summary_large_image",
    title: "Buyzium - Your One-Stop Shop for Electronics, Fashion, and More",
    description: "Shop electronics, fashion, and home essentials at Buyzium. Secure shopping and fast delivery!",
    images: ["/path-to-preview-image.jpg"], // Replace with actual image path
  },
};


interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
