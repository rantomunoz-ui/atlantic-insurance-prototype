
import React from "react";
export const metadata = {
  title: "Atlantic Insurance Online",
  description: "Vehicle Insurance Prototype",
};
export default function RootLayout({children}:{children: React.ReactNode}) {
  return (
    <html lang="en">
      <body style={{margin:0,fontFamily:"Inter, Arial, sans-serif",background:"#f4f7fb"}}>
        {children}
      </body>
    </html>
  );
}
