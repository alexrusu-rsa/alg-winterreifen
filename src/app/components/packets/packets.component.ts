import { packets } from './../../mock/packets-mock';
import { Component, Input, OnInit } from '@angular/core';
import { Packet } from 'src/app/model/packet.model';
import { PacketService } from 'src/app/services/packet.service';

@Component({
  selector: 'alg-packets',
  templateUrl: './packets.component.html',
  styleUrls: ['./packets.component.sass'],
})
export class PacketsComponent implements OnInit {
  @Input()
  packets: Packet[];
  selectedPacket: string;
  iterator: number[] = [0, 1, 2];

  constructor(private packetService: PacketService) {
    packetService.selectedPacket.subscribe((selectedPacket) => {
      this.selectedPacket = selectedPacket;
    });
  }

  ngOnInit(): void {}

  selectPacket(packet: Packet): void {
    if (this.selectedPacket) this.packetService.setSelectedPacket(null);
    else this.packetService.setSelectedPacket(packet.name);
  }
}
