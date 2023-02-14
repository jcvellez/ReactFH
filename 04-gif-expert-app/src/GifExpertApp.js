import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {
    const [categories, setcategories] = useState(['One Punch']);
    // let handleAdd = () => {          
    //     //setcategories(['Hunter Galaxy',...categories] );
    //     setcategories(cats=> [...cats, 'Hunter Galaxy'] );
    // };


    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories={setcategories} />

            <hr></hr>

            <ol>
                {
                    categories.map(category => //<li key={category}> {category }</li> )
                        <GifGrid
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    );
}

export default GifExpertApp;