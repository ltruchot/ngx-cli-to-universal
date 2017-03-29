import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app.module';
import { AppModuleNgFactory } from './ngfactory/src/app/app.module.ngfactory';

// FIXME: find a solution for the environement
// import { environment } from 'environments/environment';
const environment = {
  production: false
};

if (environment.production) {
  enableProdMode();
}
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);

