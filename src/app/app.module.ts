import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StartPageComponent} from './components/start-page/start-page.component';
import {StartPageModule} from './components/start-page/start-page.module';


@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}