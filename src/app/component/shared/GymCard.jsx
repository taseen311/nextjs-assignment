import Image from "next/image";
import Link from "next/link";
import React from "react";

const GymCard = ({ workout }) => {
  return (
    <Link
      href={`/workouts/${workout.id}`}
      className="group block overflow-hidden rounded-2xl border border-white/10 bg-[#111418] transition duration-300 hover:-translate-y-1 hover:border-[#ccff00]/40"
    >
      {/* Image */}
      <div className="relative h-60 overflow-hidden bg-[#181c20]">
        <Image 
          src={workout.image}
          alt={workout.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />

        {/* Category */}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          {workout.category?.map((item) => (
            <span
              key={item}
              className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold text-[#ccff00] backdrop-blur-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-black uppercase tracking-tight text-white transition group-hover:text-[#ccff00]">
          {workout.name}
        </h3>

        <p className="mt-2 bg-green-600 text-sm font-bold w-fit p-2 rounded-2xl text-white">{workout.equipment}</p>

        {/* Stats */}
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Duration
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.duration}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Calories
            </p>
            <p className="mt-1 text-sm font-bold text-white">
              {workout.caloriesBurned}
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Rating
            </p>
            <p className="mt-1 text-sm font-bold text-[#ccff00]">
              ★ {workout.rating}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default GymCard;
