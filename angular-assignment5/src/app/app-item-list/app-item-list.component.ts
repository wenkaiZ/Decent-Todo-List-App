import { Component, OnInit, Injectable, Renderer} from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-app-item-list",
  templateUrl: "./app-item-list.component.html",
  styleUrls: ["./app-item-list.component.scss"]
})
export class AppItemListComponent implements OnInit {
  requestURL = "../../assets/json/initialize.json";
  //requestURL='https://api.github.com/users/seeschweiler';
  itemTitle: string;
  itemContent: string;
  itemAuthor: string;
  itemDate: string;
  modal_:HTMLElement;
  select:HTMLElement;
  id :number= 0;
  update = new Map();
  UserData: UserResponse;
  delete_mark:boolean=true;
  show_modal(event):void
  {
    
  }
  finish(event):void{

  }
  del():void{
    //document.getElementById("#todo_item_div").innerText="okkk";
    
    this.delete_mark=false;
  }
  getTarget(event){
    this.select = event.target.parentElement;
    console.log(this.select);
    this.modal_ = document.querySelector('.modal');
    this.modal_.style.display = "block";
    this.itemTitle = this.select.getElementsByClassName("title")[0].innerHTML;
    this.itemContent = this.select.getElementsByClassName("content")[0].innerHTML;
    this.itemAuthor = this.select.getElementsByClassName("author")[0].innerHTML;
    this.itemDate = this.select.getElementsByClassName("date")[0].innerHTML;
  }
  saveBtn(){
    let temp = this;
    this.modal_ = document.querySelector('.modal');
    this.renderer.listen(document.querySelector('.save'), 'click', (event)=>{
        //get from modal and store the change back to selected todo item.
        temp.select.getElementsByClassName("title")[0].innerHTML = temp.itemTitle;
        temp.select.getElementsByClassName("content")[0].innerHTML = temp.itemContent;
        console.log(temp.select.getElementsByClassName("title")[0].innerHTML);
        temp.select.getElementsByClassName("author")[0].innerHTML = temp.itemAuthor;
        temp.select.getElementsByClassName("date")[0].innerHTML = temp.itemDate;
        this.modal_.style.display = 'none';
    })
  }
  constructor(private http: HttpClient, private renderer: Renderer) {}
  ngOnInit() {
    this.http.get<UserResponse>(this.requestURL).subscribe(data => {
      this.UserData = data["list"];

      
    });
    
  }
}
interface UserResponse {
  title: string;
  todo_item: string;
  author: string;
  date: Date;
}
