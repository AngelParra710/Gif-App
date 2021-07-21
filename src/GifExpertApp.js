import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
     //const categories = ['OnePuch','Samurai X', 'Dragon Ball'];

    const [categories, setCategories] = useState (['OnePuch','Samurai X', 'Dragon Ball'])
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
                    categories.map( category => {
                        return <li key = { category }>{category}</li>
                    } )
                }
            </ul>
        </div>
    )
}