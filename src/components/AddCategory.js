import React, {useState} from 'react';
import propTypes from 'prop-types';
import './Categories.css';
export const AddCategory = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState('Que gif buscaremos?   ');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 1 )
            setCategoria(cats => [inputValue]);
            setInputValue('');
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                className = 'textfield'
                placeholder = {inputValue}
                onChange = { handleInputChange } 
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategoria: propTypes.func.isRequired,
}