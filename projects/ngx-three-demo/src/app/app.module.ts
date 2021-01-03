import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  Box,
  SimpleExampleComponent,
} from './simple-example/simple-example.component';
import { NgxThreeModule } from 'projects/ngx-three/src/public-api';

@NgModule({
  declarations: [AppComponent, SimpleExampleComponent, Box],
  imports: [BrowserModule, AppRoutingModule, NgxThreeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
