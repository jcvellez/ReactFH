import React, { useState } from 'react'

const GifExpertApp = () => {    
    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    
    let handleAdd = () => {          
        //setcategories(['Hunter Galaxy',...categories] );
        setcategories(cats=> [...cats, 'Hunter Galaxy'] );
    };
    
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <button onClick={handleAdd}>Agregar</button>
            <ol>
                {
                    categories.map((category)=>{
                        return <li key={category}> {category }</li>
                    })
                }
            </ol>
        </>
    );
}

export default GifExpertApp;