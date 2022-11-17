import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { EventType } from '@angular/router';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {
  @Input() maxSize: String = "";

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (evt: any) => {
      if (evt.which < 48 || evt.which > 57) {
        evt.preventDefault();
      }

      if (this._element.nativeElement.value.length > this.maxSize) {
        evt.preventDefault();
        this._element.nativeElement.style.backgroundColor = 'red';
      }
      else {
        this._element.nativeElement.style.backgroundColor = 'white';
      }

    }
  }
}

