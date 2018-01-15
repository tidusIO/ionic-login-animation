import { Directive, ElementRef, Input, Renderer2, HostBinding, OnChanges, SimpleChange } from '@angular/core';

@Directive({
  selector: '[button-effect]' // Attribute selector
})
export class ButtonEffectDirective implements OnChanges {
  constructor(
    private _el: ElementRef,
    private _renderer: Renderer2
  ) {
    this._renderer.addClass(this._el.nativeElement, 'button-effect-directive');
  }

  @HostBinding('class.button-effect-directive--processing') private isprocessing: boolean;
  @HostBinding('class.button-effect-directive--successful') private issuccessful: boolean;

  @Input('button-effect') status: string;

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    if(changes.status) {
      if(changes.status.currentValue === 'isprocessing') {
        this.isprocessing = true;
      } else if(changes.status.currentValue === 'issuccessful') {
        this.issuccessful = true;
      } else if(changes.status.currentValue === '') {
        this.isprocessing = false;
        this.issuccessful = false;
      }
    }
  }

}
