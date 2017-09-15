import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http"; 
import { Observable } from "rxjs/Rx";


@Injectable()
export class APIserviceService {

  UserList: Object[]=[]
  Name: string;
  Email: string;
  Address: string;
  Phone:number;
  Company: string;

 
  constructor(private http:Http) { 
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .subscribe(
      result => {
        for (var i = 0; i < result.json().length; i++) {
          var user = result.json()[i];
          var UserObj = {
            'Id' : user.id,
            'Name' : user.name,
            'Email' : user.email,
            'Address' : user.address.street,
            'Phone' : user.phone,
            'Company' : user.company.name
          };
          this.UserList.push(UserObj);
        }
      },
      error => {console.log(error)}

    )}
   

    AddUser () : void {
      var id = this.UserList[this.UserList.length-1] ["id"] +1;
      var list = {"Id" : id +1, "Name" : this.Name, "Email": this.Email, "Address" : this.Address, "Phone" : this.Phone, "Company" : this.Company };

      this.UserList.push(list);
      console.log(this.UserList);
      
    }


  
}