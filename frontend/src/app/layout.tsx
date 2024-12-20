export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-blue-600 text-white py-4 px-6 shadow-md">
          <h1 className="text-2xl font-bold">Job Application Dashboard</h1>
        </header>
        <main className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}