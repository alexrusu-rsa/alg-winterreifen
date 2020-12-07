import { fiesta } from './../../mock/fiesta-mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alg-car-header',
  templateUrl: './car-header.component.html',
  styleUrls: ['./car-header.component.sass'],
})
export class CarHeaderComponent implements OnInit {
  img: string;
  constructor() {}

  ngOnInit(): void {
    this.img = fiesta.img;
    console.log(this.img);
  }
}
