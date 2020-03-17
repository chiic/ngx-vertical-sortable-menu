import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { NgxVertialSortableMenuModule } from '../../dist';
import { NgxVertialSortableMenuModule } from './ngx-vertial-sortable-menu/ngx-vertial-sortable-menu.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxVertialSortableMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
