"use client";

export function SearchBar({ onChange }: { onChange: (value: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
