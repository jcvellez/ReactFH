import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {
    const [inputValue, setinputValue] = useState('') // ''

    const handleInputChange = (e) => { //
        setinputValue(e.target.value);       
    };

    const handleSubmit = (e) => { // envia el formulario
        e.preventDefault();
        if (inputValue.trim().length>2) { 
            setcategories(cats=> [...cats, inputValue]);
            setinputValue('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h1>{inputValue}</h1>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired    
}