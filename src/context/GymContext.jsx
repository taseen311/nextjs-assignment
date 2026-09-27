'use client'

import React, { createContext, useState } from 'react';

export const GymContext = createContext({});

const GymProvider = ({children}) => {
    const [todaysPlan, setTodaysPlan] = useState([])
    const [savedForLater, setSavedForLater] = useState([]);
    
    const sharedData = {
        todaysPlan,
        setTodaysPlan,
        savedForLater,
        setSavedForLater
    };

    return (
        
            <GymContext.Provider value={sharedData}>{children}
            </GymContext.Provider>        
        
    );
};

export default GymProvider;