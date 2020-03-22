import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxVerticalSortableMenuModule } from 'ngx-vertical-sortable-menu';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxVerticalSortableMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
