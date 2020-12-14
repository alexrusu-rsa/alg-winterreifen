import { Component, Input, OnDestroy } from '@angular/core';
import { Packet } from 'src/app/model/packet.model';
import { PacketService } from 'src/app/services/packet.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'alg-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.sass'],
})
export class PacketsComponent implements OnDestroy {
  @Input()
  packets: Packet[];
  selectedPacket: string;
  iterator: number[] = [0, 1, 2];
  subscription: Subscription;

  constructor(private packetService: PacketService) {
    this.subscription = packetService.selectedPacket.subscribe(
      (selectedPacket) => {
        this.selectedPacket = selectedPacket;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  selectPacket(packet: Packet): void {
    if (this.selectedPacket) this.packetService.setSelectedPacket(null);
    else this.packetService.setSelectedPacket(packet.name);
  }
}
