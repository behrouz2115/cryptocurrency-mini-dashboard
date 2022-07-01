import React, {useEffect,useState} from 'react';

import {getCoin} from '../services/api';//API

const Landing = () => {
    useEffect(()=>{
        const fetchAPI = async()=>{
         const data = await getCoin();
         console.log(data)
        }
        fetchAPI();
    },[])
    return (
        <div>
            landing 
        </div>
    );
};

export default Landing;