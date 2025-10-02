import { Component } from '@angular/core';
import { ProfileService } from '../profile.service';
import { CommonModule } from '@angular/common';
import { SplitPipe } from '../split.pipe';

@Component({
  selector: 'app-about',
  imports: [CommonModule, SplitPipe],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  about1: any;
  about2: any;
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.about1 = this.profileService.about
    this.about2 = this.profileService.about2
  }
}
