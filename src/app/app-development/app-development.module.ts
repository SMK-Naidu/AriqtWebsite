import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppDevelopmentRoutingModule } from './app-development-routing.module';
import { AppDevelopmentComponent } from './app-development.component';


@NgModule({
  declarations: [
    AppDevelopmentComponent
  ],
  imports: [
    CommonModule,
    AppDevelopmentRoutingModule
  ],
  exports:[AppDevelopmentComponent]
})
export class AppDevelopmentModule { }
