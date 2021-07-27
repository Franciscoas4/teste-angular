import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matriz',
  templateUrl: './matriz.component.html',
  styleUrls: ['./matriz.component.css']
})
export class MatrizComponent implements OnInit {

  arrayNumber: number = 0;
  listaNum: number[] = []

  constructor() { }

  ngOnInit(): void {
    this.resetArray();
  }

  resetArray(){
    this.listaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.arrayNumber = 0;
  }

  filtraArray() {
    if (this.arrayNumber > 10) {
      alert("Número deve estar entre 0 e 10!");
    } else {
      this.listaNum = this.listaNum.filter(num => num === this.arrayNumber);
    }
  }

}
