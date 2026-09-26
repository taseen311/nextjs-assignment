'use client'
import { GymContext } from '@/context/GymContext';
import React, { useContext } from 'react';

const ListedGyms = () => {
    const {todaysPlan, savedForLater} = useContext(GymContext);
    console.log(todaysPlan, savedForLater);
    return (
        <div>
            here is MY PLAn I HAVE a PLAN
        </div>
    );
};

export default ListedGyms;