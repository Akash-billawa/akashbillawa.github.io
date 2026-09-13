"use client";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
  onTagChange: (tag: string | null) => void;
}

export default function TagFilter({ tags, activeTag, onTagChange }: TagFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onTagChange(null)}
        className={`tag-pill text-[10px] h-6 transition-all ${
          activeTag === null
            ? "bg-text text-bg-secondary border-text"
            : ""
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag === activeTag ? null : tag)}
          className={`tag-pill text-[10px] h-6 transition-all ${
            activeTag === tag
              ? "bg-text text-bg-secondary border-text"
              : ""
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
