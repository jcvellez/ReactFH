import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr'

describe('Pruebas en desestructuracion', () => {
    test('Debe retornar 1 string y 1 numero', () => {
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]
        console.log(`letras es tipo ${typeof(letras)}`);
        expect(letras).toBe('ABC');
        console.log(`numeros es tipo ${typeof(numeros)}`);
        expect(numeros).toBe(123);

    })
})