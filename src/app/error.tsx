"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full text-center">
        <div className="terminal-window mb-8">
          <div className="terminal-header">
            <span className="terminal-dot terminal-dot-red" />
            <span className="terminal-dot terminal-dot-yellow" />
            <span className="terminal-dot terminal-dot-green" />
          </div>
          <div className="terminal-body font-mono text-sm text-left">
            <p className="text-accent">$ process --status</p>
            <p className="text-red mt-2">FATAL: Unexpected runtime error</p>
            <p className="text-text-secondary mt-1">
              {error.message?.slice(0, 120) || "An unknown error occurred."}
            </p>
            {error.digest && (
              <p className="text-text-secondary/40 mt-1">
                Digest: {error.digest}
              </p>
            )}
            <p className="text-accent mt-3">$ _</p>
          </div>
        </div>

        <h1 className="heading-xl text-white/10 mb-8 select-none">500</h1>

        <div className="flex items-center justify-center gap-3">
          <button onClick={() => unstable_retry()} className="btn-pill-filled">
            <span>Try again</span>
          </button>
          <Link href="/" className="btn-pill">
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
