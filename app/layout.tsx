import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CustomCursorManager from "./_components/_cursor/context/manager";
import CustomCursor from "./_components/_cursor/index";
import "./globals.css";
import "./typography.css";

const inter = Inter({ subsets: ["latin"] });

const metaTitle = "<ASH/>";
const metaDescription = "Ashkan Rahnavardi's Portfolio | Full-Stack Developer";

export const metadata: Metadata = {
  title: metaTitle,
  description: metaDescription,
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    images: [
      {
        url: "/ash.png",
        width: 175,
        height: 48,
        alt: "ASH Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: metaTitle,
    description: metaDescription,
    images: ["/ash.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/volcano-favicon.svg" type="image/svg+xml" />

        <title>{metaTitle}</title>
      </head>
      <body className={inter.className}>
        <CustomCursorManager>{children}</CustomCursorManager>
      </body>
    </html>
  );
}
