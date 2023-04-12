import { Component } from '@angular/core';

@Component({
  selector: 'app-fundamentos',
  templateUrl: './fundamentos.component.html',
  styleUrls: ['./fundamentos.component.css']
})
export class FundamentosComponent {
  titulo: string = 'Fundamentos Angular';
  estilo: string = 'color: red; font-size: 30px;';
  nota:number=10;

  changeColor() {
    this.estilo = 'color: green; font-size: 30px;';
  }

}
