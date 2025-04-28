import { Component, inject, OnInit } from '@angular/core';
import { MegaMenuComponent } from './mega-menu/mega-menu.component';
import { LangauageService } from '@app/shared/services';
import { SharedModule } from '@app/shared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MegaMenuComponent,
    SharedModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {
  showMenu = false;

  private readonly langauageService = inject(LangauageService);
  private readonly router = inject(Router);

  ngOnInit(): void {
  }

  toggleMenu(show: boolean): void {
    this.showMenu = show;
  }

  changeLang(lang: string): void {
    this.langauageService.changeLanguage(lang);
  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }

  isCurrentLang(lang: string): boolean {
    return this.langauageService.getCurrentLang() === lang;
  }
}
