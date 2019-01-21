import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private elRef: ElementRef, private rendera: Renderer2) { }
  @Input() deafultColor: string = 'yellow';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = 'yellow';
  ngOnInit(){
    this.backgroundColor = this.deafultColor;
    // this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }
  @HostListener('mouseenter') mouseover(eventData: Event){
  // this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  this.backgroundColor = this.highlightColor;
}
  @HostListener('mouseleave') mouseleave(eventData: Event){
  // this.rendera.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
  this.backgroundColor = this.deafultColor;
}
}
