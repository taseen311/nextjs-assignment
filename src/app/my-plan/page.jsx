'use client'
import { GymContext } from '@/context/GymContext';
import React, { useContext } from 'react';

const ListedGyms = () => {
    const {todaysPlan} = useContext(GymContext)
    return (
        <div>
            here is MY PLAn I HAVE a PLAN
        </div>
    );
};

export default ListedGyms;