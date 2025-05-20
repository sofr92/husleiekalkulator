// app/layout.tsx

export const metadata = {
  title: "Husleiekalkulator",
  description: "Få oversikt over utgifter ved leie og boligkjøp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Manrope', sans-serif" }}>{children}</body>
    </html>
  );
}
