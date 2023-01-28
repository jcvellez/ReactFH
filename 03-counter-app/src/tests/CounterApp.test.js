import React from 'react'
import { render } from "@testing-library/react";
import CounterApp from "../CounterApp";
import { shallow } from 'enzyme';

describe('Pruebas en <CounterApp />', () => {

    let wraper;
    beforeEach(() => {
        wraper = shallow(<CounterApp />);
    })

    // test('Debo mostrar <CounterApp /> correctamente', () => {
    //     //const numero = 100;    
    //     expect(wraper).toMatchSnapshot();
    // })

    // test('Tomar el valor del counter del elemento h2', () => {
    //     const titulo = "CounterApp";
    //     const contador = 10;
    //     const wraper = shallow(
    //         <CounterApp
    //             titulo={titulo}
    //             contador={contador}
    //         />
    //     );
    //     const COUNTER = wraper.find('#contador').text();
    //     expect(parseInt(COUNTER)).toEqual(contador);
    // })

    // test('Debe incrementar el contador en 1 (+1)', () => {
    //     //const botonAdd= wraper.find('button').at(0);
    //     wraper.find('#botonADD').simulate('click');

    //     const COUNTERText = wraper.find('#contador').text().trim();
    //     expect(COUNTERText).toEqual('11');
    //     console.log('COUNTERText es ', COUNTERText);
    // })

    // test('Debe decrementar el contador en 1 (-1)', () => {
    //     wraper.find('#botonSUB').simulate('click');
    //     const COUNTERText = wraper.find('#contador').text().trim();
    //     expect(COUNTERText).toEqual('9');
    // })

    test('Debe recibir el valor de reset', () => { 
        const wraper = shallow(<CounterApp numero={108}/>);
        wraper.find('#botonADD').simulate('click');
        const COUNTERText = wraper.find('#contador').text().trim();
        console.log(COUNTERText);

        // const botonRESET= wraper.find('#botonRESET').simulate('click');
        // const COUNTERText = wraper.find('#contador').text().trim();
        // console.log(COUNTERText);
        // expect(COUNTERText).toEqual('10');
     })

})