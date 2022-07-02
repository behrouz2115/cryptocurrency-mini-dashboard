import React from 'react';
import spinner from "../gif/Rhombus.gif";

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt="loading"/>
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;