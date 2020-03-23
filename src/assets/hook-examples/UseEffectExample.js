import React, { useState, useEffect } from 'react';

export const UseEffectExample = () => {
    const [user, setUser] = useState(null);
    const [searchQuery, setSearchQuery] = useState('Bret');

    useEffect(() => {
        console.log('hi')
        const fetchFunc = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`)
            const resJson = await res.json();
            setUser(resJson[0]);
        };

        fetchFunc();
        console.log('hello');
    }, [searchQuery])

    return (
        <div>
            <input
                type='search'
                value={searchQuery}
                onChange={event => setSearchQuery(event.target.value)}
            />
            {user ? (
                <div>
                    <h3>{user.name}</h3>
                    <h3> {user.username} </h3>
                    <h3> {user.email} </h3>
                </div>
            ) : (
                    <p>No user found</p>
                )}
        </div>
    );
};