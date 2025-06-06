import type { Metadata, Viewport } from "next";
import { Luckiest_Guy } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest-guy",
  weight: "400",
  preload: false,
});

export const metadata: Metadata = {
  title: "BBC NFTs",
  description: "Baby Billionaires Club NFTs",
};
export const viewport: Viewport = {
  // themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme} >
        <body className={`${luckiestGuy.variable}`}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
          {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
