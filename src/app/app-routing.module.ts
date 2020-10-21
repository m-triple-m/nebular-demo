import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path : 'home', component: HomeComponent},
  { path : 'browse', component: BrowseComponent},
  { path : 'signup', component: SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
