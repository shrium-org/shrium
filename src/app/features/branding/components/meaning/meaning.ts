// symbol.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-meaning',
  standalone: true,
  templateUrl: './meaning.html',
})
export class Meaning {
  symbols = [
    {
      key: 'shiva',
      title: 'Upward Triangle — Shiva',
      description: 'The outer gold triangle points upward — aspiration, growth and forward momentum. It represents consciousness, precision and structure.',
    },
    {
      key: 'shakti',
      title: 'Downward Triangle — Shakti',
      description: 'The descending triangle represents foundation, execution and grounded delivery. Engineering discipline that transforms ideas into reality.',
    },
    {
      key: 'product',
      title: 'Inner Triangle — Product Layer',
      description: 'A smaller focused triangle representing clarity, refinement and product excellence.',
    },
    {
      key: 'bindu',
      title: 'Bindu — Origin Point',
      description: 'The central bindu represents the source, the founding idea and clarity before creation.',
    },
  ];
}