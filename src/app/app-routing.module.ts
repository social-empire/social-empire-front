import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {StartPageComponent} from './components/start-page/start-page.component';
import {ResetPasswordComponent} from './components/start-page/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'greetings',
        pathMatch: 'full'
      },

      {
        path: 'greetings',
        component: StartPageComponent,
        children: [
          {
            path: 'resetpassword',
            component: ResetPasswordComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}