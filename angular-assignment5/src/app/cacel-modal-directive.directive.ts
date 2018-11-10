import { Directive,ElementRef,Renderer2,HostListener } from '@angular/core';

@Directive({
  selector: '[appCacelModalDirective]'
})
export class CacelModalDirectiveDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
    @HostListener('click') onclick ()
    {
      
      
      let modal_target=document.querySelector(".modal");
      
      this.renderer.setStyle(modal_target,'display', 'none');
      
    }

}
