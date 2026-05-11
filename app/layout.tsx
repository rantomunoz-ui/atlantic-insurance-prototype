
import React from "react";

export const metadata = {
  title: "Atlantic Insurance Prototype",
  description: "Vehicle insurance prototype",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif", background: "#f9fafb" }}>
        {children}
      </body>
    </html>
  );
}
