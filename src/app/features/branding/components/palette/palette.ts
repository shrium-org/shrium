// palette.component.ts
import { Component } from '@angular/core';

interface ColorCard {
  hex: string;
  name: string;
  label: string;
  tag: string;
  swatchLabel: string;
  swatchDark: boolean;
  swatchPattern?: boolean;
  swatchPatternLight?: boolean;
  opacityBars: string[];
}

interface ContrastPair {
  hex: string;
  label: string;
  contrast: string;
  rating: string;
}

@Component({
  selector: 'app-palette',
  standalone: true,
  templateUrl: './palette.html',
})
export class Palette {

  colors: ColorCard[] = [
    {
      hex: '#C8841A',
      name: 'Accent',
      label: 'Primary',
      tag: 'Brand',
      swatchLabel: 'Primary',
      swatchDark: false,
      opacityBars: ['0.2','0.35','0.5','0.7','1'],
    },
    {
      hex: '#E09A2A',
      name: 'Accent Hi',
      label: 'Hover / Hi',
      tag: 'Hover',
      swatchLabel: 'Hover / Hi',
      swatchDark: false,
      opacityBars: ['0.2','0.35','0.5','0.7','1'],
    },
    {
      hex: '#1DB8A4',
      name: 'Teal',
      label: 'Secondary',
      tag: 'Success',
      swatchLabel: 'Secondary',
      swatchDark: false,
      opacityBars: ['0.2','0.35','0.5','0.7','1'],
    },
    {
      hex: '#2D6BE4',
      name: 'Cobalt',
      label: 'Info',
      tag: 'Info',
      swatchLabel: 'Info',
      swatchDark: false,
      opacityBars: ['0.2','0.35','0.5','0.7','1'],
    },
    {
      hex: '#07080C',
      name: 'BG Dark',
      label: 'Background',
      tag: 'Dark',
      swatchLabel: 'Background',
      swatchDark: true,
      swatchPattern: true,
      opacityBars: ['rgba(255,255,255,.06)','rgba(255,255,255,.1)','rgba(255,255,255,.16)','rgba(255,255,255,.24)','rgba(255,255,255,.36)'],
    },
    {
      hex: '#F4F3EF',
      name: 'BG Light',
      label: 'Background',
      tag: 'Light',
      swatchLabel: 'Background',
      swatchDark: false,
      swatchPattern: true,
      swatchPatternLight: true,
      opacityBars: ['rgba(0,0,0,.04)','rgba(0,0,0,.08)','rgba(0,0,0,.13)','rgba(0,0,0,.2)','rgba(0,0,0,.3)'],
    },
  ];

  contrasts: ContrastPair[] = [
    { hex: '#C8841A', label: 'Accent on Dark',  contrast: '7.1:1',  rating: 'AAA' },
    { hex: '#F4F3EF', label: 'FG on Dark',      contrast: '14.8:1', rating: 'AAA' },
    { hex: '#1DB8A4', label: 'Teal on Dark',    contrast: '5.3:1',  rating: 'AA'  },
    { hex: '#2D6BE4', label: 'Cobalt on Dark',  contrast: '4.6:1',  rating: 'AA'  },
  ];

  copied: string | null = null;

  copy(hex: string): void {
    navigator.clipboard.writeText(hex);
    this.copied = hex;
    setTimeout(() => this.copied = null, 1400);
  }

  getTagStyle(hex: string): string {
    return `color:${hex};border-color:${hex}33;background:${hex}14`;
  }
}