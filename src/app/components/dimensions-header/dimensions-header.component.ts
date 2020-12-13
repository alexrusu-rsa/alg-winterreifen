import { Component, OnInit } from '@angular/core';
import { DimensionsService } from 'src/app/services/dimensions.service';

@Component({
  selector: 'alg-dimensions-header',
  templateUrl: './dimensions-header.component.html',
  styleUrls: ['./dimensions-header.component.sass'],
})
export class DimensionsHeaderComponent implements OnInit {
  dimensions: string[];
  selectedDimension: string;

  constructor(private dimensionsServiceService: DimensionsService) {
    this.dimensions = dimensionsServiceService.getDimensions();
    dimensionsServiceService.selectedDimension.subscribe((selectedDim) => {
      this.selectedDimension = selectedDim;
    });
  }
  ngOnInit(): void {}

  setSelectedDimension(): void {
    this.dimensionsServiceService.setSelectedDimension(this.selectedDimension);
  }
}
