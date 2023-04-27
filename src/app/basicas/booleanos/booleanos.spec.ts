import { usuarioInresado } from "./booleanos";

describe('Pruebas de booleanos', () => {
  it('Debe regresar true', () => {

    expect(usuarioInresado()).toBeTruthy();

  });
});
