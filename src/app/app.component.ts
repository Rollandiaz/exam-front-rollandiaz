import { Component } from '@angular/core';
import { APIserviceService } from "./apiservice.service";
import { Http, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
