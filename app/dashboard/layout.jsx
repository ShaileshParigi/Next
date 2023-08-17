import Link from "next/link";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <nav>
        <Link href="/">
          <span className="underline">Home</span>
        </Link>
      </nav>
      <div className="flex items-center justify-between mx-8">
        <h1 className="text-lg text-red-400 font-bold">
          Dash Board Heading from layout.jsx file that always stays at the top
          of dashboard route
        </h1>
        <h4>This even stays on inner routes and folders</h4>
      </div>
      {children}
    </section>
  );
}
