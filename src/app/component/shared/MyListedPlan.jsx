
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyListedPlan = ({ workout, onRemove }) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#111418] p-4 transition hover:border-[#ccff00]/30">
      
      <div className="grid gap-6 md:grid-cols-[280px_1fr]">

        {/* Image */}
        <div className="relative h-64 overflow-hidden rounded-xl bg-[#181c20]">
          <Image
            src={workout.image}
            alt={workout.name}
            fill
            className="object-cover"
          />

          {/* Category */}
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {workout.category?.map((item) => (
              <span
                key={item}
                className="rounded-full bg-black/70 px-3 py-1 text-xs font-bold uppercase text-[#ccff00] backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center py-2">

          <h3 className="text-2xl font-black uppercase tracking-tight text-white">
            {workout.name}
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            {workout.equipment}
          </p>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-3 border-y border-white/10 py-5">

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Duration
              </p>

              <p className="mt-1 font-bold text-white">
                {workout.duration}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Calories
              </p>

              <p className="mt-1 font-bold text-white">
                {workout.caloriesBurned}
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Rating
              </p>

              <p className="mt-1 font-bold text-[#ccff00]">
                ★ {workout.rating}
              </p>
            </div>

          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">

            <Link
              href={`/workouts/${workout.id}`}
              className="flex-1 rounded-full bg-[#ccff00] px-5 py-3 text-center text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#bfff00]"
            >
              View Details
            </Link>

            <button
              onClick={() => onRemove(workout.id)}
              className="flex-1 rounded-full border border-white/20 px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:border-red-400 hover:text-red-400"
            >
              Remove
            </button>

          </div>

          <p className="mt-4 text-xs text-gray-500">
            ✓ Added to today&apos;s plan
          </p>

        </div>
      </div>
    </div>
  );
};
export default MyListedPlan;