import { Component, OnInit, ElementRef, Input, Output, EventEmitter, SimpleChanges, OnChanges} from '@angular/core';

import { MenuItem } from './interface';

@Component({
  selector: 'app-vertial-sortable-menu',
  templateUrl: './ngx-vertial-sortable-menu.component.html',
  styleUrls: ['./ngx-vertial-sortable-menu.component.scss']
})
export class NgxVertialSortableMenuComponent implements OnInit, OnChanges {
  @Input() menuList: MenuItem[];
  @Input() liHeight: number;

  @Output() clickEmit = new EventEmitter<MenuItem>();
  @Output() closeEmit = new EventEmitter<MenuItem>();
  @Output() menuSort = new EventEmitter<MenuItem[]>();
  indexflg = -1;
  dragElement: any;
  initClientY: number;
  changeNum = 0;
  menuListClone: MenuItem[];
  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.menuList && changes.menuList.currentValue) {
      this.menuListClone = this.singleDeepClone(changes.menuList.currentValue);
    }
  }

  getItemIndex(event, index: number) {
    this.dragElement = this.el.nativeElement.querySelectorAll('.lt-menu')[index];
    this.indexflg = index;
    this.initClientY = event.clientY;
    document.addEventListener('mousemove', this.moveHandler);
    document.addEventListener('mouseup', this.removeHandler);
  }

  moveHandler = () => {
    const event: any = window.event;
    const top = this.indexflg * this.liHeight;
    const move = event.clientY - this.initClientY;
    const nowIndex = this.indexflg + this.changeNum;
    this.dragElement.style.top = top + move + 'px';
    if (move > this.liHeight / 2 + this.changeNum * this.liHeight && nowIndex < this.menuListClone.length - 1) {
      const moveElement = this.el.nativeElement.querySelector(`#drag-index-${nowIndex + 1}`);
      this.dragElement.setAttribute('id', `drag-index-${nowIndex + 1}`);
      moveElement.setAttribute('id', `drag-index-${nowIndex}`);
      moveElement.style.top = nowIndex * this.liHeight + 'px';
      this.changeNum++;
      return;
    }
    if (move < -this.liHeight / 2 + this.changeNum * this.liHeight && nowIndex > 0) {
      const moveElement = this.el.nativeElement.querySelector(`#drag-index-${nowIndex - 1}`);
      this.dragElement.setAttribute('id', `drag-index-${nowIndex - 1}`);
      moveElement.setAttribute('id', `drag-index-${nowIndex}`);
      moveElement.style.top = nowIndex * this.liHeight + 'px';
      this.changeNum--;
      return;
    }

  }
  removeHandler = () => {
    this.initListstatus();
    document.removeEventListener('mousemove', this.moveHandler);
    document.removeEventListener('mouseup', this.removeHandler);
  }

  singleDeepClone(arr: MenuItem[]) {
    return arr.map(v => Object.assign({}, v));
  }

  initListstatus() {
    this.dragElement.style.top = (this.indexflg + this.changeNum) * this.liHeight + 'px';
    const item = this.menuListClone.splice(this.indexflg, 1);
    this.menuListClone.splice(this.changeNum + this.indexflg, 0, item[0]);
    this.menuSort.emit(this.menuListClone);
    this.changeNum = 0;
    this.indexflg = -1;
  }

  clickHandler(item) {
    this.clickEmit.emit(item);
  }

  closeItem(event, item: MenuItem) {
    event.stopPropagation();
    this.closeEmit.emit(item);
  }
}
