import { Component } from '@angular/core';
import { profile } from '../../data/portfolio.data';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  readonly profile = profile;

  readonly contactCards = [
    {
      label: 'Email',
      value: profile.email,
      href: 'mailto:' + profile.email,
      shape: 'circle' as const,
    },
    {
      label: 'WhatsApp',
      value: profile.whatsappDisplay,
      href: profile.whatsapp,
      shape: 'triangle' as const,
    },
    {
      label: 'LinkedIn',
      value: profile.linkedinHandle,
      href: profile.linkedin,
      shape: 'hexagon' as const,
    },
    {
      label: 'GitHub',
      value: '@' + profile.githubHandle,
      href: profile.github,
      shape: 'diamond' as const,
    },
    {
      label: 'Location',
      value: profile.location,
      href: 'https://www.google.com/maps/place/Alexandria,+Egypt',
      shape: 'circle' as const,
    },
  ];
}
