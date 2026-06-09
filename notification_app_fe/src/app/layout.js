import "./globals.css";

export const metadata = {
  title: "Notification App",
  description: "AffordMed Stage 2",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
