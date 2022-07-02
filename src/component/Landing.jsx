import React, {useEffect,useState} from 'react';

import {getCoin} from '../services/api';//API
 import Loader from './Loader';

const Landing = () => {

    const [coins,setCoins] = useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
         const data = await getCoin();
         setCoins(data)
        }
        fetchAPI();
    },[])

    return (
        <div>
            <Loader/>
            <input type="text" placeholder="Search" />
            <div>
                {
                    coins.map(coin=><p key={coin.id}>{coin.name}</p>)
                }
            </div>
        </div>
    );
};

export default Landing;