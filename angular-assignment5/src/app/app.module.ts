import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAddBarComponent } from './app-add-bar/app-add-bar.component';
import { AppItemListComponent } from './app-item-list/app-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppAddBarComponent,
    AppItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  username="Group: CZ";
application_name="ToDoList";
}
