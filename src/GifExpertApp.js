import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
     //const categories = ['OnePuch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState (['Halo'])
    // const handleAdd = () => {
    //     setCategories( cats => [...categories, 'Sakura']);
    // }
    return (
        <div>
            <h2>Gif Expert App</h2>
            <AddCategory setCategoria = {setCategories}/>
            <hr></hr>
            <button>Agregar</button>
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