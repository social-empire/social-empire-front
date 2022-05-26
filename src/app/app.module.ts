import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {StartPageModule} from './components/start-page/start-page.module';
import {InfoPageModule} from './components/info-page/info-page.module';

import {AppComponent} from './app.component';
import {StartPageComponent} from './components/start-page/start-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartPageModule,
    InfoPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}