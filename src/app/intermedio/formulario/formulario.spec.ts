import { FormBuilder } from '@angular/forms';
import { FormularioRegister } from './formulario';

describe('Prueba de formularios', () => {
  let componente: FormularioRegister;
  beforeEach(() => {
    componente = new FormularioRegister(new FormBuilder());
  });
  it('Debe de crear un formulario con dos campos email, password', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });
  it('El email debe ser obligatorio', () => {
    const control = componente.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });
  it('El email debe ser valido', () => {
    const control = componente.form.get('email');
    control?.setValue('danny@gmail.com');
    expect(control?.invalid).toBeFalsy();
  });
});
