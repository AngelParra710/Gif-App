import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGif'
import { GifGridItem } from './GifsGridItem';


export const GifGrid = ({category}) => {
    

    const {data: images, loading} = useFetchGifs(category);
    
    //getGifs();
    return (
        <>
        <h3>{category}</h3>
        {loading && <p>Cargando</p>} 
        <div className = 'card-grid animate__animated animate__bounce animate__repeat-2'>
            { images.map( img => {
                return <GifGridItem
                key = {img.id}
                {...img}/>
            })}
        </div>
        </>
    )
}
