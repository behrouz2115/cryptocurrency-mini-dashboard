import React, {useEffect,useState} from 'react';

import {getCoin} from '../services/api';//API
 import Loader from './Loader';
 import Coin from './Coin';

const Landing = () => {

    const [coins,setCoins] = useState([]);
    const [search,setSearch] = useState([]);

    useEffect(()=>{
        const fetchAPI = async()=>{
         const data = await getCoin();
         console.log(data)
         setCoins(data)
        }
        fetchAPI();
    },[])

    const changeHandler = event =>{
        setSearch(event.target.value);
    }

    const searchedCoins = coins.filter(coin=>coin.name.includes(search))

    return (
        <div>
            <input type="text" placeholder="Search" value={search} onChange={changeHandler} />
            {
                coins.length?
            <div>
                {
                    searchedCoins.map(coin=><Coin
                                          key={coin.id}
                                          name={coin.name}
                                          image={coin.image}
                                          symbol={coin.symbol}
                                          price={coin.current_price}
                                          marketCap={coin.market_cap}
                                          priceChange={coin.price_change_percentage_24h}/>)
                }           
            </div>:<Loader/>
            }
        </div>
    );
};

export default Landing;