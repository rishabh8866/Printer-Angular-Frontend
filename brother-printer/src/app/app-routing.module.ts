import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ScanToEmailComponent} from "./scan-to-email/scan-to-email.component";

const routes: Routes = [
  {path: '', redirectTo:'scanToEmail', pathMatch: 'full'},
  {path: 'scanToEmail', component: ScanToEmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
