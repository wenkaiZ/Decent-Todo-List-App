import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-item-list',
  templateUrl: './app-item-list.component.html',
  styleUrls: ['./app-item-list.component.scss']
})
export class AppItemListComponent implements OnInit {
  requestURL = "http://127.0.0.1:8080/initialize.json";
  list_content = document.getElementById("todo_item_div");
   id = 0;
   update=new Map();
  constructor() { }
   
 readJsonFile(file, callback):void {
  var request = new XMLHttpRequest();
  request.open("GET", this.requestURL, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  //request.responseType='text';
  //设置XHR访问JSON格式数据，然后发送请求
  //deal with the server data
  request.send();
  request.onreadystatechange = function() {
    if (
      request.readyState == 4 &&
      (request.status == 200 || request.status == 304)
    ) {
      // WARNING! Might be injecting a malicious script!
     // alert(request.responseText);
      callback(request.responseText);
    }
  };  
}

 
 

 showcontent(jsonObj):void {
  
  let content = jsonObj["list"];
  
  
  for (let i = 0; i < content.length; i++) {
    
    let item = document.createElement("div");
    item.classList.add("item");
   
  let title_div=document.createElement("div");
  title_div.classList.add("title_div");
  let title=document.createElement("div");
  title.classList.add("title");
  let deletediv=document.createElement("div");
  deletediv.classList.add("delete");
  let contentdiv=document.createElement("div");
  contentdiv.classList.add("content");
  let end=document.createElement("div");
  end.classList.add("end");
  let author=document.createElement("div");
  author.classList.add("author");
  let date=document.createElement("div");
  date.classList.add("date");
    title.innerText=content[i].title;
    contentdiv.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp;"+content[i].todo_item;
    author.innerText= content[i].author;

  let date_split=new Date(content[i].date);
  let dates=date_split.toDateString().split(" ");
  date.innerText= dates[0]+" "+dates[1];

    item.setAttribute("id", "todo_item" + ++this.id);
    title_div.appendChild(deletediv);
    title_div.appendChild(title);
    end.appendChild(author);
    end.appendChild(date);
    item.appendChild(title_div);
    item.appendChild(contentdiv);
    item.appendChild(end);
    this.list_content.appendChild(item);
  }
  
 //this.AddDeleteandModal();
 //this.check_item();
 //this.show_modal();
 //this.delete_action();
}
 check_item():void
{
  var divs=document.getElementsByClassName("title_div");
  for(let i=0;i<divs.length;i++)
  {
    divs[i].addEventListener("click",function(){
      if(!this.getElementsByTagName("div")[1].classList.contains("finish_mark"))
      {
        this.getElementsByClassName("title")[0].classList.add("finish_mark");
      this.getElementsByClassName("delete")[0].classList.add("finish_color");
      
      }
      else{
        this.getElementsByClassName("title")[0].classList.remove("finish_mark");
        this.getElementsByClassName("delete")[0].classList.remove("finish_color");
      }
    });
    
      
    
  }
}
AddDeleteandModal():void {
  var divs = document.getElementsByClassName("item");
  for (let i = 0; i < divs.length; i++) {
    var deletediv=divs[i].getElementsByClassName("delete")[0];
    var span=document.createElement("span");
    var txt = document.createTextNode("\u2716");
    
    span.appendChild(txt);
    deletediv.appendChild(span);
    

    /**for show the modal */
  }
}
// fulfil delete action for the delete icon
 delete_action():void {
  var closes = document.getElementsByClassName("title_div");
  for (let i = 0; i < closes.length; i++) {
    closes[i].children[0].addEventListener("click",function(event) {
      var item = this.parentElement.parentElement;
      //liparent.style.display="none";
      
      //console.log(closes[i].nextSibling);

      document.getElementById("todo_item_div").removeChild(item);
      event.stopPropagation();
    });
  }
}

// show modal
//  show_modal():void {
//   var items = document.getElementsByClassName("item");
//   var modal = document.querySelector('.modal');
//   var gz=null;
//   for (let i = 0; i < items.length; i++) {
    
// 		items[i].addEventListener("click",function(){
// 			// 找到自己点击的那个垃圾桶的盖子
//      let title= this.getElementsByClassName("title")[0].innerText;
//      let content=this.getElementsByClassName("content")[0].innerText;
//      let author=this.getElementsByClassName("author")[0].innerText;
//      let date=this.getElementsByClassName("date")[0].innerText;

//      //console.log(title+content+author+date);
//     //gz.style.transform = 'rotate(-20deg) translateX(-2px)';
//     //  document.querySelector("#title").children[1].value=title;
//     //  document.querySelector("#content").children[1].value=content;
//     //  document.querySelector("#author").children[1].value=author;
//     //  document.querySelector("#date").children[1].value=date;
//       modal.style.display = 'block';
//       this.update.id=this.id;
//      // console.log(tupdate);
// 		});
//   }
  // 点击取消按钮关闭模态框
// 	var cancel = modal.querySelector('.cancel');
//   cancel.addEventListener("click",function(){
// 		// 关闭模态框
//     modal.style.display = 'none';
//     delete this.update.id;
    
// 		// 关闭盖子
// 	//	gz.style.transform = 'none';
// 	});
// // add save btn
// var save=modal.querySelector(".save");
//   save.addEventListener("click",function()
  
//   {
//     let title=document.querySelector("#title").children[1].value;
//     let content=document.querySelector("#content").children[1].value;
//     let author=document.querySelector("#author").children[1].value;
//     let date=document.querySelector("#date").children[1].value;
//     let item=document.getElementById(update.id);
    
//     item.querySelector(".title").innerText=title;
//     item.querySelector(".content").innerHTML=content;
//     item.querySelector(".author").innerText=author;
//     item.querySelector(".date").innerText=date;
//     modal.style.display="none";
//     delete this.update.id;
//   });
// }
  ngOnInit() {
    this.readJsonFile(this.requestURL, function(text) {
      //   console.log(text);
      //   //console.log(JSON.parse(text));
       
         this.showcontent(JSON.parse(text));
       });
  }

}



