import { packets } from './mock/packets-mock';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DimensionsModalComponent } from './components/dimensions-modal/dimensions-modal.component';

@Component({
  selector: 'alg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'dummy';
  packets = packets;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    // this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DimensionsModalComponent, {
      data: { dialogRef: this.dialog }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });
  }
}
