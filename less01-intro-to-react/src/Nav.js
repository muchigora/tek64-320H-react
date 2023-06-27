import React from 'react';

function Nav(){
    const isLogged = false;

    return (
        <div className="nav">
            {isLogged && <h1>I'm visible</h1>}
            {isLogged ? <h1>I'm visible</h1> : <h1>I'm not visible</h1>}
        </div>
    )
}
 export default Nav;