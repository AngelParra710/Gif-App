import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import { Button } from '@material-ui/core';


export const GifExpertApp = () => {
     //const categories = ['OnePuch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState ([])
    // const handleAdd = () => {
    //     setCategories( cats => [...categories, 'Sakura']);
    // }
    return (
        <div>
            <h2 className= 'text'>Gif App</h2>
            <h4>Ejemplo de consumo de Api</h4>
            <AddCategory setCategoria = {setCategories}/>
            <hr></hr>
            <ul>
                {
                    categories.map( category => <GifGrid 
                        key = {category}
                        category = {category}
                        />)
                }
            </ul>
        </div>
    )
}