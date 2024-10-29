import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { defineCustomElements} from '@ionic/pwa-elements/loader';

// call the element loader before the bootstrapModule/bootsrapApplication call
defineCustomElements(window);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
