import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const production = false;
if (production)
    enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);