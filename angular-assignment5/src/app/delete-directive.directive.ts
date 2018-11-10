import { Directive ,ElementRef,Renderer2} from '@angular/core';
import {HostListener} from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
@Directive({
  selector: '[appDeleteDirective]'
})
export class DeleteDirectiveDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
  @HostListener('click') onclick()
  {
    let target=this.el.nativeElement.parentNode.parentNode;
    console.log(target);
    this.renderer.removeChild(target.parentNode,target);
  }
  
}
