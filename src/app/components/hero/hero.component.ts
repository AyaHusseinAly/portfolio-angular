import { Component } from '@angular/core';
import { profile } from '../../data/portfolio.data';
import { AssetUrlPipe } from '../../pipes/asset-url.pipe';

@Component({
  selector: 'app-hero',
  imports: [AssetUrlPipe],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  readonly profile = profile;
  photoUrl = profile.photoUrl;

  onPhotoError(): void {
    if (this.photoUrl !== 'profile-placeholder.svg') {
      this.photoUrl = 'profile-placeholder.svg';
    }
  }
}
