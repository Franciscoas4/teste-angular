import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonaci',
  templateUrl: './fibonaci.component.html',
  styleUrls: ['./fibonaci.component.css']
})
export class FibonaciComponent implements OnInit {

  valor?: number ;
  listar: number[] = [];
  numerosArr?: string;

  @Input() valorInicial: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.reset();
  }
  
  calcFibonacci()  {
    const proxNum = this.listar[this.listar.length - 1] + this.listar[this.listar.length - 2];
    this.listar.push(proxNum);
    this.alteraValor(proxNum);
    this.alterarArray();
  }

  reset() {
    this.valor = 1;
    this.listar = [0,1];
    this.numerosArr = '0, 1';
  }

  private alteraValor(numero: number) {
    this.valor = numero;
  }

  private alterarArray() {
    this.numerosArr = this.listar.join(", ");
  }

  
}
