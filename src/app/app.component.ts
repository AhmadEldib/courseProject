import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LangauageService } from '@app/shared/services';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'courseProject';

  //Set the default language to English
  private readonly langService = inject(LangauageService);

  ngOnInit(): void {
    this.setDefaultLanguage(); // Set the default language when the component initializes    
  }

  setDefaultLanguage(): void {
    this.langService.initDeafultLanguage();
  }

}
