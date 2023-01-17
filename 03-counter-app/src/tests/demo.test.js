describe("Pruebas en el archivo demo.test.js ",()=>{
    test('Debe ser iguales los string', () => { 
        let m='Hola mundo';
        let m2=`Hola mundo`;
        expect(m).toBe(m2);
     });
});

//console.log('Hola Mundo');