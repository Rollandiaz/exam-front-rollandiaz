import { Component, OnInit } from '@angular/core';
import { APIserviceService } from './../apiservice.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {




  constructor(private data:APIserviceService) { }


  ngOnInit() {
  }
}