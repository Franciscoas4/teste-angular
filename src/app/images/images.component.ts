import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  visivel = 'Visível';
  logoDesafio = true;

  constructor() { }

  ngOnInit(): void {
  }

  alterarVisibilidade() {
    this.visivel = this.visivel == 'Visível' ? 'Invisível' : 'Visível';
    this.logoDesafio = this.logoDesafio == true ? false : true;
  }

}
