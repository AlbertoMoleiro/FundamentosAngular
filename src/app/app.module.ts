import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { QueenComponent } from './queen/queen.component';
import { EmetComponent } from './emet/emet.component';
import { TsTypesComponent } from './ts-types/ts-types.component';
import { FundamentosComponent } from './fundamentos/fundamentos.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    QueenComponent,
    EmetComponent,
    TsTypesComponent,
    FundamentosComponent,
   ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
