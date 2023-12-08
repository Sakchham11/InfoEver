import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContainerComponent } from './main-container/main-container.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path : "",
    pathMatch : 'full',
    redirectTo : "main-container"
  },
  {
    path : "main-container",
    component : MainContainerComponent,

    children :[
      {
        path : "",
        pathMatch : 'full',
        redirectTo : "login"
      },
      {
        path : "login",
        component : LoginComponent
      },
      {
        path : "register",
        component : RegisterComponent
      }

    ]
  },
  {
    path : "**",
    component :PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
