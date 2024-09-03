import type { Metadata } from "next";
import { Poppins, Jura, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

const jura = Jura({
  subsets: ['latin'],
  variable: '--font-jura',
  display: 'swap',
  weight: ['400', '700'], // Add the weights you need
});

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-orbitron-mono',
  display: 'swap',
  weight: ['400', '700'], // Add the weights you need
});

export const metadata: Metadata = {
  title: "NFT Zone",
  description: "A platform to see all the nft owned by user's public address",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jura.variable} ${orbitron.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
