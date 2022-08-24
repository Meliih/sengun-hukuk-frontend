import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CasesComponent } from './case/cases/cases.component';
import { IcraComponent } from './icra/icra/icra.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'cases', component : CasesComponent},
  {path : 'icra', component : IcraComponent},
  {path : 'login',component : LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
