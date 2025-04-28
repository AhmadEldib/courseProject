import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-card.component.html',
  styleUrl: './instagram-card.component.scss'
})
export class InstagramCardComponent {

  @Input({required: true}) imgUrl!: string;

  isHovering = false;

  onMouseEnter(show: boolean): void {
    this.isHovering = show;
  }

}
