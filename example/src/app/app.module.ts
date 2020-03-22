import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxVerticalSortableMenuModule } from '../../../src/app/ngx-vertical-sortable-menu/ngx-vertical-sortable-menu.module';
// import { NgxVertialSortableMenuModule } from './ngx-vertial-sortable-menu/ngx-vertial-sortable-menu.module';

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
