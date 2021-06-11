import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.collapsed') isOpen = false;

  // tslint:disable-next-line:typedef
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }


}
