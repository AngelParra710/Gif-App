import React from 'react'
import { useFetchGifs } from '../Hooks/useFetchGif'
import { GifGridItem } from './GifsGridItem';
import { Grid } from '@material-ui/core';

export const GifGrid = ({category}) => {
    

    const {data: images, loading} = useFetchGifs(category);
    
    //getGifs();
    return (
        <>
        {loading && <p className = 'loading'>Cargando....</p>} 
        <div className='container'>
        <Grid className = 'card-grid' justifyContent="center" container spacing ={0}>
            { images.map( img => {
                return <GifGridItem
                key = {img.id}
                {...img}/>
            })}
        </Grid>
        </div>
        </>
    )
}
