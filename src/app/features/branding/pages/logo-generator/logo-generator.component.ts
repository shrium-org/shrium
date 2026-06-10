/**
 * Shrium Logo Generator — Fully Isolated Angular Standalone Component
 *
 * ZERO external dependencies beyond Angular core.
 * No Angular Material, no Tailwind build step, no global styles needed.
 * All CSS is scoped via styleUrls. Drop these three files into any project.
 *
 * Requirements:
 *   - Angular 17+ (standalone API + signals)
 *   - FormsModule in imports (included below)
 *   - Add to app routes or any template: <app-logo-generator />
 *
 * Fonts (optional, add to index.html for best rendering):
 *   <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700
 *               &family=Outfit:wght@200;300;400;500;600&display=swap" rel="stylesheet">
 */

import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────

export type CornerStyle = 'miter' | 'round' | 'bevel';
export type LogoMode    = 'sacred-full' | 'sacred-tech' | 'tech-minimal'
                        | 'monoline' | 'monochrome' | 'filled' | 'outline';
export type LogoLayout  = 'icon-only' | 'horizontal' | 'vertical' | 'wordmark' | 'stacked';
export type BgMode      = 'transparent' | 'dark' | 'light' | 'accent';
export type ExportSize  = 16 | 32 | 64 | 128 | 256 | 512 | 1024 | 2048;

interface GeoState {
  outer: boolean; shakti: boolean; inner: boolean; bindu: boolean; nodes: boolean;
}

interface LogoState {
  geo:         GeoState;
  strokeWidth: number;
  nodeSize:    number;
  binduSize:   number;
  corner:      CornerStyle;
  accent:      string;
  secondary:   string;
  fg:          string;
  bg:          string;
  transp:      BgMode;
  mode:        LogoMode;
  layout:      LogoLayout;
  size:        ExportSize;
}

interface Preset {
  num:   string;
  name:  string;
  state: Partial<LogoState> & { geo?: Partial<GeoState> };
}

// ─────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────

const DEFAULT_STATE: LogoState = {
  geo: { outer: true, shakti: true, inner: true, bindu: true, nodes: true },
  strokeWidth: 3.5,
  nodeSize:    3.2,
  binduSize:   4.0,
  corner:      'miter',
  accent:      '#C8841A',
  secondary:   '#E8E6E0',
  fg:          '#E8E6E0',
  bg:          '#07080C',
  transp:      'transparent',
  mode:        'sacred-full',
  layout:      'horizontal',
  size:        256,
};

const QUICK_PALETTES: Record<string, Pick<LogoState, 'accent' | 'secondary' | 'fg' | 'bg'>> = {
  saffron: { accent: '#C8841A', secondary: '#E09A2A', fg: '#E8E6E0', bg: '#07080C' },
  cobalt:  { accent: '#2D6BE4', secondary: '#4D87F5', fg: '#E8E6E0', bg: '#07080C' },
  teal:    { accent: '#1DB8A4', secondary: '#2DD9C5', fg: '#E8E6E0', bg: '#07080C' },
  violet:  { accent: '#7C3AED', secondary: '#9D5FF5', fg: '#E8E6E0', bg: '#07080C' },
  crimson: { accent: '#DC2626', secondary: '#EF4444', fg: '#E8E6E0', bg: '#07080C' },
  gold:    { accent: '#D4AF37', secondary: '#F0CB6A', fg: '#1a1200', bg: '#0a0800' },
};

const PRESETS: Preset[] = [
  { num:'01', name:'Sacred Full',
    state:{ mode:'sacred-full',  layout:'horizontal', transp:'dark',        accent:'#C8841A', secondary:'#E8E6E0', fg:'#E8E6E0', bg:'#07080C', corner:'miter',  strokeWidth:3.5, nodeSize:3.2, binduSize:4.0, geo:{outer:true, shakti:true, inner:true,  bindu:true, nodes:true}  }},
  { num:'02', name:'Tech Standard',
    state:{ mode:'tech-minimal', layout:'horizontal', transp:'transparent', accent:'#C8841A', secondary:'#E8E6E0', fg:'#E8E6E0', bg:'#07080C', corner:'miter',  strokeWidth:3.0, nodeSize:2.8, binduSize:3.5, geo:{outer:true, shakti:true, inner:false, bindu:true, nodes:true}  }},
  { num:'03', name:'App Icon',
    state:{ mode:'sacred-full',  layout:'icon-only',  transp:'dark',        accent:'#C8841A', secondary:'#E8E6E0', fg:'#E8E6E0', bg:'#07080C', corner:'miter',  strokeWidth:3.5, nodeSize:3.2, binduSize:4.0, geo:{outer:true, shakti:true, inner:false, bindu:true, nodes:true}  }},
  { num:'04', name:'Favicon',
    state:{ mode:'tech-minimal', layout:'icon-only',  transp:'dark',        accent:'#C8841A', secondary:'#888888', fg:'#E8E6E0', bg:'#07080C', corner:'miter',  strokeWidth:4.0, nodeSize:0,   binduSize:4.0, geo:{outer:true, shakti:true, inner:false, bindu:true, nodes:false} }},
  { num:'05', name:'Mono Print',
    state:{ mode:'monochrome',   layout:'horizontal', transp:'transparent', accent:'#E8E6E0', secondary:'#E8E6E0', fg:'#E8E6E0', bg:'#07080C', corner:'miter',  strokeWidth:3.5, nodeSize:3.2, binduSize:4.0, geo:{outer:true, shakti:true, inner:true,  bindu:true, nodes:true}  }},
  { num:'06', name:'Luxury Gold',
    state:{ mode:'sacred-full',  layout:'vertical',   transp:'dark',        accent:'#D4AF37', secondary:'#F0CB6A', fg:'#F0CB6A', bg:'#0a0800', corner:'miter',  strokeWidth:2.5, nodeSize:2.8, binduSize:3.5, geo:{outer:true, shakti:true, inner:true,  bindu:true, nodes:true}  }},
  { num:'07', name:'Dark Mode',
    state:{ mode:'sacred-tech',  layout:'horizontal', transp:'dark',        accent:'#C8841A', secondary:'#E8E6E0', fg:'#E8E6E0', bg:'#07080C', corner:'bevel',  strokeWidth:3.5, nodeSize:3.2, binduSize:4.0, geo:{outer:true, shakti:true, inner:true,  bindu:true, nodes:true}  }},
  { num:'08', name:'Light Mode',
    state:{ mode:'sacred-full',  layout:'horizontal', transp:'light',       accent:'#C8841A', secondary:'#111111', fg:'#111111', bg:'#F4F3EF', corner:'miter',  strokeWidth:3.5, nodeSize:3.2, binduSize:4.0, geo:{outer:true, shakti:true, inner:true,  bindu:true, nodes:true}  }},
];

// ─────────────────────────────────────────────────────────────
// SVG BUILDER  (pure functions — no DOM, fully testable)
// ─────────────────────────────────────────────────────────────

const FONT_DEFS = `<defs><style>@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600&amp;display=swap');</style></defs>`;

function buildMark(s: LogoState): string {
  const { geo, strokeWidth: sw, nodeSize: ns, binduSize: bs, corner, accent, secondary, fg, mode } = s;
  const lj = corner;

  let aC = accent, sC = secondary, iC = accent, bC = accent;
  let oF = 'none',  shF = 'none', inF = 'none';

  switch (mode) {
    case 'monochrome': aC = fg; sC = fg; iC = fg; bC = fg; break;
    case 'monoline':   aC = accent; sC = accent; iC = accent; bC = accent; break;
    case 'filled':
      oF = accent; shF = secondary; inF = fg;
      aC = fg; sC = accent; iC = 'rgba(0,0,0,0.2)'; bC = '#fff'; break;
    case 'outline':    bC = 'none'; break;
    case 'sacred-tech': sC = '#666'; break;
    case 'tech-minimal': sC = secondary + '88'; break;
  }

  const R = 40, Ri = 18;
  const oT = [0, -R],          oBR = [R*.866,  R*.5],   oBL = [-R*.866,  R*.5];
  const sT = [0,  R],          sBR = [-R*.866, -R*.5],  sBL = [R*.866,  -R*.5];
  const iT = [0, -Ri],         iBR = [Ri*.866, Ri*.5],  iBL = [-Ri*.866, Ri*.5];
  const p  = (...v: number[][]): string => v.map(x => x.join(',')).join(' ');

  let o = '';
  if (geo.outer)
    o += `<polygon points="${p(oT,oBR,oBL)}" stroke="${aC}" stroke-width="${sw}" fill="${oF}" stroke-linejoin="${lj}"/>`;
  if (geo.shakti)
    o += `<polygon points="${p(sT,sBR,sBL)}" stroke="${sC}" stroke-width="${sw*.7}" fill="${shF}" stroke-linejoin="${lj}" opacity="0.5"/>`;
  if (geo.inner && mode !== 'tech-minimal')
    o += `<polygon points="${p(iT,iBR,iBL)}" stroke="${iC}" stroke-width="${sw*.55}" fill="${inF}" stroke-linejoin="${lj}" opacity="0.82"/>`;
  if (geo.nodes && ns > 0) {
    o += `<circle cx="${oT[0]}" cy="${oT[1]}" r="${ns}" fill="${aC}"/>
          <circle cx="${oBR[0]}" cy="${oBR[1]}" r="${ns}" fill="${aC}"/>
          <circle cx="${oBL[0]}" cy="${oBL[1]}" r="${ns}" fill="${aC}"/>`;
    if (geo.shakti) {
      const sn = ns*.68;
      o += `<circle cx="${sT[0]}" cy="${sT[1]}" r="${sn}" fill="${sC}" opacity="0.5"/>
            <circle cx="${sBR[0]}" cy="${sBR[1]}" r="${sn}" fill="${sC}" opacity="0.5"/>
            <circle cx="${sBL[0]}" cy="${sBL[1]}" r="${sn}" fill="${sC}" opacity="0.5"/>`;
    }
  }
  if (geo.bindu && bs > 0 && mode !== 'outline') {
    if (mode === 'filled') o += `<circle cx="0" cy="0" r="${bs*1.6}" fill="${accent}" opacity="0.2"/>`;
    o += `<circle cx="0" cy="0" r="${bs}" fill="${bC}"/>`;
  }
  return o;
}

function buildSVG(s: LogoState, forExport = false): string {
  const mark = buildMark(s);
  const { layout, accent, fg, transp, size } = s;

  let bgC = 'transparent';
  if (transp === 'dark')        bgC = '#07080C';
  else if (transp === 'light')  bgC = '#F4F3EF';
  else if (transp === 'accent') bgC = accent;

  const fgT = transp === 'light' ? '#111111' : fg;
  const bgR = (w: number, h: number, rx = 0) =>
    bgC !== 'transparent' ? `<rect width="${w}" height="${h}"${rx ? ` rx="${rx}"` : ''} fill="${bgC}"/>` : '';

  switch (layout) {
    case 'icon-only': {
      const d = forExport ? size : 120, rx = d*.22;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${d} ${d}" width="${d}" height="${d}">
${FONT_DEFS}${bgR(d, d, rx)}
${bgC !== 'transparent' ? `<rect x="1" y="1" width="${d-2}" height="${d-2}" rx="${rx*.975}" fill="none" stroke="${accent}" stroke-width="0.8" opacity="0.25"/>` : ''}
<g transform="translate(${d/2},${d/2}) scale(${forExport ? (d/120)*.75 : .9})">${mark}</g>
</svg>`;
    }
    case 'horizontal': {
      const w = forExport ? size : 300, h = forExport ? Math.round(size*88/300) : 88;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 88" width="${w}" height="${h}">
${FONT_DEFS}${bgR(300, 88)}
<g transform="translate(46,44) scale(.88)">${mark}</g>
<line x1="94" y1="20" x2="94" y2="68" stroke="${accent}" stroke-width="0.5" opacity="0.3"/>
<text x="106" y="50" font-family="Rajdhani,sans-serif" font-weight="600" font-size="30" fill="${accent}">S</text>
<text x="124" y="50" font-family="Rajdhani,sans-serif" font-weight="300" font-size="30" letter-spacing="2" fill="${fgT}">hrium</text>
<text x="106" y="66" font-family="Rajdhani,sans-serif" font-weight="200" font-size="7.8" letter-spacing="4.8" fill="${accent}" opacity="0.55">TECHNOLOGIES</text>
</svg>`;
    }
    case 'vertical': {
      const w = forExport ? size : 160, h = forExport ? Math.round(size*180/160) : 180;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 180" width="${w}" height="${h}">
${FONT_DEFS}${bgR(160, 180)}
<g transform="translate(80,72)">${mark}</g>
<line x1="32" y1="126" x2="128" y2="126" stroke="${accent}" stroke-width="0.5" opacity="0.25"/>
<text x="80" y="150" font-family="Rajdhani,sans-serif" font-weight="600" font-size="28" fill="${accent}" text-anchor="middle">S<tspan font-weight="300" fill="${fgT}">hrium</tspan></text>
<text x="80" y="166" font-family="Rajdhani,sans-serif" font-weight="200" font-size="6.8" letter-spacing="5" fill="${accent}" opacity="0.55" text-anchor="middle">TECHNOLOGIES</text>
</svg>`;
    }
    case 'wordmark': {
      const w = forExport ? size : 260, h = forExport ? Math.round(size*72/260) : 72;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 260 72" width="${w}" height="${h}">
${FONT_DEFS}${bgR(260, 72)}
<text x="18" y="47" font-family="Rajdhani,sans-serif" font-weight="600" font-size="38" fill="${accent}">S</text>
<text x="44" y="47" font-family="Rajdhani,sans-serif" font-weight="300" font-size="38" letter-spacing="3" fill="${fgT}">hrium</text>
<line x1="18" y1="53" x2="242" y2="53" stroke="${accent}" stroke-width="0.5" opacity="0.35"/>
<text x="18" y="65" font-family="Rajdhani,sans-serif" font-weight="200" font-size="7.5" letter-spacing="6.5" fill="${accent}" opacity="0.55">TECHNOLOGIES</text>
</svg>`;
    }
    case 'stacked': {
      const w = forExport ? size : 220, h = forExport ? Math.round(size*200/220) : 200;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 200" width="${w}" height="${h}">
${FONT_DEFS}${bgR(220, 200)}
<g transform="translate(110,80) scale(1.1)">${mark}</g>
<line x1="30" y1="132" x2="190" y2="132" stroke="${accent}" stroke-width="0.5" opacity="0.2"/>
<text x="110" y="158" font-family="Rajdhani,sans-serif" font-weight="600" font-size="32" fill="${accent}" text-anchor="middle">S<tspan font-weight="300" fill="${fgT}">HRIUM</tspan></text>
<text x="110" y="175" font-family="Rajdhani,sans-serif" font-weight="200" font-size="7" letter-spacing="5.5" fill="${accent}" opacity="0.5" text-anchor="middle">TECHNOLOGIES</text>
<line x1="30" y1="182" x2="190" y2="182" stroke="${accent}" stroke-width="0.3" opacity="0.15"/>
<text x="110" y="194" font-family="Rajdhani,sans-serif" font-weight="200" font-size="5.5" letter-spacing="3" fill="${fgT}" opacity="0.3" text-anchor="middle">BENGALURU · INDIA</text>
</svg>`;
    }
  }
}

function thumbSVG(p: Preset): string {
  const a  = p.state.accent ?? '#C8841A';
  const f  = p.state.fg    ?? '#E8E6E0';
  const bg = p.state.transp === 'light' ? '#F4F3EF' : '#07080C';
  const hasBg = p.state.transp !== 'transparent';
  return `<svg viewBox="-22 -24 44 48" width="36" height="36" xmlns="http://www.w3.org/2000/svg">
    ${hasBg ? `<rect x="-22" y="-24" width="44" height="48" fill="${bg}" rx="4"/>` : ''}
    <polygon points="0,-20 17.3,10 -17.3,10" stroke="${a}" stroke-width="2.2" fill="none" stroke-linejoin="miter"/>
    <polygon points="0,20 -17.3,-10 17.3,-10" stroke="${f}" stroke-width="1.4" fill="none" stroke-linejoin="miter" opacity="0.5"/>
    <circle cx="0" cy="0" r="2.2" fill="${a}"/>
  </svg>`;
}

// ─────────────────────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────────────────────

@Component({
  selector: 'app-logo-generator',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule],
  templateUrl: './logo-generator.component.html',   // ← fixed: was pointing to .css
  styleUrl: './logo-generator.component.scss',
})
export class LogoGeneratorComponent implements OnInit {

  private sanitizer = inject(DomSanitizer);

  // ── Signals ─────────────────────────────────────────────────
  s            = signal<LogoState>(structuredClone(DEFAULT_STATE));
  activePal    = signal('saffron');
  activePreset = signal(0);

  // ── Computed safe SVG ────────────────────────────────────────
  safeSvg = computed(() => this.sanitizer.bypassSecurityTrustHtml(buildSVG(this.s())));

  // ── Toast ────────────────────────────────────────────────────
  toastMsg     = '';
  toastVisible = false;
  private toastTimer: ReturnType<typeof setTimeout> | null = null;

  // ── Panel open state (all open by default) ───────────────────
  open = [true, true, true, true, true, true, true, true];

  // ── Static option tables ─────────────────────────────────────
  readonly geoFields = [
    { key: 'outer'  as const, label: 'Outer Shiva Triangle'  },
    { key: 'shakti' as const, label: 'Shakti Triangle'        },
    { key: 'inner'  as const, label: 'Inner Product Triangle' },
    { key: 'bindu'  as const, label: 'Bindu'                  },
    { key: 'nodes'  as const, label: 'Vertex Nodes'           },
  ];

  readonly sliders = [
    { key: 'strokeWidth' as const, label: 'Stroke Width', min: 0.5, max: 8,  step: 0.5 },
    { key: 'nodeSize'    as const, label: 'Node Size',    min: 0,   max: 12, step: 0.5 },
    { key: 'binduSize'   as const, label: 'Bindu Size',   min: 0,   max: 20, step: 0.5 },
  ];

  readonly cornerOptions = [
    { value: 'miter' as CornerStyle, label: 'Sharp (Miter)'    },
    { value: 'round' as CornerStyle, label: 'Rounded'           },
    { value: 'bevel' as CornerStyle, label: 'Technical (Bevel)' },
  ];

  readonly colorFields = [
    { key: 'accent'    as const, label: 'Primary Accent'   },
    { key: 'secondary' as const, label: 'Secondary Accent'  },
    { key: 'fg'        as const, label: 'Foreground'        },
    { key: 'bg'        as const, label: 'Background'        },
  ];

  readonly paletteKeys = Object.keys(QUICK_PALETTES);

  readonly bgOptions = [
    { value: 'transparent' as BgMode, label: 'Transparent' },
    { value: 'dark'        as BgMode, label: 'Dark BG'     },
    { value: 'light'       as BgMode, label: 'Light BG'    },
    { value: 'accent'      as BgMode, label: 'Accent BG'   },
  ];

  readonly modeOptions = [
    { value: 'sacred-full'  as LogoMode, label: 'Sacred Full'  },
    { value: 'sacred-tech'  as LogoMode, label: 'Sacred Tech'  },
    { value: 'tech-minimal' as LogoMode, label: 'Tech Minimal' },
    { value: 'monoline'     as LogoMode, label: 'Monoline'     },
    { value: 'monochrome'   as LogoMode, label: 'Monochrome'   },
    { value: 'filled'       as LogoMode, label: 'Filled'       },
    { value: 'outline'      as LogoMode, label: 'Outline'      },
  ];

  readonly layoutOptions = [
    { value: 'icon-only'  as LogoLayout, label: 'Icon Only'  },
    { value: 'horizontal' as LogoLayout, label: 'Horizontal' },
    { value: 'vertical'   as LogoLayout, label: 'Vertical'   },
    { value: 'wordmark'   as LogoLayout, label: 'Wordmark'   },
    { value: 'stacked'    as LogoLayout, label: 'Stacked'    },
  ];

  readonly exportSizes: ExportSize[] = [16, 32, 64, 128, 256, 512, 1024, 2048];

  presets: (Preset & { thumb: string })[] = [];

  ngOnInit(): void {
    this.presets = PRESETS.map(p => ({ ...p, thumb: thumbSVG(p) }));
  }

  // ── Helpers ──────────────────────────────────────────────────

  getStr(key: keyof Pick<LogoState, 'accent' | 'secondary' | 'fg' | 'bg'>): string {
    return this.s()[key];
  }

  setStr(key: string, value: string): void {
    this.s.update(st => ({ ...st, [key]: value }));
    this.activePal.set('');
    this.activePreset.set(-1);
  }

  setNum(key: string, value: string | number): void {
    this.s.update(st => ({ ...st, [key]: +value }));
    this.activePreset.set(-1);
  }

  setColor(key: string, value: string): void {
    this.s.update(st => ({ ...st, [key]: value }));
    this.activePal.set('');
    this.activePreset.set(-1);
  }

  toggleGeo(key: keyof GeoState): void {
    this.s.update(st => ({
      ...st,
      geo: { ...st.geo, [key]: !st.geo[key] },
    }));
    this.activePreset.set(-1);
  }

  sliderPct(key: keyof Pick<LogoState, 'strokeWidth' | 'nodeSize' | 'binduSize'>, min: number, max: number): string {
    const v = this.s()[key] as number;
    return ((v - min) / (max - min) * 100).toFixed(1) + '%';
  }

  applyPalette(key: string): void {
    const p = QUICK_PALETTES[key];
    this.s.update(st => ({ ...st, ...p }));
    this.activePal.set(key);
    this.activePreset.set(-1);
  }

  loadPreset(idx: number): void {
    const ps = PRESETS[idx].state;
    this.s.update(st => ({
      ...st,
      ...(ps.mode        !== undefined ? { mode:        ps.mode        } : {}),
      ...(ps.layout      !== undefined ? { layout:      ps.layout      } : {}),
      ...(ps.transp      !== undefined ? { transp:      ps.transp      } : {}),
      ...(ps.accent      !== undefined ? { accent:      ps.accent      } : {}),
      ...(ps.secondary   !== undefined ? { secondary:   ps.secondary   } : {}),
      ...(ps.fg          !== undefined ? { fg:          ps.fg          } : {}),
      ...(ps.bg          !== undefined ? { bg:          ps.bg          } : {}),
      ...(ps.corner      !== undefined ? { corner:      ps.corner      } : {}),
      ...(ps.strokeWidth !== undefined ? { strokeWidth: ps.strokeWidth } : {}),
      ...(ps.nodeSize    !== undefined ? { nodeSize:    ps.nodeSize    } : {}),
      ...(ps.binduSize   !== undefined ? { binduSize:   ps.binduSize   } : {}),
      geo: ps.geo ? { ...st.geo, ...ps.geo } : st.geo,
    }));
    this.activePreset.set(idx);
    this.activePal.set('');
    this.showToast('Preset loaded: ' + PRESETS[idx].name);
  }

  reset(): void {
    this.s.set(structuredClone(DEFAULT_STATE));
    this.activePreset.set(0);
    this.activePal.set('saffron');
    this.showToast('Reset to defaults');
  }

  fmtLabel(s: string): string {
    return s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  }

  sanitize(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

  // ── Downloads ─────────────────────────────────────────────────

  dlSVG(): void {
    const cur = this.s();
    const svg = buildSVG(cur, true);
    this.blob2dl(new Blob([svg], { type: 'image/svg+xml' }),
      `shrium-${cur.layout}-${cur.mode}-${cur.size}px.svg`);
    this.showToast(`Downloaded SVG · ${cur.size}px`);
  }

  dlPNG(): void {
    const cur = this.s();
    const svg = buildSVG(cur, true);
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml' }));
    const img = new Image();
    img.onload = () => {
      const c = document.createElement('canvas');
      c.width = cur.size; c.height = cur.size;
      c.getContext('2d')!.drawImage(img, 0, 0, cur.size, cur.size);
      c.toBlob(b => {
        this.blob2dl(b!, `shrium-${cur.layout}-${cur.mode}-${cur.size}px.png`);
        this.showToast(`Downloaded PNG · ${cur.size}px`);
        URL.revokeObjectURL(url);
      });
    };
    img.src = url;
  }

  copySVG(): void {
    const svg = buildSVG(this.s(), true);
    navigator.clipboard.writeText(svg).then(() => this.showToast('SVG code copied to clipboard'));
  }

  dlAll(): void {
    const sizes: ExportSize[] = [16, 32, 64, 128, 256, 512, 1024];
    let i = 0;
    const tick = () => {
      if (i >= sizes.length) { this.showToast('All sizes downloaded'); return; }
      const svg = buildSVG({ ...this.s(), size: sizes[i] }, true);
      this.blob2dl(new Blob([svg], { type: 'image/svg+xml' }),
        `shrium-${this.s().layout}-${sizes[i]}px.svg`);
      i++; setTimeout(tick, 220);
    };
    tick();
  }

  private blob2dl(blob: Blob, name: string): void {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = name; a.click();
    URL.revokeObjectURL(url);
  }

  // ── Renamed from `toast` to `showToast` to avoid shadowing the template variable ──
  private showToast(msg: string): void {
    this.toastMsg = msg;
    this.toastVisible = true;
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => { this.toastVisible = false; }, 2200);
  }
}