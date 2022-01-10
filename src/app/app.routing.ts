import { Routes, RouterModule } from "@angular/router";
import { NotFoundComponent } from "./not-found.component";
import { MarkGuard } from "./mark.guard";
import { TableStudComponent } from "./tableStudmodul/tableStud.component";

const routes: Routes = [
    { path: "", redirectTo: "stud/offline", pathMatch: "full" },
    { path: "stud/online", component: TableStudComponent },
    { path: "stud/offline", component: TableStudComponent },
    { path: "add/online", component: TableStudComponent },
    { path: "add/offline", component: TableStudComponent },
    { path: "edit/:id/online", component: TableStudComponent, canActivate: [MarkGuard] },
    { path: "edit/:id/offline", component: TableStudComponent, canActivate: [MarkGuard] },
    { path: "404", component: NotFoundComponent },
    { path: "**", redirectTo: "/404" },
];

export const routing = RouterModule.forRoot(routes);
