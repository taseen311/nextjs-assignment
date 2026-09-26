'use client'
import { GymContext } from '@/context/GymContext';
import React, { useContext } from 'react';

const TodayButton = ({gym}) => {

    const {todaysPlan, setTodaysPlan} = useContext(GymContext);
    // console.log(gymProvider, 'gym provider')

    const handleAddTodaysPlan = () =>{
        console.log('btn triggered', gym);
        setTodaysPlan([...todaysPlan, gym])
    }
    return (
        <div>
              <button onClick={handleAddTodaysPlan} className="flex-1 rounded-full bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#bfff00]">
              + Add to Today&apos;s Plan
            </button>
        </div>
);
};

export default TodayButton;