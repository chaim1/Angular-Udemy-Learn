import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private route: Router, private authService: AuthService) { }

  ngOnInit() {
  }
  onLoadServer(id: number){
    this.route.navigate(['/servers', id , 'edit'], {queryParams: {allowoEdit: '1'}, fragment: 'loding'} );
  }
  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
  }
}
