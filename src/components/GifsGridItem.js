import React from 'react';
import { Grid } from '@material-ui/core';
export const GifGridItem = ( {id,title,url} ) => {
    
    console.log(id, title, url);
    return (
        <Grid className = 'card' item xs={4}>
            <img src = {url} alt={title} />
            <p>{title}</p>
        </Grid>
    );
}
