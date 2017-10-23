import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// brings an instance of app.module
import { AppModule } from './app/app.module';
// defines the environment variable
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// This code creates a browser platform for dynamic (JIT) compilation and bootstraps the AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
