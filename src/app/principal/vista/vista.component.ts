import { Component } from '@angular/core';
import { Tbldatos } from 'src/app/models/tbldatos';
import { UserserviceService } from '../../services/userservice.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
  registros: Tbldatos[] = [];
  constructor(private servicio:UserserviceService){}
  ngOnInit() {
    this.Vista()
  // this.servicio.getVista().subscribe({
  // next:(datos: Tbldatos[])=> this.registros = datos,
  // complete: ()=> console.log('Servicio recupero los registros de la tabla datos')
  // });
  }

  Eliminar(id:string){
    this.servicio.getEliminar(id).subscribe({
    complete: () => console.log('Registro eliminado')
    });
    this.Vista();
    }


    Vista(){
    this.servicio.getVista().subscribe({
    next:(datos: Tbldatos[])=> this.registros = datos,
    complete: ()=> console.log('Servicio recupero los registros de la tabla datos')
    });
    }

}
