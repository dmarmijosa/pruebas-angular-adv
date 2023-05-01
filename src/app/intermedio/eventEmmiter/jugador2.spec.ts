import { Jugador2 } from "./jugador2"

describe('Jugador2 emit',()=>{
    let jugador: Jugador2;

    beforeEach(()=> jugador = new Jugador2());

    it('Debe emitir un evento cuando recibe daño',()=>{
        let nuevoHp=0;
        jugador.hpCambia.subscribe((resp)=>{
            nuevoHp=resp;
        });
        jugador.recibeDaño(1000);
        expect(nuevoHp).toBe(0);
    })

})