import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppDevelopmentModule } from './app-development/app-development.module';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppDevelopmentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
