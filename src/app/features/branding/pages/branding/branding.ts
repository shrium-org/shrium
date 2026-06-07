import { Component } from "@angular/core";
import { Meaning } from "../../components/meaning/meaning";
import { Hero } from "../../../../shared/components/hero/hero";
import { PublicLayout } from "../../../../layouts/public-layout/public-layout";
import { Typography } from "../../components/typography/typography";
import { Palette } from "../../components/palette/palette";
import { Usage } from "../../components/usage/usage";
import { Variants } from "../../components/variants/variants";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PublicLayout,Meaning,Palette,Variants,Typography,Usage],
  templateUrl: './branding.html',
  styleUrl: './branding.css'
})
export class Branding {
}