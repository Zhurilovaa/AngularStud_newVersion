import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { TableStudComponent } from "./tableStud.component";
import { FormStudComponent } from "./formStud/formStud.component";

import { StudClassDirective, AnimDivDirective } from "./studClass.directive";
import { NiceDatePipe, NiceNamePipe } from "./pipes";

import { StoreModule } from "@ngrx/store";
//import { StudService } from "../services/localserv.service";

@NgModule({
  declarations: [    
    FormStudComponent,
    TableStudComponent,
    NiceDatePipe,
    NiceNamePipe,
    AnimDivDirective,
    StudClassDirective,    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //StoreModule.forRoot(studReducer),
  ],
  providers: [/*StudService*/],
  exports: [
    FormStudComponent,
    TableStudComponent,
  ]

})
export class TableStudModule { }
