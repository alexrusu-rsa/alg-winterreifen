import { dimensionsMock } from './../mock/dimensions-mock';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DimensionsServiceService {
  private dimensions: string[];
  selectedDimension: string;
  constructor() {
    this.dimensions = dimensionsMock;
  }

  getDimensions(): string[] {
    return this.dimensions;
  }

  setSelectedDimension(selectedDimension: string): void {
    this.selectedDimension = selectedDimension;
    console.log('Changed ', selectedDimension, ' was selected');
  }
}
