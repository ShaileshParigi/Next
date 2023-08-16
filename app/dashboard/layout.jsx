import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href="/">Home</Link>
      </nav>

      {children}
    </section>
  );
}
