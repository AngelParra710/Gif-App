import React, {useState} from 'react';

export const GifExpertApp = () => {
    // const categories = ['OnePuch','Samurai X', 'Dragon Ball'];
    
    const [categories, setCategories] = useState (['OnePuch','Samurai X', 'Dragon Ball'])
    const handleAdd = () => {
        setCategories( cats => [...categories, 'Sakura']);
    }
    return (
        <div>
            <h2>Gif Expert App</h2>
            <hr></hr>
            <button onClick = {handleAdd}>Agregar</button>
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