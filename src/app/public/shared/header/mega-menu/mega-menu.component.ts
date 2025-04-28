import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mega-menu',
  standalone: true,
  imports: [],
  templateUrl: './mega-menu.component.html',
  styleUrl: './mega-menu.component.scss'
})
export class MegaMenuComponent {
  @Input({required: true}) showMenu = false;
}
