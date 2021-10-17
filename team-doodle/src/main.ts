import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { WebComponentAppModule } from './app/web-component-app.module'
import { environment } from './environments/environment'
import { DevAppModule } from './app/dev-app.module'

if (environment.production) {
  enableProdMode();
  platformBrowserDynamic().bootstrapModule(WebComponentAppModule)
    .catch(err => console.error(err));
} else {
  platformBrowserDynamic().bootstrapModule(DevAppModule)
    .catch(err => console.error(err));
}

console.log("Team Doodle - Main")
