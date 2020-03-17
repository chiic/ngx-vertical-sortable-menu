import { Component, OnInit } from '@angular/core';
import { MenuItem } from './ngx-vertial-sortable-menu/interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  menus: MenuItem[];

  ngOnInit() {
    setTimeout(() => {
     this.menus = [{
        name: 'archives',
        url: '/archives',
        icon: 'fa fa-camera-retro fa-lg',
        iconType: 'class'
      }, {
        name: 'video screencasts',
        url: '/video-screencasts',
        icon: '3333',
      }, {
        name: 'almanac',
        url: '/almanac',
        icon: '3333',
      }, {
        name: 'snippets',
        url: '/snippets',
        icon: '3333',
      }, {
        name: 'newsletters',
        url: '/newsletters',
        icon: '3333',
      }, {
        name: 'jobs',
        url: '/jobs',
        icon: 'jobs',
      }];
    }, 5000);
  }

  clickEmit(item) {
    console.log(item);
  }

  closeEmit(item) {
    console.log(item);
  }

  menuSort(groups) {
    console.log(groups);
  }
}
