import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { APIserviceService} from './apiservice.service';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path : '',component : UserListComponent},
      {path : 'add-user',component : AddUserComponent}
    ])

  ],
  providers: [APIserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }



