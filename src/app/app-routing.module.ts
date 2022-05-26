import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {StartPageComponent} from './components/start-page/start-page.component';
import {AboutComponent} from './components/info-page/about/about.component';
import {FaqComponent} from './components/info-page/faq/faq.component';
import {ContactsComponent} from './components/info-page/contacts/contacts.component';

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
        children: []
      },

      {
        path: 'about',
        component: AboutComponent,
        children: []
      },

      {
        path: 'faq',
        component: FaqComponent,
        children: []
      },

      {
        path: 'contacts',
        component: ContactsComponent,
        children: []
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}