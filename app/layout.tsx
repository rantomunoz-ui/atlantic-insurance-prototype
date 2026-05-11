export const metadata = { title: "Atlantic Insurance" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html><body style={{margin:0,fontFamily:"Arial, sans-serif"}}>{children}</body></html>;
}
