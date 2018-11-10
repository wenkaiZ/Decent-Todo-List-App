import { Directive,ElementRef,Renderer2,HostListener} from '@angular/core';

@Directive({
  selector: '[appSaveModalDirective]'
})
export class SaveModalDirectiveDirective {

  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
    @HostListener('click') onclick ()
    {
      let target=document.querySelector("#target");
      let modal_target=document.querySelector(".modal");
      let modal_title=document.querySelector("#title").children[1].value;
      
      let modal_content=document.querySelector("#content").children[1].value;
      let modal_date=document.querySelector("#date").children[1].value;
      let modal_author=document.querySelector("#author").children[1].value;
      console.log(modal_title+modal_content+modal_date+modal_author);
      this.renderer.setStyle(modal_target,'display', 'none');
      target.innerText=modal_content;
      target.previousSibling.children[0].innerText=modal_title;
      target.nextSibling.children[0].innerText=modal_date;
      target.nextSibling.children[1].innerText=modal_author;
      this.renderer.removeAttribute(target,'id');
    }

}
