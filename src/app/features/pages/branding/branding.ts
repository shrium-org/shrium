import { Component } from "@angular/core";
import { PublicLayout } from "../../../layouts/public-layout/public-layout";
import { Meaning } from "../../branding/components/meaning/meaning";
import { Typography } from "../../branding/components/typography/typography";
import { Palette } from "../../branding/components/palette/palette";
import { Usage } from "../../branding/components/usage/usage";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PublicLayout, Meaning, Typography, Palette, Usage],
  templateUrl: './branding.html',
  styleUrl: './branding.css'
})
export class Branding {
}