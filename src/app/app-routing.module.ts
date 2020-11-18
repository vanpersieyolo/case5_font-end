import { ListUserComponent } from './list-user/list-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { DetailUserComponent } from './detail-user/detail-user.component';

const routes: Routes = [
  {path: '', component:ListUserComponent},
  {path: 'create', component:CreateUserComponent},
  {path: 'detail/:id', component:DetailUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
