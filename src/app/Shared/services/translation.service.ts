import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MyTranslationService {

  constructor() { }

  private readonly translationService = inject(TranslateService);

  setDeafultLanguage(lang: string): void {
    this.translationService.setDefaultLang(lang);
  }

  useLanguage(lang: string): void {
    this.translationService.use(lang);
  }
}
