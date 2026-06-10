// typography.component.ts
import { Component } from '@angular/core';

interface FontCard {
  name: string;
  role: string;
  family: string;
}

interface ScaleItem {
  label: string;
  size: string;
  px: number;
  weight: number;
  sample: string;
}

@Component({
  selector: 'app-typography',
  standalone: true,
  templateUrl: './typography.html',
})
export class Typography {

  fonts: FontCard[] = [
    {
      name: 'Rajdhani',
      role: 'Heading Font',
      family: 'Rajdhani, sans-serif',
    },
    {
      name: 'Outfit',
      role: 'Body Font',
      family: 'Outfit, sans-serif',
    },
    {
      name: 'Courier New',
      role: 'Mono Font',
      family: 'Courier New, monospace',
    },
  ];

  scale: ScaleItem[] = [
    { label: 'Display', size: '4.5rem', px: 72, weight: 600, sample: 'SHRIUM' },
    { label: 'H1',      size: '3rem',   px: 48, weight: 600, sample: 'Enterprise Software' },
    { label: 'H2',      size: '2.25rem',px: 36, weight: 600, sample: 'Cloud-Native Systems' },
    { label: 'H3',      size: '1.5rem', px: 24, weight: 500, sample: 'Scalable Platforms' },
    { label: 'Body',    size: '1rem',   px: 16, weight: 300, sample: 'Building modern software with engineering precision.' },
    { label: 'Small',   size: '.875rem',px: 14, weight: 300, sample: 'Secondary content and supporting text.' },
    { label: 'Mono',    size: '.75rem', px: 12, weight: 400, sample: '#C8841A · 01 · version 2.4.0' },
  ];
}