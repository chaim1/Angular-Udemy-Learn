import { Directive, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private rendera: Renderer2) { }

  ngOnInit(){
    this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

}
