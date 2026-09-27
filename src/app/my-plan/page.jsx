"use client";
import { GymContext } from "@/context/GymContext";
import React, { useContext, useState } from "react";
import GymCard from "../component/shared/GymCard";
import MyListedPlan from "../component/shared/MyListedPlan";
import { toast } from "react-toastify";

const ListedGyms = () => {
  const { todaysPlan, setTodaysPlan, savedForLater, setSavedForLater } =
    useContext(GymContext);
  console.log(todaysPlan, savedForLater);

  const [activeTab, setActiveTab] = useState("today");

  const activePlan = activeTab === "today"? todaysPlan : savedForLater;



  const totalExercises = activePlan.length;

  const totalMinutes = activePlan.reduce((total, gym) => {
    return total + parseInt(gym.duration);
  }, 0);

  const totalCalories = activePlan.reduce((total, gym) => {
    return total + parseInt(gym.caloriesBurned);
  }, 0);

  const handleRemoveToday = (id) => {
    setTodaysPlan((prev) => prev.filter((gym) => gym.id !== id));

    toast.success("Removed from todays Plan");
  };

  const handleRemoveSaved = (id) => {
    setSavedForLater((prev) => prev.filter((gym) => gym.id !== id));

    toast.success("Removed from Saved");
  };

  return (
    <div className="container mx-auto">
      <div className="my-10 mx-10">
        <h2 className="text-3xl font-bold">MY PLAN</h2>
        <p className="font-bold">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Metrics */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {/* Exercises */}
          <div className="rounded-xl border border-white/10 bg-[#111418] p-5">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Exercises
            </p>

            <p className="mt-2 text-3xl font-black text-[#ccff00]">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="rounded-xl border border-white/10 bg-[#111418] p-5">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Minutes
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {totalMinutes}
            </p>
          </div>

          {/* Calories */}
          <div className="rounded-xl border border-white/10 bg-[#111418] p-5">
            <p className="text-xs uppercase tracking-wide text-gray-500">
              Calories
            </p>

            <p className="mt-2 text-3xl font-black text-white">
              {totalCalories}
            </p>
          </div>
        </div>
      </div>
      {/* <h2>Todays plan: {todaysPlan.length}</h2>
      <h2>Saved for later plan: {savedForLater.length}</h2> */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Todays Plan(${todaysPlan.length})`}
          checked = {activeTab === "today"}
          onChange={()=>setActiveTab("today")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {todaysPlan.length > 0 ? (
            todaysPlan.map((gym) => {
              return (
                <MyListedPlan
                  key={gym.id}
                  workout={gym}
                  onRemove={() => handleRemoveToday(gym.id)}
                ></MyListedPlan>
              );
            })
          ) : (
            <p className="text-center text-2xl font-bold">No schedule found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Saved for later (${savedForLater.length})`}
          // defaultChecked
          checked={activeTab==='saved'}
          onChange={()=>setActiveTab("saved")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {savedForLater.length > 0 ? (
            savedForLater.map((gym) => {
              return (
                <MyListedPlan
                  key={gym.id}
                  workout={gym}
                  onRemove={() => handleRemoveSaved(gym.id)}
                ></MyListedPlan>
              );
            })
          ) : (
            <p className="text-center text-2xl font-bold">No schedule found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedGyms;
