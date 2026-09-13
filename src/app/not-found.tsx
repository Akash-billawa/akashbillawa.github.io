import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        {/* Terminal-style header */}
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
          </div>
          <div className="terminal-body font-mono text-sm text-left">
            <p className="text-accent">$ curl https://akash.dev/this-page</p>
            <p className="text-red mt-2">Error: 404_NOT_FOUND</p>
            <p className="text-text-secondary mt-1">
              The requested resource does not exist in this dimension.
            </p>
            <p className="text-text-secondary mt-1">
              Perhaps it was moved, deleted, or never existed at all.
            </p>
            <p className="text-accent mt-3">$ _</p>
          </div>
        </div>

        {/* Big number */}
        <h1 className="heading-xl text-white/10 mb-8 select-none">404</h1>

        {/* Action */}
        <Link href="/" className="btn-pill-filled inline-flex">
          <span>Back to safety</span>
        </Link>
      </div>
    </div>
  );
}
