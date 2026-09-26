import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d0f] text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 sm:px-6 md:flex-row lg:px-8">

        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          {/* Logo */}
          <span className="text-2xl font-black italic text-[#ccff00]">
            F
          </span>

          {/* Brand Name */}
          <span className="text-lg font-black tracking-tight">
            FITLOG
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-center text-sm text-gray-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>

      </div>
    </footer>
  );
};

export default Footer;