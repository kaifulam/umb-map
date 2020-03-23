import React, { useState } from 'react';

export const UseStateExample = () => {
    const [name, setName] = useState("kaifu")
    const [address, setAddress] = useState('Seattle')



    return (
        <div>
            <h1>{name}</h1>
            <h1>{address}</h1>
            <button onClick={() => setName('Alex')}>Set Name to Alex</button>
            <button onClick={() => setAddress('HK')}>Set Address to HK</button>
        </div>
    );
};