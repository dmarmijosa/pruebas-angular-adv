import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: [
  ]
})
export class MedicoComponent {
  medicos:any[]=[];

  constructor(public _medicoService:MedicoService){

  }
  saludar(medico:string){
    return `Hola ${medico}`
  }

  obtenerMedico(){
    this._medicoService.getMedicos().subscribe((medicos:any)=> this.medicos = medicos)
  }
}
