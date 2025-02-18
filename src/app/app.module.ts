import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter.reducer';
import { MyCounterComponent } from './counter/mycounter.component';

@NgModule({
  imports: [BrowserModule, StoreModule.forRoot({ count: counterReducer })],
  declarations: [AppComponent, MyCounterComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
