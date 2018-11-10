import { Directive,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appShowdetailDirective]'
})
export class ShowdetailDirectiveDirective {
   
  
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
    @HostListener('click') onclick ()
    {
      let target=this.el.nativeElement;
      let modal_target=document.querySelector(".modal");
      let modal_title=document.querySelector("#title").children[1];
      let modal_content=document.querySelector("#content").children[1];
      let modal_date=document.querySelector("#date").children[1];
      let modal_author=document.querySelector("#author").children[1];
      this.renderer.setStyle(modal_target,'display', 'block');
      console.log(target)
      this.renderer.setAttribute(target,'id','target');
     // modal_title.nodeValue=target.previousSibling.children[0].innerText;
      this.renderer.setProperty(modal_title,'value',target.previousSibling.children[0].innerText);
      this.renderer.setProperty(modal_content,'value',target.innerText);
      this.renderer.setProperty(modal_date,'value',target.nextSibling.children[0].innerText);
      this.renderer.setProperty(modal_author,'value',target.nextSibling.children[1].innerText);
    }

}
