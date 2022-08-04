import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private auth: AuthService) { }

  ngOnInit(): void {
  }

  onlogout(){
    localStorage.removeItem('jwt');
    this.router.navigate(['login']);
  }
  switch(){
    if (!this.auth.isAuthenticated()) {
      return false;
    }
    return true;
  }
  }
