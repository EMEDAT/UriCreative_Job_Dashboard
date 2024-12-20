export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-lg font-bold">Job Application Dashboard</h1>
        </header>
        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}