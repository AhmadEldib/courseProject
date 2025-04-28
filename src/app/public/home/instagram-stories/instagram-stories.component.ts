import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { InstagramCardComponent } from './instagram-card/instagram-card.component';

@Component({
  selector: 'app-instagram-stories',
  standalone: true,
  imports: [CommonModule, InstagramCardComponent],
  templateUrl: './instagram-stories.component.html',
  styleUrl: './instagram-stories.component.scss'
})
export class InstagramStoriesComponent {

  readonly images: string[] = [
    'assets/Images/lady_one.jpg',
    'assets/Images/lady_two.jpg',
    'assets/Images/lady_three.jpg',
    'assets/Images/lady_four.png'
  ];

}
