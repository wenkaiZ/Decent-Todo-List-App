import { Directive,ElementRef,Renderer2, HostListener} from '@angular/core';
import {HostBinding} from '@angular/core';
@Directive({
  selector: '[appFinishDirective]'
})
export class FinishDirectiveDirective {
  private visible: boolean = false;
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
    @HostListener('click') onclick ()
    {
      this.visible = !this.visible;
      let target=this.el.nativeElement;
        if (this.visible) {
          
         
          this.renderer.addClass(target,'finish_mark');
          this.renderer.addClass(target.nextSibling,"finish_color");
        }
        else{
          this.renderer.removeClass(target,'finish_mark');
          this.renderer.removeClass(target.nextSibling,"finish_color");
        }
    }

}
