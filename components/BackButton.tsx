"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="text-[#1DA1F2] font-semibold mb-4 flex items-center gap-2"
    >
      ← Back
    </button>
  );
}
