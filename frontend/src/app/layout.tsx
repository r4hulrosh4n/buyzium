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
  title: "commerce",
  description: "commerce",
};

interface BaseLayoutProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: BaseLayoutProps) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
