"use client";

import { useEffect, useState } from "react";

export default function MoodToggle() {
  const [mood, setMood] = useState<"sun" | "moon">("sun");

  useEffect(() => {
    const root = document.documentElement;
    if (mood === "moon") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mood]);

  return (
    <button
      onClick={() => setMood(mood === "sun" ? "moon" : "sun")}
      className="fixed top-2 right-8 text-3xl h-12 w-12 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 z-50"
      aria-label={`Switch to ${mood === "sun" ? "dark" : "light"} mode`}
    >
      {mood === "sun" ? "🌞" : "🌚"}
    </button>
  );
}
