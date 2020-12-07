import { fiesta } from './../../mock/fiesta-mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alg-car-header-mid',
  templateUrl: './car-header-mid.component.html',
  styleUrls: ['./car-header-mid.component.sass'],
})
export class CarHeaderMidComponent implements OnInit {
  name: string;
  engine: string;
  model: string;
  ngOnInit(): void {
    this.name = fiesta.name;
    this.engine = fiesta.engine;
    this.model = fiesta.model;
  }
}
