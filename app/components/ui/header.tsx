import React from "react";


export default function Header() {
    return (
    <header className="flex items-center justify-center px-6 py-4 shadow" style={{ backgroundColor: "#098d69ff" }}>
      <span className="font-bold text-white text-2xl" style={{ fontFamily: "cursive, 'Brush Script MT', 'Comic Sans MS', sans-serif" }}>
        Hyperion-chat
      </span>
    </header>
  );
}