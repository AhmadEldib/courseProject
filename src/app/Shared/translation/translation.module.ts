import { NgModule, Provider, ModuleWithProviders } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';


const httpLoaderFactory = (http: HttpClient) => new TranslateHttpLoader(http, '/assets/i18n/', '.json');
const translatecomilerFactory = () => new TranslateMessageFormatCompiler();

const translateLoader: Provider = {
  provide: TranslateLoader,
  useFactory: httpLoaderFactory,
  deps: [HttpClient]
};

const translateCompiler: Provider = {
  provide: TranslateCompiler,
  useFactory: translatecomilerFactory
};

@NgModule({})

export class MyTranslationModule { 
  static forRoot(): ModuleWithProviders<MyTranslationModule> {
    return TranslateModule.forRoot({
      loader: translateLoader,
      compiler: translateCompiler
    });
  }

  static forChild(): ModuleWithProviders<TranslateModule> {
    return TranslateModule.forChild({
      loader: translateLoader,
      compiler: translateCompiler,
      isolate: false // Set to false to share the same instance of the loader across the app
    });
  }
}
