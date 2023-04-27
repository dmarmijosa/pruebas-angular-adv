import { mensaje } from './string';
//describe()  hace referencia a la pruebas 
//if() descripcion de la prueba 
describe('Pruebas de string',()=>{
    it(' Debe retornar un string ', ()=>{
        const resp = mensaje('Danny');

        expect(typeof resp ).toBe('string')
    });

    it('Debe de retornar un saludo con el nombre enviado',()=>{
        const nombre = 'Danny'
        const resp = mensaje(nombre);
        expect(resp).toContain(nombre);
    })
});