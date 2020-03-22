import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxVerticalSortableMenuModule } from '../../../dist';
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
