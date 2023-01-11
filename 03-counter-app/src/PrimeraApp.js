import React, { Fragment } from "react";

const PrimeraApp = ({saludo="Hola Mundo"}) => {

    
    console.log(saludo);
    return (
        <>
            <h1>{saludo}</h1>
            <p>Mi primera aplicacion</p>
                 
        </>
    );

}

export default PrimeraApp;