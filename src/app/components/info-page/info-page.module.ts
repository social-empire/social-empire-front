import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AboutComponent} from './about/about.component';
import {FaqComponent} from './faq/faq.component';
import {ContactsComponent} from './contacts/contacts.component';





@NgModule({
  exports: [
    AboutComponent,
    FaqComponent,
    ContactsComponent
  ],
  declarations: [
    AboutComponent,
    FaqComponent,
    ContactsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InfoPageModule {}