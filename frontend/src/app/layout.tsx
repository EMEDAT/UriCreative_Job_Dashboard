// layout.tsx
import './styles/styles.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container">
          <h1>Job Application Dashboard</h1>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}