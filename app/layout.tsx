
import React from "react";

export const metadata = {
  title: "Atlantic Insurance Online",
  description: "Executive demo prototype",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f5f7fb" }}>
        {children}
      </body>
    </html>
  );
}
