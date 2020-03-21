import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'ngx-vertical-sortable-menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  menus: MenuItem[];
  groups = '';

  ngOnInit() {
    setTimeout(() => {
      this.menus = [{
        name: 'weixin',
        url: '/weixin',
        icon: 'fa fa-weixin',
        iconType: 'class'
      }, {
        name: 'reddit',
        url: '/reddit',
        icon: 'fa fa-reddit',
        iconType: 'class'
      }, {
        name: 'weibo',
        url: '/weibo',
        icon: 'fa fa-weibo',
        iconType: 'class'
      }, {
        name: 'github',
        url: '/github',
        icon: 'fa fa-github',
        iconType: 'class'
      }, {
        name: 'slack',
        url: '/slack',
        icon: 'fa fa-slack',
        iconType: 'class'
      }, {
        name: 'stack-overflow',
        url: '/stack-overflow',
        icon: 'fa fa-stack-overflow',
        iconType: 'class'
      }, {
        name: 'wordpress',
        url: '/wordpress',
        icon: 'fa fa-wordpress',
        iconType: 'class'
      }, {
        name: 'vk',
        url: '/vk',
        icon: 'fa fa-vk',
        iconType: 'class'
      }, {
        name: 'usb',
        url: '/usb',
        icon: 'fa fa-usb',
        iconType: 'class'
      }];
      this.groups = JSON.stringify(this.menus, null, '\t');
    }, 1000);
  }

  clickEmit(item) {
    console.log(item);
  }

  closeEmit(item) {
    console.log(item);
  }

  menuSort(groups) {
    this.groups = JSON.stringify(groups, null, '\t');
  }
}
