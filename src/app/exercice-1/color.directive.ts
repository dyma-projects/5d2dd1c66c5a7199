import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[colorDirective]'
})
export class ColorDirective {
  
  couleurInitiale = 'violet';

  @HostBinding('style.color') txtcolor: string;
  @Input() couleurTexte;

  constructor() { }

  ngOnInit() {
    this.txtcolor = this.couleurInitiale;
  }

  @HostListener('document:keydown', ['$event']) handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.keyCode) {
      case 37:
        this.txtcolor = 'orangered';
        break;
      case 38:
        this.txtcolor = 'lime';
        break;
      case 39:
        this.txtcolor = 'royalblue';
        break;
      case 40:
        this.txtcolor = 'darkorange';
        break;
      default:
        this.txtcolor = this.couleurInitiale;
        break;
    }
  }

}
