"use client";
import { GymContext } from "@/context/GymContext";
import React, { useContext } from "react";
import GymCard from "../component/shared/GymCard";

const ListedGyms = () => {
  const { todaysPlan, savedForLater } = useContext(GymContext);
  console.log(todaysPlan, savedForLater);
  return (
    <div>
      here is MY PLAn I HAVE a PLAN
      <h2>Todays plan: {todaysPlan.length}</h2>
      <h2>Saved for later plan: {savedForLater.length}</h2>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Todays Plan"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {
            todaysPlan.length>0? (
                todaysPlan.map(gym =>{
                return <GymCard key={gym.id} workout={gym}></GymCard>
                }
                )
            )
          : (
            <p className="text-center text-2xl font-bold">No schedule found</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved for later"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {
            savedForLater.length>0? (
                savedForLater.map(gym =>{
                return <GymCard key={gym.id} workout={gym}></GymCard>
                }
                )
            )
          : (
            <p className="text-center text-2xl font-bold">No schedule found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListedGyms;
