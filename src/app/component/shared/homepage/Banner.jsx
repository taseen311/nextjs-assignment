import Image from "next/image";
import Link from "next/link";
import React from "react";
import banner from '@/assets/banner.png'

const Banner = () => {
  return (
    <section className="bg-[#0b0d0f] text-white">
      <div className="mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* Left Content */}
        <div className="max-w-2xl">

          <p className="mb-5 text-sm font-bold tracking-[0.25em] text-[#ccff00]">
            WORKOUT LIBRARY
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            TRAIN WITH INTENT.
            <br />
            <span className="text-[#ccff00]">
              LOG EVERY SET.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            FitLog is a dark, no-nonsense gym companion: pick a lift,
            lock it into today&apos;s plan, and watch the week&apos;s work
            add up.
          </p>

          <Link
            href="#library"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#bfff00]"
          >
            Browse Workouts
            <span className="text-lg">→</span>
          </Link>

        </div>

        {/* Right Image */}
        <div className="relative flex items-center justify-center lg:justify-end">

          {/* Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-[#ccff00]/10 blur-3xl sm:h-96 sm:w-96" />

          <Image
            src={banner}
            alt="Workout illustration"
            width={600}
            height={600}
            priority
            className="relative z-10 w-full max-w-md object-contain sm:max-w-lg lg:max-w-xl"
          />

        </div>

      </div>
    </section>
  );
};

export default Banner;