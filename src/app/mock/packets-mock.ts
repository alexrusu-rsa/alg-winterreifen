import { Packet } from '../model/packet.model';

export const packets: Packet[] = [
  {
    name: 'S',
    description: 'Nokian WR D3\n Stahlfelge von Alcar\n RDKS: passiv',
    fuel: 'F',
    weather: 'E',
    noise: 76,
    price: '130.-',
  },
  {
    name: 'M',
    description: 'FALKEN AS 200\n Alufelge BBS\n RDKS: passiv',
    fuel: 'D',
    weather: 'C',
    noise: 69,
    price: '150.-',
  },
  {
    name: 'L',
    description:
      'Continental ContiPremiumContact 5\n Alufege OEM\n RDKS: passiv',
    fuel: 'C',
    weather: 'B',
    noise: 67,
    price: '170.-',
  },
];
