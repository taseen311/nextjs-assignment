import Link from "next/link";
import React from "react";
import logo from '@/assets/logo.png'
import NavbarCounter from "./NavbarCounter";
import Image from "next/image";

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
              <Image src={logo} height={20} width={20} alt="logo"/>
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
   
      <NavbarCounter/>

    </div>
  );
};

export default Navbar;
