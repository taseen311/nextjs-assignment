import React from 'react';
import GymCard from '../GymCard';

const getGyms = async() =>{
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = await response.json();
    return data;
}

const Gyms = async() => {
    const gymsData = await getGyms();
    console.log(gymsData);
    return (
        <div className='container mx-auto my-20'>
            <h2 className='text-3xl font-bold mb-2'>THE LIBRARY</h2>
            <p className='mb-10 font-bold'>Twelve lifts covering every major muscle group.</p>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
                {
                    gymsData.map(workout=>{
                        return <GymCard key={workout.id} workout={workout}/>
                    })
                }
            </div>
        </div>
    );
};

export default Gyms;