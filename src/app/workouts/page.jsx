import React, { Suspense } from 'react';
import GymCard from '../component/shared/GymCard';

const getGyms = async() =>{
    const response = await fetch("https://api.abcz.workers.dev/api/fitlog");
    const data = response.json();
    return data;
}

const Gyms = async() => {
    const gymsData = await getGyms();
    console.log(gymsData);
    return (
        <div>
            <h2>Here is all the workouts</h2>
            <Suspense fallback={<p>Loading Data....</p>}>
                <div className='grid grid-cols-3 gap-10'>
                {
                    gymsData.map(workout=>{
                        return <GymCard key={workout.id} workout={workout}/>
                    })
                }
            </div>
            </Suspense>
        </div>
    );
};

export default Gyms;