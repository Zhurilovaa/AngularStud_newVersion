import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { TableStudComponent } from "./tableStud.component";
import { FormStudComponent } from "./formStud/formStud.component";
import { StudClassDirective, AnimDivDirective } from "./studClass.directive";
import { NiceDatePipe, NiceNamePipe } from "./pipes";

@NgModule({
  declarations: [
    AnimDivDirective,
    FormStudComponent,
    NiceDatePipe,
    NiceNamePipe,
    StudClassDirective,
    TableStudComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  exports: [
    FormStudComponent,
    TableStudComponent,
  ]

})
export class TableStudModule { }
