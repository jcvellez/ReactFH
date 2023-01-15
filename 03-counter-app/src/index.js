import React from "react";
import ReactDOM from "react-dom";
import PrimeraApp from "./PrimeraApp";
import CounterApp from "./CounterApp";
import './index.css'
const divRoot=document.querySelector('#root');


//ReactDOM.render(<PrimeraApp saludo="fdf" />,divRoot);

ReactDOM.render(<CounterApp numero={10} />,divRoot);