import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { FeedbackFormComponent } from './app/app';

bootstrapApplication(FeedbackFormComponent , appConfig)
  .catch((err) => console.error(err));
