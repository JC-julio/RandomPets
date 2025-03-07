import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/random.config';
import { AppComponent } from './app/random.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
