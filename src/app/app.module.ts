import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartModule} from './barchart/barchart.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BarchartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
