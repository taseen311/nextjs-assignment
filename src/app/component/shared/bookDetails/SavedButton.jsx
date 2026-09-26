'use client'
import { GymContext } from '@/context/GymContext';
import React, { useContext } from 'react';

const SavedButton = ({gym}) => {

    const {savedForLater, setSavedForLater} = useContext(GymContext);
    // console.log(gymProvider, 'gym provider')

    const handleSavedForLater = () =>{
        console.log('btn triggered', gym);
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