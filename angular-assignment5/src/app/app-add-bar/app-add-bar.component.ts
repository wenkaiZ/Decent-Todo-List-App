import { AppComponent } from './../app.component';
import { TodoItem } from './../todoItem';
import { Component, OnInit, ViewChild} from '@angular/core';
import { ElementRef, Renderer } from '@angular/core';

@Component({
  selector: 'app-app-add-bar',
  templateUrl: './app-add-bar.component.html',
  styleUrls: ['./app-add-bar.component.scss']
})
export class AppAddBarComponent implements OnInit {

  // @ViewChild('testInput') testIput1;
  // @ViewChild('testInput') testIput2;
  newTodoItem: TodoItem;
  newTodoItem_div: HTMLElement;
  modal_: HTMLElement;
  addBtn = "Add Task";
  f = "Finished";
  uf = "Unfinished";
  constructor(private  el: ElementRef,private renderer: Renderer) { }


  createNewTodoItem(){
    this.showModal();
    //test getting intput
    //console.log(this.testIput1.nativeElement);
    console.log(this);
  }
  showModal() {
    
    //var items = document.getElementsByClassName("item");
    this.modal_ = document.querySelector('.modal_2');
    document.querySelector("#title_2").children[1].value = "";
    document.querySelector("#content_2").children[1].value = "";
    document.querySelector("#author_2").children[1].setAttribute('value',document.getElementById('username').innerText);
    console.log( document.querySelector("#author_2").children[1].getAttribute("value"));
    document.querySelector("#date_2").children[1].setAttribute('value',new Date().toLocaleDateString());
    this.modal_.style.display = 'block';
    
    //click to close model
    let temp = this;//
    let cancel = this.modal_.querySelector('.cancel_2');
    this.renderer.listen(cancel, 'click', function(){
      //close model
      console.log(temp);
      temp.modal_.style.display = 'none';
  });
    //click to save todo item
    let save=this.modal_.querySelector(".save_2");
      console.log(save);
      let saveParent = save.parentElement;

      saveParent.removeChild(save);
      console.log(saveParent.childElementCount);
      let newSaveBtn = document.createElement('button');
      newSaveBtn.classList.add("fr_2");
      newSaveBtn.classList.add("save_2");
      newSaveBtn.innerText = "save";
      saveParent.appendChild(newSaveBtn);
    this.renderer.listen(newSaveBtn, 'click', function getInput(){
      //用getAttribute('value')get不到input里的内容
      let newTitle=document.querySelector("#title_2").children[1].value;
      // console.log(document.querySelector("#title").children[1].value);
      // console.log(document.querySelector("#author").children[1].getAttribute('value'));
      let newContent=document.querySelector("#content_2").children[1].value;
      let newAuthor=document.querySelector("#author_2").children[1].value;
      let newDate=document.querySelector("#date_2").children[1].value;
      if(newTitle===''){
          alert('You should write something in title area!');
      }else if(newContent===''){
          alert('You should write something in content area!');
      }else{
          if(newAuthor === ''){
              newAuthor = document.getElementById('username').innerText;
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
          console.log(temp);
          temp.newTodoItem = new TodoItem();
          temp.newTodoItem.title = newTitle;
          temp.newTodoItem.author = newAuthor;
          temp.newTodoItem.content = newContent;
          temp.newTodoItem.date = newDate;
          
          temp.modal_ = document.querySelector('.modal_2');
          temp.modal_.style.display = 'none';
          temp.createNewTodoItem_div();
      }
      
  });
}
//get the input from model
  

createNewTodoItem_div(){
  //create elements
  console.log(this);
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
  this.newTodoItem_div.addEventListener('click',($event)=>{
      let select = $event.srcElement;
      while(!(select.classList.contains('item'))){
          select = select.parentElement;
      }
      console.log(select);
      //get from the todo item
      let title= select.getElementsByClassName("title")[0].innerHTML;
      let content=select.getElementsByClassName("content")[0].innerHTML;
      let author=select.getElementsByClassName("author")[0].innerHTML;
      let date=select.getElementsByClassName("date")[0].innerHTML;

      console.log(title,content,author,date);
      //store in modal
      document.querySelector("#title_2").children[1].setAttribute('value', title);
      document.querySelector("#content_2").children[1].setAttribute('value', content);
      document.querySelector("#author_2").children[1].setAttribute('value', author);
      document.querySelector("#date_2").children[1].setAttribute('value', date);
      this.modal_.style.display = 'block';

      let save=this.modal_.querySelector(".save_2");
      console.log(save);
      let saveParent = save.parentElement;

      saveParent.removeChild(save);
      let newSaveBtn = document.createElement('button');
      newSaveBtn.classList.add("fr_2");
      newSaveBtn.classList.add("save_2");
      newSaveBtn.innerText = "save";
      saveParent.appendChild(newSaveBtn);
      this.renderer.listen(newSaveBtn, 'click', ()=>{
        console.log(select);
          //get from modal and store the change back to selected todo item.
          select.getElementsByClassName("title")[0].innerHTML = document.querySelector("#title_2").children[1].value;
          select.getElementsByClassName("content")[0].innerHTML = document.querySelector("#content_2").children[1].value;
          console.log(select.getElementsByClassName("title")[0].innerHTML);
          select.getElementsByClassName("author")[0].innerHTML = document.querySelector("#author_2").children[1].value;
          select.getElementsByClassName("date")[0].innerHTML = document.querySelector("#date_2").children[1].value;
          this.modal_.style.display = 'none';
      });
  },false);
  document.getElementById('todo_item_div').appendChild(this.newTodoItem_div);
}
  ngOnInit() {
  }

}


