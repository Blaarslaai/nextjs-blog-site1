import Link from "next/link";

export default function Custom404() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-9xl font-bold">404</h1>
          <h1 className="text-5xl font-bold">Hello there!</h1>
          <p className="py-6">This page doesn't exist...</p>
          <div className="btn btn-primary">
            <Link href="/">← Back to home</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
