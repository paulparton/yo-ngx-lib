import { NgModule } from '@angular/core';

import { YoNgxLibService } from './yo-ngx-lib.service';
import { YoNgxLibComponent } from './yo-ngx-lib.component';

export function asyncLocalStorageFactory() {
  return new YoNgxLibService();
}

@NgModule({
  declarations: [
    YoNgxLibComponent,
  ],
  exports: [
    YoNgxLibComponent,
  ],
  providers: [
    {
      provide: YoNgxLibService,
      useFactory: asyncLocalStorageFactory
    }
  ]
})
export class YoNgxLibModule {
}
