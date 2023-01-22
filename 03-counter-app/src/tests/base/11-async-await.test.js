import { getImagen }from "../../base/11-async-await";
describe('Pruebas con async-await', () => {
    test('Pruebas con getImagen', async () => {
        let url= await getImagen();
        console.log(url);
        expect(typeof(url)).toBe('string');
    })
})