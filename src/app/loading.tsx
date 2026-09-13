export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-md w-full">
        {/* Skeleton header */}
        <div className="skeleton-line skeleton-line-lg mb-4" />
        <div className="skeleton-line skeleton-line-sm mb-8" />

        {/* Skeleton blocks */}
        <div className="space-y-4">
          <div className="skeleton-line skeleton-line-full" />
          <div className="skeleton-line skeleton-line-full" />
          <div className="skeleton-line skeleton-line-md" />
        </div>

        {/* Skeleton tags */}
        <div className="flex gap-2 mt-8">
          <div className="skeleton-tag" />
          <div className="skeleton-tag" />
          <div className="skeleton-tag" />
        </div>
      </div>
    </div>
  );
}
