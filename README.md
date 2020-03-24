# ngx-vertical-sortable-menu

Vertical sorting drag menu based on angular6 +
## Overview
<div align="center">
  <img src="https://raw.githubusercontent.com/chiic/ngx-vertical-sortable-menu/master/overview.jpg"
       width = "200px" alt="Overview" align=center />
</div>

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

## Demo
[demo][1]
## API

### interface
- MenuItem: 
```javascript
type iconTy = 'class';
interface MenuItem {
    name: string;
    url: string;
    icon?: string;
    id?: string | number;
    iconType?: iconTy;
}
```

### Input &Output

| Property  |Description   | Type  |   Default|
| ------------ | ------------ | ------------ | ------------ |
|[menuList]  |An array of the MenuItem type   |MenuItem[]   | -  |
|  [liHeight] |  Menu line height | number  | -  |
| (clickEmit)  |  Menu click event callback function.| EventEmitter&lt;MenuItem>  | -  |
| (closeEmit)  |  Menu close event callback function.| EventEmitter&lt;MenuItem>  | -  |
| (menuSort)  |  Returns the current data when dragged and sorted.| EventEmitter&lt;MenuItem[]>  | -  |


  [1]: https://chiic.github.io/ngx-vertical
