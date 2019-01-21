import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private rendera: Renderer2) { }
@HostBinding('style.backgroundColor') backgroundColor: string = 'yellow';
  ngOnInit(){
    // this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
@HostListener('mouseenter') mouseover(eventData: Event){
  // this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  this.backgroundColor = 'blue';
}
@HostListener('mouseleave') mouseleave(eventData: Event){
  // this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  this.backgroundColor = 'green';
}
}
