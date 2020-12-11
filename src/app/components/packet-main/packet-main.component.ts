import { Packet } from './../../model/packet.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'alg-packet-main',
  templateUrl: './packet-main.component.html',
  styleUrls: ['./packet-main.component.sass'],
})
export class PacketMainComponent implements OnInit {
  @Input()
  packet: Packet;

  constructor() {}

  ngOnInit(): void {}
}
