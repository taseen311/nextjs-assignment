"use client";

import Link from "next/link";
import React, { useContext } from "react";
import { GymContext } from "@/context/GymContext";

const NavbarCounter = () => {
  const { todaysPlan, savedForLater } = useContext(GymContext);

  return (
    <div className="navbar-end gap-2">

      {/* Plan */}
      <Link
        href="/my-plan"
        className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#bfff00]"
      >
        <span>Plan</span>

        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs text-[#ccff00]">
          {todaysPlan.length}
        </span>
      </Link>

      {/* Saved */}
      <Link
        href="/my-plan"
        className="hidden items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-[#ccff00] hover:text-[#ccff00] sm:flex"
      >
        {/* Bookmark icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-4-7 4V5z"
          />
        </svg>

        <span>Saved</span>

        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-white/10 px-1 text-xs">
          {savedForLater.length}
        </span>
      </Link>

    </div>
  );
};

export default NavbarCounter;