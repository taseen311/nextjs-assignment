import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href="/workouts">Workout</Link>
      </li>

      <li>
        <Link href="/my-plan">My Plan</Link>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 border-b border-white/10 bg-[#0b0d0f] px-4 text-white shadow-none lg:px-8">

      {/* ================= LEFT ================= */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown lg:hidden">

          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white hover:bg-white/5"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          {/* Mobile menu */}
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[100] mt-3 w-52 rounded-xl border border-white/10 bg-[#111418] p-3 shadow-xl"
          >
            {links}
          </ul>

        </div>

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >
          {/* Logo icon */}
          <div className="flex h-8 w-8 items-center justify-center">
            <span className="text-xl font-black italic text-[#ccff00]">
              F
            </span>
          </div>

          {/* Brand name */}
          <span className="text-lg font-black tracking-tight">
            FITLOG
          </span>
        </Link>

      </div>


      {/* ================= CENTER ================= */}
      <div className="navbar-center hidden lg:flex">

        <ul className="menu menu-horizontal gap-5 px-1 text-sm font-medium">

          <li>
            <Link
              href="/workouts"
              className="text-gray-400 hover:bg-transparent hover:text-[#ccff00]"
            >
              Workout
            </Link>
          </li>

          <li>
            <Link
              href="/my-plan"
              className="text-gray-400 hover:bg-transparent hover:text-[#ccff00]"
            >
              My Plan
            </Link>
          </li>

        </ul>

      </div>


      {/* ================= RIGHT ================= */}
      <div className="navbar-end gap-2">

        {/* Plan */}
        <Link
          href="/my-plan"
          className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-2 text-sm font-bold text-black transition hover:bg-[#bfff00]"
        >
          <span>Plan</span>

          <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-xs text-[#ccff00]">
            0
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
            0
          </span>

        </Link>

      </div>

    </div>
  );
};

export default Navbar;
