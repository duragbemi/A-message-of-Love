// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "A Message of Love",
  description: "A digital love letter",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}