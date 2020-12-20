import { Component, OnDestroy, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { DimensionsService } from 'src/app/services/dimensions.service';

@Component({
  selector: 'alg-dimensions-header',
  templateUrl: './dimensions-header.component.html',
  styleUrls: ['./dimensions-header.component.sass'],
})
export class DimensionsHeaderComponent implements OnDestroy {
  dimensions: string[];
  selectedDimension: string;
  subscription: Subscription;

  constructor(private dimensionsServiceService: DimensionsService) {
    this.dimensions = dimensionsServiceService.getDimensions();
    this.subscription = dimensionsServiceService.selectedDimension.subscribe(
      (selectedDim) => {
        this.selectedDimension = selectedDim;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setSelectedDimension(): void {
    this.dimensionsServiceService.setSelectedDimension(this.selectedDimension);
  }
}
