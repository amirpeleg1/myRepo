import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/service";
import {User} from "./components/models/models";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user!: User;

  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    this.service.userSubject.subscribe((user: User) => this.user = user);
  }

  logOut(): void{
    this.service.logout();
  }
}
