import { Component, ViewEncapsulation } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';

import { middleware, enhancers } from './app.extensibility';
import { IAppState, rootReducer } from '../app/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<IAppState>,
  ) {

    ngRedux.configureStore(
      rootReducer,
      {},
      middleware,
      devTools.isEnabled() ?
        [...enhancers, devTools.enhancer()] :
        enhancers);
  }
}
