import { Packet } from './../../model/packet.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'alg-packet-main',
  templateUrl: './packet-main.component.html',
  styleUrls: ['./packet-main.component.sass'],
})
export class PacketMainComponent {
  @Input()
  packet: Packet;
  @Input()
  isSelected: boolean = false;
}
