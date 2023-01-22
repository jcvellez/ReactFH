import { getHeroeById, getHeroesByOwner } from "../../base/08-imp-exp";
import heroes from "../../data/heroes"

describe("Pruebas en funciones de heroes", () => {
    test('Debe retornar un heroe', () => {
        const id = 2;
        let heroe = getHeroeById(id);
        const heroeData = heroes.find(h => h.id == id);
        //expect(heroe).toBe(heroeData);
        //console.log(heroeData);        
    })
    test('Debe retornar un arreglo de heroes de DC', () => {

        let owner = "DC";
        let listaOwner = getHeroesByOwner(owner);
        let heroesData = heroes.filter(h => h.owner === owner)
        expect(listaOwner).toEqual(heroesData);

    })
    test('Debe retornar un arreglo de heroes de Marvel', () => {

        let owner = "Marvel";
        let listaOwner = getHeroesByOwner(owner);
        let heroesData = heroes.filter(h => h.owner === owner)
        expect(heroesData.length).toBe(2);
        
    })
})