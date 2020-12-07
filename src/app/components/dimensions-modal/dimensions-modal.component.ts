import { DimensionsServiceService } from './../../services/dimensions-service.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'alg-dimensions-modal',
  templateUrl: './dimensions-modal.component.html',
  styleUrls: ['./dimensions-modal.component.sass'],
})
export class DimensionsModalComponent {
  dimensions: string[];
  selectedDimension: string;

  constructor(
    private dimensionsServiceService: DimensionsServiceService,
    public dialogRef: MatDialogRef<DimensionsModalComponent>
  ) {
    this.dimensions = dimensionsServiceService.getDimensions();
  }

  setSelectedDimension(): void {
    this.dimensionsServiceService.setSelectedDimension(this.selectedDimension);
    this.dialogRef.close();
  }
}
