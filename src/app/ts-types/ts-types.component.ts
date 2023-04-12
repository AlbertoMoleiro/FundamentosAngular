import { Component } from '@angular/core';

@Component({
  selector: 'app-ts-types',
  templateUrl: './ts-types.component.html',
  styleUrls: ['./ts-types.component.css']
})
export class TsTypesComponent {

  constructor() { }

  ngOnInit(): void {
    this.printTypes();

  }

  // Crear un método que contiene variables de los tipos primitivos de typescript y los imprime en consola

  printTypes() {
    let numero: number = 1;
    let texto: string = 'Hola';
    let booleano: boolean = true;
    let arreglo: number[] = [1, 2, 3, 4, 5];
    let desconocido: unknown = 'Hola';
    let cualquier: any = 'Hola';
    let nulo: null = null;
    let indefinido: undefined = undefined;

    console.log("Número: ",numero, " Tipo: ", typeof numero);
    console.log("Texto: ",texto, " Tipo: ", typeof texto);
    console.log("Booleano: ",booleano, " Tipo: ", typeof booleano);
    console.log("Arreglo: ",arreglo, " Tipo: ", typeof arreglo);
    console.log("Desconocido: ",desconocido, " Tipo: ", typeof desconocido);
    console.log("Cualquier: ",cualquier, " Tipo: ", typeof cualquier);
    console.log("Nulo: ",nulo, " Tipo: ", typeof nulo);
    console.log("Indefinido: ",indefinido, " Tipo: ", typeof indefinido);
  }







}
