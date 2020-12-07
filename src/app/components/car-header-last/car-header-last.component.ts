import { fiesta } from './../../mock/fiesta-mock';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alg-car-header-last',
  templateUrl: './car-header-last.component.html',
  styleUrls: ['./car-header-last.component.sass'],
})
export class CarHeaderLastComponent implements OnInit {
  felgen: string;
  reifen: string;
  ngOnInit(): void {
    this.felgen = fiesta.felgen;
    this.reifen = fiesta.reifen;
  }
}
