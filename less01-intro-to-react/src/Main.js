import React from 'react';

function Main() {
    const name = 'John';
    const age = 23;
    return (
        <div className='main' style={{ backgroundColor: 'black', color:'white' }}>
            <h1>{name}</h1>
            <h1>{age}</h1>
            {50+10}
        </div>
    )
}
export default Main