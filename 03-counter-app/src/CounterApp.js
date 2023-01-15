import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ numero }) => {

    let [COUNTER, setCOUNTER] = useState(numero);
   
    let handleAdd = () => {          
        setCOUNTER(COUNTER+1);
        //setCOUNTER((c)=>c+1);
        //COUNTER+1     
    };
    let handleSubstract = () => {          
        setCOUNTER(COUNTER-1);
        //setCOUNTER((c)=>c+1);
        //COUNTER+1     
    };
    let handleReset = () => {          
        setCOUNTER(COUNTER=numero);
        //setCOUNTER((c)=>c+1);
        //COUNTER+1     
    };


    return (
        <>
            <h1>CounterApp</h1>
            <h2>{COUNTER}</h2>
            <button onClick={handleAdd}>+1</button>
            <button onClick={handleReset}>Reset</button>
            <button onClick={handleSubstract}>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    numero: PropTypes.number.isRequired
}

export default CounterApp;