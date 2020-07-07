import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1ExampleComponent } from './comps/c1-example/c1-example.component';
import { C2OperatorComponent } from './comps/c2-operator/c2-operator.component';
import { MatModule } from './mat/mat.module';


@NgModule({
  declarations: [
    AppComponent,
    C1ExampleComponent,
    C2OperatorComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
