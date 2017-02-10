import { Injectable } from '@angular/core';

@Injectable()
export class YoNgxLibService {

  constructor(
  ) {
    console.log('YoNgxLibService constructor')
  }

  getMessage() {
    return 'Hello from the YoNgxLibService! AND AGRIWEBB!!!!!'
  }
}
