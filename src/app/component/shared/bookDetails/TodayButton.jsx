'use client'
import { GymContext } from '@/context/GymContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayButton = ({gym}) => {

    const {todaysPlan, setTodaysPlan} = useContext(GymContext);
    // console.log(gymProvider, 'gym provider')

    const handleAddTodaysPlan = () =>{

        const alreadyAdded = todaysPlan.find(item=> item.id === gym.id)
        
        if(alreadyAdded){
            toast.info("Already added to todays plan")
            return
        }

        if(todaysPlan.length >= 5){
            toast.warning("You can add maximum 5 workouts")
            return;
        }

        console.log('btn triggered', gym);
        toast.success("Todays plan is ready!");
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