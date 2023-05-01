import { obternerRobots } from './arreglos';

describe('Prueba de arreglos', () => {
  it('Debe retornar un array de 3 elementos', () => {
    const valor = obternerRobots();
    expect(valor.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe tener megaman o ultron en el array', () => {
    const valor = obternerRobots();
    const subValor = valor.filter(
      (item) =>
        item.toLowerCase() === 'megaman' || item.toLowerCase() === 'ultron'
    );
    expect(subValor.length).toBeGreaterThanOrEqual(1);
  });
});
