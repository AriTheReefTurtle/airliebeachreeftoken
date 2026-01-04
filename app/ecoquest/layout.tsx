"use client";

export default function EcoQuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen" style={{ background: "var(--reef-bg)", color: "var(--reef-text)" }}>
      {children}
    </div>
  );
}
