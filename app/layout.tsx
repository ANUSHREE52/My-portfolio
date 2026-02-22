import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300"
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
