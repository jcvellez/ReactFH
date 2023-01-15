import React from "react";
import PropTypes from "prop-types";

const CounterApp = ({ numero }) => {
    console.log(numero);
    return (
        <>
            <h1>CounterApp</h1>
            <h2>{numero}</h2>
        </>
    );
};


CounterApp.propTypes={
    numero: PropTypes.number.isRequired
}

export default CounterApp;