import { Component, OnInit } from '@angular/core';
import { APIserviceService } from './../apiservice.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private data : APIserviceService) { }


  ngOnInit() {
    
  }

  Remove(id){
    for (var i = 0; i < this.data.UserList.length; i++){
      if (id == this.data.UserList[i]['Id']) {
        this.data.UserList.splice(i, 1);
      }
    }
    
  }

}