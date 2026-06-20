import { Component } from '@angular/core';
import { profile, skills, stats } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  readonly profile = profile;
  readonly skills = skills;
  readonly stats = stats;
}
