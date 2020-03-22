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
  clickEv = '';
  index = 1;

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
    }, 1000);
  }

  clickEmit(item) {
    this.clickEv = item.name;
  }

  closeEmit(item) {
    this.menus = this.menus.filter(l => l.name !== item.name);
  }

  get groups() {
    return JSON.stringify(this.menus, null, '\t');
  }

  menuSort(groups) {
    this.menus = groups;
  }

  shiftHandler() {
    this.menus.shift();
    this.menus = [...this.menus];
  }
  pushHandler() {
    this.menus = [...this.menus, {
      name: 'test' + this.index,
      url: '/test' + this.index,
      icon: 'fa fa-weixin',
      iconType: 'class'
    }];
    this.index++;
  }
}
