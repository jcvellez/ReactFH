import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Pruebas con Promesas", () => {
    test('getHeroeByIdAsync Debe retornar un heroe con esta funcion async', (done) => {
        const id = 1;
        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBe(heroes[0]);
                
                done();
            });
    });
    test('getHeroeByIdAsync mandare un id que no existe', (done) => {
        const id = 10;
        getHeroeByIdAsync(id)
            .catch(heroe => {
                expect(heroe).toBe('No se pudo encontrar el héroe');               
                done();
            });
    });
});