import React, {useState, useEffect} from 'react'

export const GifGrid = ({ category }) => {
    const [count, setcount] = useState(0);
    useEffect(() => {
        getGifs();
    }, [])
    
    const getGifs = async () => {
        const url1 = 'https://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=10&api_key=vkLsiWGxnOyN6sruCs0lwMMRgdJ5Z2tM';
        const respuesta = await fetch( url1 );
        const {data} = await respuesta.json();
        
        const gifs = data.map((img)=>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
    }

    //getGifs();
    return (
        <div>
            <h3>{category}</h3>
            <h3>{count} </h3>
            <button onClick={ ()=>setcount(count + 1) }>dale</button>
        </div>
    )
}
