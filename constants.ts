import { AdviceItem } from './types';

export const DONT_ITEMS: AdviceItem[] = [
  { id: '1', text: 'Memendam perasaan sendirian', type: 'dont' },
  { id: '2', text: 'Terlalu keras pada diri sendiri', type: 'dont' },
  { id: '3', text: 'Membandingkan diri dengan orang lain', type: 'dont' },
  { id: '4', text: 'Menumpuk tugas tanpa jadwal', type: 'dont' },
];

export const DO_ITEMS: AdviceItem[] = [
  { id: '5', text: 'Ceritakan perasaanmu', type: 'do' },
  { id: '6', text: 'Jaga pola tidur yang cukup', type: 'do' },
  { id: '7', text: 'Lakukan aktivitas yang kamu suka', type: 'do' },
  { id: '8', text: 'Makan teratur dan tetap hidrasi', type: 'do' },
];
