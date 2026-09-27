'use client'
import { GymContext } from '@/context/GymContext';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SavedButton = ({gym}) => {

    const {savedForLater, setSavedForLater} = useContext(GymContext);
    // console.log(gymProvider, 'gym provider')

    const handleSavedForLater = () =>{

        const alreadySaved = savedForLater.find(item => item.id === gym.id);

        if(alreadySaved){
            toast.info("Already saved for later");
            return;
        }

        if(savedForLater.length >= 5){
            toast.warning("You can save maximum 5 workouts");
            return;
        }

        

        console.log('btn triggered', gym);
        toast.success("Added to Saved later");
        setSavedForLater([...savedForLater, gym])
    }
    return (
        <div>
              <button onClick={handleSavedForLater} className="flex-1 rounded-full bg-[#ccff00] px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#bfff00]">
               ♡ Save for Later
            </button>
        </div>
);
};

export default SavedButton;