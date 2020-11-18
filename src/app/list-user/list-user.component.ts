import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  
  users: any = [

  ];
  

  constructor(public router: Router, private service: UserService) { }

  ngOnInit(): void {
    this.getData();
  }
  formDetail(id){
    this.router.navigateByUrl('/detail/'+id);
  }

  create(){
    this.router.navigateByUrl('/create')
  }
  getData() {
    this.service.getData()
      .then(res => {
        this.users = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  deleteData(id){
    this.service.deleteData(id)
    .then(res => {
      window.location.reload()
      this.users = res;
    }).catch(e => {
      window.alert('Connection Error !');
    })
  }
  
}
