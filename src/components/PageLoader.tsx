"use client";

import { useState, useEffect } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Keep mounted until the CSS fade-out (0.5s delay + 0.4s duration) completes
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="page-loader">
      <div className="page-loader-bar" />
    </div>
  );
}
