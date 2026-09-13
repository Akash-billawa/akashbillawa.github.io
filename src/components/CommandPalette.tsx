"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const commands = [
  { label: "About", href: "#about", shortcut: "A" },
  { label: "Skills", href: "#skills", shortcut: "S" },
  { label: "Projects", href: "#projects", shortcut: "P" },
  { label: "Research", href: "#research", shortcut: "R" },
  { label: "Education", href: "#education", shortcut: "E" },
  { label: "Achievements", href: "#achievements", shortcut: "C" },
  { label: "Blog", href: "#blog", shortcut: "B" },
  { label: "Gallery", href: "#gallery", shortcut: "G" },
  { label: "Contact", href: "#contact", shortcut: "T" },
  { label: "Back to Top", href: "#", shortcut: "0" },
];

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase())
  );

  const close = useCallback(() => {
    setIsOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const navigate = useCallback(
    (href: string) => {
      close();
      if (href === "#") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }
    },
    [close]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };
    const onCustomToggle = () => setIsOpen((prev) => !prev);
    document.addEventListener("keydown", onKey);
    window.addEventListener("toggle-command-palette", onCustomToggle);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("toggle-command-palette", onCustomToggle);
    };
  }, []);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const clampedIndex = Math.min(
    selectedIndex >= filtered.length ? 0 : selectedIndex,
    filtered.length - 1
  );

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[clampedIndex]) {
      navigate(filtered[clampedIndex].href);
    } else if (e.key === "Escape") {
      close();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={close}>
      <div
        className="command-palette"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search input */}
        <div className="command-input-wrapper">
          <span className="text-text-secondary/40 flex-shrink-0">&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Type a section..."
            className="command-input"
          />
          <kbd className="command-kbd">esc</kbd>
        </div>

        {/* Results */}
        <div className="command-results">
          {filtered.length === 0 && (
            <div className="command-empty">No results found.</div>
          )}
          {filtered.map((cmd, i) => (
            <button
              key={cmd.label}
              onClick={() => navigate(cmd.href)}
              className={`command-item ${i === clampedIndex ? "command-item-active" : ""}`}
            >
              <span>{cmd.label}</span>
              <kbd className="command-item-shortcut">{cmd.shortcut}</kbd>
            </button>
          ))}
        </div>

        {/* Footer hint */}
        <div className="command-footer">
          <span className="text-text-secondary/30 text-[10px]">
            Navigate with arrows &middot; Enter to select &middot; Esc to close
          </span>
        </div>
      </div>
    </div>
  );
}
