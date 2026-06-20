import { Component } from '@angular/core';
import { profile } from '../../data/portfolio.data';
import { assetUrl } from '../../utils/asset-url';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly profile = profile;
  photoUrl = assetUrl(profile.photoUrl);

  onPhotoError(): void {
    if (!this.photoUrl.endsWith('profile-placeholder.svg')) {
      this.photoUrl = assetUrl('profile-placeholder.svg');
    }
  }
}
