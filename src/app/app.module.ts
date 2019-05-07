import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InPlaceEditorModule } from '@syncfusion/ej2-angular-inplace-editor';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InPlaceEditorModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
