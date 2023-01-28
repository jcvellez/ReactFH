import React from 'react'
import { render } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
import { shallow } from 'enzyme';

describe('Prueba en <PrimeraApp />', () => {
    // test('Debe mostar "Hola, soy Juank"', () => { 
    //     const saludo='Hola, soy Juank';        
    //     const {getByText}= render(<PrimeraApp saludo={saludo}/>);
    //     expect(getByText(saludo)).toBeInTheDocument();        
    //  })
    test('Debe mostrar <PrimeraApp/> correctamente', () => {
        const saludo = 'Hola, soy Juank';
        const wraper = shallow(<PrimeraApp saludo={saludo} />);
        expect(wraper).toMatchSnapshot();
    });

    test('Debe mostrar el subtitulo enviado por props', () => {
        const saludo = 'Hola, soy Juank';
        const subtitulo = "Soy un subtitulo";
        const wraper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo={subtitulo}
            />
        );
        const textoParrafo = wraper.find('p').text();
        //console.log(textoParrafo);
        expect(textoParrafo).toBe(subtitulo);        
    })

})