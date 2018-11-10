import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Injector } from "@angular/core";
import { by } from "protractor";

@Component({
  selector: "app-app-item-list",
  templateUrl: "./app-item-list.component.html",
  styleUrls: ["./app-item-list.component.scss"]
})
export class AppItemListComponent implements OnInit {
  requestURL = "https://api.myjson.com/bins/dh0wu";
  //requestURL='https://api.github.com/users/seeschweiler';
  
  id = 0;
  update = new Map();
  UserData: UserResponse;
  show_modal($scope):void
  {
    
  }
  del():void{
    //document.getElementById("#todo_item_div").innerText="okkk";
    console.log("ok");
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
