import { Component, signal} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';
import { IAdminMenuItem } from './admin-menu.interface';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
  imports: [RouterModule, SharedModule]
})
export class AdminComponent {
  
  menuItems = signal<IAdminMenuItem[]>([
    {
      text: 'admin.products',
      url: 'products',
      icon: 'fa-solid fa-box',
    },
    {
      text: 'admin.categories',
      url: 'categories',
      icon: 'fa-solid fa-tags',
    }
  ]).asReadonly();
}
