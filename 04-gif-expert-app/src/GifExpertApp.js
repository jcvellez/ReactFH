import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

const GifExpertApp = () => {    
    const [categories, setcategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    // let handleAdd = () => {          
    //     //setcategories(['Hunter Galaxy',...categories] );
    //     setcategories(cats=> [...cats, 'Hunter Galaxy'] );
    // };
    
    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories= {setcategories} />
            
            <hr></hr>
            
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