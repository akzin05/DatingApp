import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(private authService: AuthService) { }

  // tslint:disable-next-line: typedef
  ngOnInit() {
  }

 // tslint:disable-next-line: typedef
 login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in Successfully');
      console.log('Welcome ' + this.model.username);
    }, error => {
      console.log('Failed to login');
    });
 }
loggedIn(){
  const token = localStorage.getItem('token');
  return !!token;  // !! is like boolean if token have data return true, if not return false
}

logout(){
  localStorage.removeItem('token');
  console.log('logged out');
}
}
