import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardSearchModuleComponent } from './card-search-module/card-search-module.component';
import { CardSearchService } from './service/card-search.service';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';

const routes: Routes = [
  {path: '', component: CardSearchModuleComponent },
  {path: 'registration', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CardSearchService]
})
export class AppRoutingModule { }
