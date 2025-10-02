import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills: any[] = []
  constructor(private profileService: ProfileService) { }
  ngOnInit(): void {
    this.skills = this.profileService.skills;
  }

}
