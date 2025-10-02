import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-project',
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

  projects: any[] = [];
  constructor(private profileService: ProfileService) { }
  ngOnInit() {
    this.projects = this.profileService.projects
  }
}
