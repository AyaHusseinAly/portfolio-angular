import { DOCUMENT } from '@angular/common';
import { Inject, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'assetUrl',
})
export class AssetUrlPipe implements PipeTransform {
  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  transform(path: string): string {
    if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
      return path;
    }

    return new URL(path.replace(/^\//, ''), this.document.baseURI).href;
  }
}
