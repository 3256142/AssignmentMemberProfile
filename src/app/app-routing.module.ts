import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component'
import { MemberProfileComponent } from './member-profile/member-profile.component'


const routes: Routes = [
  {path: 'pmember/:memberName', component: MemberListComponent },
  {path: '', component: MemberProfileComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
