import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  idUser: number;
  user: any = {
    userName: "",
    userAddress: ""
  }
  constructor(public router: Router, private service: UserService, private actRoute: ActivatedRoute) {
    // debugger
    this.idUser = parseInt(this.actRoute.snapshot.params.id);
    this.getDataById(this.idUser);
  }

  ngOnInit(): void {
  
  }

  back() {
    this.router.navigateByUrl('/')
  }
  getDataById(id) {
    this.service.detailData(id)
      .then(res => {
        this.user = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  updateData() {
    debugger
    this.service.updateData(this.idUser, this.user)
      .then(res => {
        this.user = res;
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
}
