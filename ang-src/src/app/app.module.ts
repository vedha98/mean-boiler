import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import {AuthGuard} from './guards/auth.guard';
import { CKEditorModule } from 'ngx-ckeditor';
import { AllpostsComponent } from './components/allposts/allposts.component'
const appRoutes: Routes = [
{path:'',component:HomeComponent},
{path:'register',component:RegisterComponent},
{path:'dashboard',component:DashboardComponent, canActivate:[AuthGuard]},
{path:'login',component:LoginComponent},
{path:'validate',component:LoginComponent},
{path:'allposts',component:AllpostsComponent},
{path:'profile',component:ProfileComponent, canActivate:[AuthGuard]}
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    ProfileComponent,
    AllpostsComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CKEditorModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),

  ],
  providers: [ValidateService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
