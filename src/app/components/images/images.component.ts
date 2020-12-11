import { Component, Input, OnInit } from '@angular/core';
import { images } from 'src/app/mock/images-mock';

@Component({
  selector: 'alg-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.sass'],
})
export class ImagesComponent implements OnInit {
  @Input()
  packet: any;
  images = images;

  constructor() {}

  ngOnInit(): void {}
}
