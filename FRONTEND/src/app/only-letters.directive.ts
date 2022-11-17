import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appOnlyLetters]'
})
export class OnlyLettersDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.onkeypress = (evt: any) => {
      if (evt.which < 64 || evt.which > 122) {
        evt.preventDefault();
      }

    }
   }

}
