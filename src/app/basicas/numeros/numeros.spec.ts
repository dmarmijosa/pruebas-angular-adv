import { incrementar } from "./numeros";

describe('Prueba unitaria de números',()=>{
    it('Debe retornar 100 si el numero es mayor a 100',()=>{
        const variable =200;
        const numero = incrementar(variable);
        expect(numero).toBe(100);
    });
    it('Debe retornar el número +1 si es menor a 100',()=>{
        const variable = 20;
        const respuesta= incrementar(variable);

        expect(respuesta).toBe(variable+1);
    })
});