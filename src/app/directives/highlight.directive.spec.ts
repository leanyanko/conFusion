import { HighlightDirective } from './highlight.directive';
import { ElementRef, Renderer2 } from '@angular/core';


describe('HighlightDirective', () => {
  it('should create an instance', () => {
    // const directive = new HighlightDirective();
    // expect(directive).toBeTruthy();
    let el: ElementRef;
let renderer: Renderer2;
    const directive = new HighlightDirective(el, renderer);

  });
});
