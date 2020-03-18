# ngx-vertical-sortable-menu

Vertical sorting drag menu based on angular6 +

## How to use it?

> npm i -S ngx-vertical-sortable-menu

Import the NgxVerticalSortableMenuModule in your app.module.ts:
```javascript
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxVerticalSortableMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
```
Use the NgxVerticalSortableMenuComponent  by placing:
```
  <div style="height: 100vh;border-right: 1px solid #cccccc;width: 240px;">
    <ngx-vertical-sortable-menu
    (closeEmit)="closeEmit($event)"
    (clickEmit)="clickEmit($event)"
    (menuSort)="menuSort($event)"
    [menuList]="menus"
    liHeight="40"></ngx-vertical-sortable-menu>
  </div>
```
## Overview
![sortable menu](https://raw.githubusercontent.com/chiic/ngx-vertical-sortable-menu/master/overview.jpg)

