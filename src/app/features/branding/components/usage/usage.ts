// usage.component.ts
import { Component } from '@angular/core';

interface UsageRule {
  type: 'do' | 'dont';
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-usage',
  standalone: true,
  imports: [],
  templateUrl: './usage.html',
})
export class Usage {

  rules: UsageRule[] = [
    {
      type: 'do',
      icon: 'ti-circle-check',
      title: 'Minimum Size',
      description: 'Maintain a minimum logo height of 24px for digital applications and 8mm for print.',
    },
    {
      type: 'do',
      icon: 'ti-circle-check',
      title: 'Clear Space',
      description: 'Keep clear space equal to the central triangle around all sides of the logo.',
    },
    {
      type: 'do',
      icon: 'ti-circle-check',
      title: 'Dark Backgrounds',
      description: 'Preferred application. Use the standard logo version on dark surfaces.',
    },
    {
      type: 'do',
      icon: 'ti-circle-check',
      title: 'Light Backgrounds',
      description: 'Use the light-adapted logo variant to maintain visibility and contrast.',
    },
    {
      type: 'dont',
      icon: 'ti-circle-x',
      title: 'Do Not Distort',
      description: 'Never stretch, skew or alter the proportions of the logo.',
    },
    {
      type: 'dont',
      icon: 'ti-circle-x',
      title: 'Do Not Recolor',
      description: 'Do not replace the approved brand colors with unapproved alternatives.',
    },
  ];

  dos   = this.rules.filter(r => r.type === 'do');
  donts = this.rules.filter(r => r.type === 'dont');
}