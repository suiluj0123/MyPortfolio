import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "My portfolio",
  description: "Minimalist and interactive developer portfolio website structure.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans antialiased relative min-h-screen">
        {/* Page-wide halftone backdrop */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
          <div className="halftone halftone-wide mask-tr absolute right-0 top-0 h-[70vh] w-[65vw] opacity-[0.06]"></div>
          <div className="halftone mask-bl absolute bottom-0 left-0 h-[60vh] w-[55vw] opacity-[0.05]"></div>
        </div>

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
