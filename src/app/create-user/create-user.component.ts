import { UserService } from './../service/user.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
   user:any = {
    userName : "",
    userAddress: ""
  }
  constructor(public router: Router,private service: UserService) { }

  ngOnInit(): void {
      
  }

  back(){
    this.router.navigateByUrl('/')
  }
  createUser(){
    debugger
    this.service.createData(this.user) .then(res => {
      res = this.user;
      this.router.navigateByUrl('/')
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
}
