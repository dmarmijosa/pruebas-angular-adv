import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IncrementadorComponent],
      imports: [FormsModule],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
  });

  it('Debe de mostrar la leyenda ', () => {
    component.leyenda = 'Progreso de carga';
    //disparar la deteccion de cambios
    fixture.detectChanges();
    const elemt: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(elemt.innerHTML).toContain('Progreso de carga');
  });
  it('Debe de mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const elemt = input.nativeElement;
      expect(elemt.value).toBe('55');
    });
  });
  it('Debe de incrementar/decrementar en 5, con un click en el botón',()=>{
    const botones  = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    expect(component.progreso).toBe(45);
    
    botones[1].triggerEventHandler('click', null);
    expect(component.progreso).toBe(50);
  })
  it('progreso ha cambiado',()=>{
    const botones  = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const elemt: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(elemt.innerHTML).toContain('45');

  })
});
