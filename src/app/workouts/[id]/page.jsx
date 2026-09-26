import SavedButton from "@/app/component/shared/bookDetails/SavedButton";
import TodayButton from "@/app/component/shared/bookDetails/TodayButton";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const getGyms = async () => {
  const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data =await response.json();
  return data;
};

const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const gymData = await getGyms();
  const gym = gymData.find((gym) => gym.id === Number(id));
  console.log(gym);
  console.log(id);
//   return (
//     <div className="flex min-h-[60vh] items-center justify-center bg-[#0b0d0f] text-white">
//       <div className="text-center">
//         <h1 className="text-4xl font-black">Workout Not Found</h1>

//         <Link
//           href="/workouts"
//           className="mt-6 inline-block rounded-full bg-[#ccff00] px-6 py-3 font-bold text-black"
//         >
//           Back to Workouts
//         </Link>
//       </div>
//     </div>
//   );
// };

return (
  <main className="min-h-screen bg-[#0b0d0f] text-white">
    <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 lg:px-10 lg:py-16">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-gray-500">
        <Link href="/workouts" className="transition hover:text-[#ccff00]">
          Workouts
        </Link>

        <span>/</span>

        <span className="text-gray-300">{gym.name}</span>
      </div>

      {/* Main Details */}
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* ================= IMAGE ================= */}
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#111418]">
          <div className="relative aspect-square w-full">
            <Image
              src={gym.image}
              alt={gym.name}
              fill
              priority
              className="object-cover"
            />

            {/* Categories */}
            <div className="absolute left-5 top-5 flex flex-wrap gap-2">
              {gym.category?.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-black/70 px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#ccff00] backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ================= CONTENT ================= */}
        <div className="flex flex-col justify-center">
          {/* Small title */}
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-[#ccff00]">
            Workout Details
          </p>

          {/* Title */}
          <h1 className="text-4xl font-black uppercase leading-none tracking-tight sm:text-5xl lg:text-6xl">
            {gym.name}
          </h1>

          {/* Description */}
          <p className="mt-6 text-base leading-7 text-gray-400 sm:text-lg">
            {gym.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {gym.category?.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Specs */}
          <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            <div className="bg-[#111418] p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Equipment
              </p>

              <p className="mt-2 text-sm font-bold text-white">
                {gym.equipment}
              </p>
            </div>

            <div className="bg-[#111418] p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Duration
              </p>

              <p className="mt-2 text-sm font-bold text-white">
                {gym.duration}
              </p>
            </div>

            <div className="bg-[#111418] p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Calories
              </p>

              <p className="mt-2 text-sm font-bold text-white">
                {gym.caloriesBurned}
              </p>
            </div>

            <div className="bg-[#111418] p-4">
              <p className="text-xs uppercase tracking-wide text-gray-500">
                Rating
              </p>

              <p className="mt-2 text-sm font-bold text-[#ccff00]">
                ★ {gym.rating}
              </p>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8">
            <h2 className="text-xl font-black uppercase">Instructions</h2>

            <div className="mt-4 space-y-3">
              {gym.instructions?.map((instruction, index) => (
                <div key={index} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#ccff00] text-xs font-black text-black">
                    {index + 1}
                  </span>

                  <p className="text-sm leading-6 text-gray-400">
                    {instruction}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <TodayButton gym={gym}/>

            <SavedButton gym={gym}/>
          </div>
        </div>
      </div>
    </div>
  </main>
);
}
export default DetailsPage;
