import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PacketService {
  private selectedPacketChange: BehaviorSubject<string>;
  selectedPacket: Observable<string>;

  constructor() {
    this.selectedPacketChange = new BehaviorSubject(null);
    this.selectedPacket = this.selectedPacketChange.asObservable();
  }

  setSelectedPacket(selectedPacket: string): void {
    console.log("Selected: ",selectedPacket)
    this.selectedPacketChange.next(selectedPacket);
  }

  getSelectedPacket(): Observable<string> {
    return this.selectedPacket;
  }
}
