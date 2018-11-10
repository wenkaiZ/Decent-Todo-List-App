import { TodoItem } from './../todoItem';
import { Component, OnInit } from '@angular/core';
import{ ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-app-add-bar',
  templateUrl: './app-add-bar.component.html',
  styleUrls: ['./app-add-bar.component.scss']
})
export class AppAddBarComponent implements OnInit {

  newTodoItem: TodoItem;
  newTodoItem_div: HTMLElement;
  modal_: HTMLElement;
  constructor(private  el: ElementRef,private renderer: Renderer) { }


  createNewTodoItem(){
    this.showModal();
    console.log(this);
  }
  showModal() {
    //var items = document.getElementsByClassName("item");
    this.modal_ = document.querySelector('.modal');
    document.querySelector("#title").children[1].nodeValue='';
    document.querySelector("#content").children[1].nodeValue='';
    document.querySelector("#author").children[1].nodeValue=document.getElementById('username').innerText;
    document.querySelector("#date").children[1].nodeValue=new Date().toLocaleDateString();
    this.modal_.style.display = 'block';
    
    //click to close model
    let cancel = this.modal_.querySelector('.cancel');
    this.renderer.listen(cancel, 'click', function(){
      //close model
      this.modal_.style.display = 'none';
  });
    //click to save todo item
    let save=this.modal_.querySelector(".save");
    this.renderer.listen(save, 'click', this.getInput);
}
//get the input from model
  getInput(){
    let newTitle=document.querySelector("#title").children[1].nodeValue;
    let newContent=document.querySelector("#content").children[1].nodeValue;
    let newAuthor=document.querySelector("#author").children[1].nodeValue;
    let newDate=document.querySelector("#date").children[1].nodeValue;
    if(newTitle===''){
        alert('You should write something in title area!');
    }else if(newContent===''){
        alert('You should write something in content area!');
    }else{
        if(newAuthor === ''){
            newAuthor = document.getElementById('username').nodeValue;
        }
        if(newDate === ''){
            newDate = new Date().toLocaleDateString();
        }
        
        // this.newTodoItem = {
    
        //   title: newTitle,
        //   content: newContent,
        //   author: newAuthor,
        //   date: newDate,
          
        // }
        console.log(this);
        this.newTodoItem = new TodoItem();
        this.newTodoItem.title = newTitle;
        this.newTodoItem.author = newAuthor;
        this.newTodoItem.content = newContent;
        this.newTodoItem.date = newDate;
        
        this.modal_ = document.querySelector('.modal');
        this.modal_.style.display = 'none';
        this.createNewTodoItem_div();
    }
    
}

createNewTodoItem_div(){
  //create elements
  this.newTodoItem_div = document.createElement('div');
  this.newTodoItem_div.classList.add("item");

  let title_div = document.createElement("div");
  title_div.classList.add("title_div");
  let title = document.createElement("div");
  title.classList.add("title");
  let delete_div = document.createElement("div");
  delete_div.classList.add("delete");
  let content_div = document.createElement("div");
  content_div.classList.add("content");
  let end_div = document.createElement("div");
  end_div.classList.add("end");
  let author_div = document.createElement("div");
  author_div.classList.add("author");
  let date_div = document.createElement("div");
  date_div.classList.add("date");

  title.innerText = this.newTodoItem.title+"";
  content_div.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+this.newTodoItem.content;
  author_div.innerText= this.newTodoItem.author+"";
  date_div.innerText= this.newTodoItem.date+"";

  //newTodoItem_div.setAttribute("id", "todo_item" + ++id);
  title_div.appendChild(delete_div);
  title_div.appendChild(title);
  end_div.appendChild(author_div);
  end_div.appendChild(date_div);
  this.newTodoItem_div.appendChild(title_div);
  this.newTodoItem_div.appendChild(content_div);
  this.newTodoItem_div.appendChild(end_div);

  //add close icon
  let span=document.createElement("span");
  let txt = document.createTextNode("\u2716");
  span.appendChild(txt);
  delete_div.appendChild(span);

  //add check function
  title.addEventListener('click',(event)=>{
      let select = event.srcElement.parentElement;
      console.log(select);
      if(!select.getElementsByTagName("div")[1].classList.contains("finish_mark"))
      {
          select.getElementsByClassName("title")[0].classList.add("finish_mark");
          select.getElementsByClassName("delete")[0].classList.add("finish_color");
      }
      else{
          select.getElementsByClassName("title")[0].classList.remove("finish_mark");
          select.getElementsByClassName("delete")[0].classList.remove("finish_color");
      }
      event.stopPropagation();
  },false);

  //add close function
  delete_div.addEventListener('click',(event)=>{
      var select = event.srcElement.parentElement.parentElement.parentElement;
      console.log(select);
      document.getElementById('todo_item_div').removeChild(select);
      event.stopPropagation();
  },false);

  //show in model
  this.newTodoItem_div.addEventListener('click',(event)=>{
      let select = event.srcElement;
      while(!(select.classList.contains('item'))){
          select = select.parentElement;
      }
      console.log(select);
      //get from the todo item
      let title= select.getElementsByClassName("title")[0].nodeValue;
      let content=select.getElementsByClassName("content")[0].nodeValue;
      let author=select.getElementsByClassName("author")[0].nodeValue;
      let date=select.getElementsByClassName("date")[0].nodeValue;

      //store in modal
      document.querySelector("#title").children[1].nodeValue=title;
      document.querySelector("#content").children[1].nodeValue=content;
      document.querySelector("#author").children[1].nodeValue=author;
      document.querySelector("#date").children[1].nodeValue=date;
      this.modal_.style.display = 'block';

      let save=this.modal_.querySelector(".save");
      this.renderer.listen(save, 'click', ()=>{
          //get from modal and store the change back to selected todo item.
          select.getElementsByClassName("title")[0].nodeValue = document.querySelector("#title").children[1].nodeValue;
          select.getElementsByClassName("content")[0].nodeValue = document.querySelector("#content").children[1].nodeValue;
          select.getElementsByClassName("author")[0].nodeValue = document.querySelector("#author").children[1].nodeValue;
          select.getElementsByClassName("date")[0].nodeValue = document.querySelector("#date").children[1].nodeValue;
          this.modal_.style.display = 'none';
      });
  },false);
  document.getElementById('todo_item_div').appendChild(this.newTodoItem_div);
}
  ngOnInit() {
  }

}


