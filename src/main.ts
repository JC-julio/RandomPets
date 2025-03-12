import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/randomPets/random.config';
import { AppComponent } from './app/randomPets/random.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
