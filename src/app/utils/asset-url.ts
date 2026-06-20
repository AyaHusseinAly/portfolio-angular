export function assetUrl(path: string): string {
  if (!path || path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:')) {
    return path;
  }

  const baseHref = document.querySelector('base')?.getAttribute('href') ?? '/';
  const base = baseHref.endsWith('/') ? baseHref : `${baseHref}/`;
  return `${window.location.origin}${base}${path.replace(/^\//, '')}`;
}
