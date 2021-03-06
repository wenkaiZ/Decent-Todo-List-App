import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Injector } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppAddBarComponent } from './app-add-bar/app-add-bar.component';
import { AppItemListComponent } from './app-item-list/app-item-list.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { DeleteDirectiveDirective } from './delete-directive.directive';
import { FinishDirectiveDirective } from './finish-directive.directive';
import { CacelModalDirectiveDirective } from './cacel-modal-directive.directive';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AppAddBarComponent,
    AppItemListComponent,
    DeleteDirectiveDirective,
    FinishDirectiveDirective,
    CacelModalDirectiveDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  username="Group: CZ";
application_name="ToDoList";
}
