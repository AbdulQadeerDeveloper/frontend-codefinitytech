// src/components/GlobalLoader.jsx
import React from "react";

export default function GlobalLoader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
      <img
        src="/blue-22651_128.gif"
        alt="Loading..."
        className="w-52 h-52 animate-spin"
      />
    </div>
  );
}
