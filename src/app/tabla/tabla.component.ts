import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  texto = 'ciudad de Cáceres';
  id: any = 234;
  fecha = new Date();
  importe = 123671236.678756348765846847; // Probad con -5.5 para el redondeo de negativos
  baseImponible = 80;
  aciertos = 0.97656576;
  actor = {
    nombre: 'Robert',
    apellidos: 'De Niro',
    edad: 77
  }

  constructor() { }

  ngOnInit(): void {
    this.id = '000000' + this.id;
  }

}
