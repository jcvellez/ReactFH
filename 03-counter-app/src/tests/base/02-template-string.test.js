import '@testing-library/jest-dom';
import { getSaludo } from "../../base/02-template-string";

describe("Pruebas del archivo 02-template-string.js", () => {
    test('getSaludo debe retornar hola Juank', () => {
        const nombre = 'Juank';
        const saludo= getSaludo(nombre);
        expect(saludo).toBe('Hola '+nombre);
    })
});