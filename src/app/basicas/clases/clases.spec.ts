import { Jugador } from './clases';
describe('Prueba de clases',()=>{
    //jugador = new Jugador();
    let jugador = new Jugador();

    beforeAll( () => {
        // console.warn('BeforeAll');
        // jugador.hp = 100;
    });

    beforeEach( () => {
        // console.warn('BeforeEach');
        // jugador.hp = 100;
        jugador= new Jugador();
    });

    afterAll( () => {
        // console.warn('AfterAll');
    });

    afterEach( () => {
        // console.warn('AfterEach');
        // jugador.hp = 100;
    });

    //fase de prueba 
    //BeforeEach-BeforeAll-AfterAll-AfterEach
    /*
    * BeforeAll(); Antes de todas, solo se ejecuta una vez
    * BeforeEach: Antes de una
    */
    /*
    * AfterAll(); Despues de todas  de todas, solo se ejecuta una vez
    * AfterEach(); Despues de una
    */
    it('Debe retornar 80 de hp, si recibe 20 de daño',()=>{
       
        const resp= jugador.recibeDaño(20);

        expect(resp).toBe(80);
    });
    it('Debe retornar 50 de hp, si recibe 50 de daño',()=>{
        const resp= jugador.recibeDaño(50);

        expect(resp).toBe(50);
    }); 
    it('Debe retornar 0 de hp, si recibe 100 de daño',()=>{
        const resp= jugador.recibeDaño(100);

        expect(resp).toBe(0);
    }); 
    describe
})