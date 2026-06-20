import { Pipe, PipeTransform, inject } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

@Pipe({
  name: 'assetUrl',
})
export class AssetUrlPipe implements PipeTransform {
  private readonly baseHref = inject(APP_BASE_HREF);

  transform(path: string): string {
    if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
      return path;
    }

    const base = this.baseHref.endsWith('/') ? this.baseHref : `${this.baseHref}/`;
    return `${base}${path.replace(/^\//, '')}`;
  }
}
