import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { TableStudModule } from "./tableStudmodul/tableStud.module";
import { NotFoundComponent } from "./not-found.component";
import { routing } from "./app.routing";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    TableStudModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
