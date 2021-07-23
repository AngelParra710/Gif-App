import React, {useState} from 'react';
import propTypes from 'prop-types';

export const AddCategory = ({setCategoria}) => {
    const [inputValue, setInputValue] = useState('Hola Mundo');
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 1 )
            setCategoria(cats => [inputValue,...cats]);
            setInputValue('');
    }
    return (
        <form onSubmit = { handleSubmit }>
            <input 
                type = 'text'
                placeholder = {inputValue}
                onChange = { handleInputChange } 
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategoria: propTypes.func.isRequired,
}