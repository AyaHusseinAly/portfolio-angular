import { Component } from '@angular/core';
import { experience } from '../../data/portfolio.data';
import { AssetUrlPipe } from '../../pipes/asset-url.pipe';

@Component({
  selector: 'app-experience',
  imports: [AssetUrlPipe],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
})
export class ExperienceComponent {
  readonly experience = experience;
}
