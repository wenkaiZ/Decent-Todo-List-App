import { Component, OnInit, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Component({
  selector: "app-app-item-list",
  templateUrl: "./app-item-list.component.html",
  styleUrls: ["./app-item-list.component.scss"]
})
export class AppItemListComponent implements OnInit {
  requestURL = "../../assets/json/initialize.json";
  //requestURL='https://api.github.com/users/seeschweiler';
  
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
  
  constructor(private http: HttpClient) {}
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
