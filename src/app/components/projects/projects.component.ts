import { Component, signal } from '@angular/core';
import { projectFilters, projects } from '../../data/portfolio.data';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  readonly projects = projects;
  readonly filters = projectFilters;
  readonly activeFilter = signal('all');

  filteredProjects() {
    const f = this.activeFilter();
    return f === 'all' ? this.projects : this.projects.filter((p) => p.category === f);
  }

  setFilter(key: string): void {
    this.activeFilter.set(key);
  }
}
