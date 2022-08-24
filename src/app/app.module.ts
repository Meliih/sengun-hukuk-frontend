import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { AccountService } from './services/account.service';
import { CasesComponent } from './case/cases/cases.component';



@NgModule({
  declarations: [	
    AppComponent,
    NavComponent,
    LoginComponent,
    SidebarComponent,
    CasesComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
