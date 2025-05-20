// app/layout.tsx
export const metadata = {
  title: 'Husleiekalkulator',
  description: 'Få oversikt over utgifter ved leie og boligkjøp',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <head />
      <body>{children}</body>
    </html>
  );
}
