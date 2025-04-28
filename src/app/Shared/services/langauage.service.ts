import { inject, Injectable, signal } from '@angular/core';
import { MyTranslationService } from './translation.service';
import { LocalstorageService } from './localstorage.service';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class LangauageService {
  private defaultLang = signal<string>('en').asReadonly(); // Default language
  private langkey = signal<string>('lang').asReadonly(); // Key for storing language in local storage
  private currentLanguage = signal<string>('');
  private html: HTMLElement; // HTML element to set the direction (ltr/rtl)

  private readonly translationService = inject(MyTranslationService); // Translation service to handle language changes
  private readonly localStorageService = inject(LocalstorageService); // Local storage service to store and retrieve the selected language
  private readonly document = inject(DOCUMENT); // Document object to manipulate the HTML element

  constructor() {
    this.currentLanguage.set(this.localStorageService.getAppLang(this.langkey()) || this.defaultLang()); // Get stored language from local storage or use default language
    this.html = this.document.getElementsByTagName('html')[0]; // Get the HTML element to set the direction (ltr/rtl)
  }

  initDeafultLanguage(): void {
    this.translationService.setDeafultLanguage(this.currentLanguage()); // Set the default language in the translation service
    this.updateLayout(this.currentLanguage()); // Update the layout based on the current language
  }

  changeLanguage(lang: string): void {
    this.currentLanguage.set(lang); // Update the current language signal
    this.localStorageService.setAppLang(this.langkey(), lang); // Store the selected language in local storage
    this.translationService.useLanguage(lang); // Use the selected language in the translation service
    this.updateLayout(lang); // Update the layout based on the selected language
  }

  getCurrentLang(): string {
    return this.currentLanguage();
  }

  private updateLayout(lang: string): void {
    this.html.lang = this.getCurrentLang(); // Set the lang attribute of the HTML element
    this.html.dir = this.isEnglish(lang) ? 'ltr' : 'rtl'; // Set the direction (ltr/rtl) based on the selected language
  }

  private isEnglish(lang: string): boolean {
    return this.getCurrentLang() === 'en'; // Check if the current language is English
  }
}

//Old Code before refactoring it
//We will use signals instead of services to handle the language change + ltr and rtl direction
// export class LangauageService {

//   readonly deafultLanguage: string = 'en'; // Default language
//   readonly langKey: string = 'language'; // Key for storing language in local storage

//   private readonly translationService = inject(MyTranslationService);
//   private readonly localStorageService = inject(LocalstorageService);

//   initDeafultLanguage(): void {
//     //get stored language from local storage, use it if exists, otherwise use default language
//     const storedLanguage = this.localStorageService.getAppLang(this.langKey) || this.deafultLanguage;
//     this.translationService.setDeafultLanguage(storedLanguage);
//   }

//   changeLanguage(lang: string): void {
//     // Store the selected language in local storage
//     this.localStorageService.setAppLang(this.langKey, lang);
//     this.translationService.useLanguage(lang);
//   }
// }
