import { packets } from './mock/packets-mock';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DimensionsModalComponent } from './components/dimensions-modal/dimensions-modal.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'dummy';
  packets = packets;
  subscription:Subscription;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.openDialog();
  }

  ngOnDestroy():void {
    this.dialog.closeAll();
    this.subscription.unsubscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DimensionsModalComponent, {
      data: { dialogRef: this.dialog }
    });

    this.subscription = dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
