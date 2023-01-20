import '@testing-library/jest-dom';
import { getUser, getUsuarioActivo } from "../../base/05-funciones";

describe("Pruebas 05-funciones", () => {
    test('Prueba con getUser', () => {
        const user = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        const username = getUser();
        expect(username).toEqual(user);
    })

    test('Prueba con getUsuarioActivo', () => {

        const nombre = 'Juank';
        const user = getUsuarioActivo(nombre);


        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        });
    })
})