import { EMPTY, Observable, from, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';

describe('MedicosComponent', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null as any);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  it('Init: Debe de cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();
    expect(componente.medicos.length).toBeGreaterThan(0);
  });
  it('Debe de llamar al servidor para agregar un medico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      return EMPTY;
    });
    componente.agregarMedico();
    expect(espia).toHaveBeenCalled();
  });
  it('Debe agregar un nuevo médico al arreglo de médicos', () => {
    const medico = { id: 1, nombre: 'Danny' };
    spyOn(servicio, 'agregarMedico').and.returnValue(from([medico]));
    componente.agregarMedico();
    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });
  it('si falla la adición, la propiedad mensajeError, debe ser igual al error del servicio', () => {
    const errorMessage = 'No se pudo agregar al médico';
    const error = new Error(errorMessage);
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(error));

    componente.agregarMedico();

    expect(componente.mensajeError).toBe(errorMessage);
  });

  it('Debe de llamar al servidor para borrar un medico',()=>{
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).toHaveBeenCalledWith('1');
  })
  it('No debe de llamar al servidor para borrar un medico',()=>{
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);
    componente.borrarMedico('1');
    expect(espia).not.toHaveBeenCalledWith('1');
  })
});
