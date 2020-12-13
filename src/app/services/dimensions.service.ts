import { dimensionsMock } from '../mock/dimensions-mock';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DimensionsService {
  private dimensions: string[];
  private selectedDimensionChange: BehaviorSubject<string>;
  selectedDimension: Observable<string>;

  constructor() {
    this.dimensions = dimensionsMock;
    this.selectedDimensionChange = new BehaviorSubject(null);
    this.selectedDimension = this.selectedDimensionChange.asObservable();
  }

  getDimensions(): string[] {
    return this.dimensions;
  }

  setSelectedDimension(selectedDimension: string): void {
    this.selectedDimensionChange.next(selectedDimension);
  }

  getSelectedDimension(): Observable<string> {
    return this.selectedDimension;
  }
}
