import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  getAppLang(key: string): string | null {
    return localStorage.getItem(key);
  }

  setAppLang(key: string, value: string): void {
    localStorage.setItem(key, value);
  }
}
