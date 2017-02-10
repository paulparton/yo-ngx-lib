import { Component } from '@angular/core';
import { YoNgxLibService } from './yo-ngx-lib.service'

@Component({
  selector: 'yo-ngx-lib',
  template: `
    <h1>YoNgxLibComponent</h1>
    <h2>{{message}}</h2>
  `
})
export class YoNgxLibComponent {

  public message: string;

  constructor(
    private service: YoNgxLibService
  ) {
    this.message = this.service.getMessage()
  }

}
