export default function RootLayout({ children }: { children: any }) {
  return (
    <html>
      <body>
        <header>header</header>
        <main>{children}</main>
      </body>
    </html>
  );
}
