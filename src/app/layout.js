import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header.js"; // Import the Header component
import Footer from "@/components/Footer.js"; // Import the Footer component
import { BookProvider } from "@/utility/BookContext.js"; // Import the BookProvider from the BookContext so that we can use the context in the entire app

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bookbite",
  description: "En bokregistreringsapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <BookProvider>
          <Header />
          {children}
          <Footer />
        </BookProvider>
      </body>
    </html>
  );
}
