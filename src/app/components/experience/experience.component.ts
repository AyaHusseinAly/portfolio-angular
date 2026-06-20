import { Component } from '@angular/core';
import { experience, Experience } from '../../data/portfolio.data';
import { assetUrl } from '../../utils/asset-url';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience: Experience[] = experience.map((job) => ({
    ...job,
    logo: assetUrl(job.logo),
  }));
}
