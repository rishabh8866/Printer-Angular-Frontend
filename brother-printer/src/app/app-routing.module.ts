import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScanToEmailComponent} from "./scan-to-email/scan-to-email.component";
import {PasswordComponent} from "./password/password.component";
import {MultiSelectionComponent} from "./multi-selection/multi-selection.component";

const routes: Routes = [
  {path: '', redirectTo:'scanToEmail', pathMatch: 'full'},
  {path: 'scanToEmail', component: ScanToEmailComponent},
  {path: 'password', component: PasswordComponent},
  {path: 'multiSelection', component: MultiSelectionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
