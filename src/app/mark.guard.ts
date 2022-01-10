import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { OnlineStudentService } from "./service/stud-online.service";
import { OflineStudentService } from "./service/stud-ofline.service";
import { Student } from "./tableStudmodul/student";

@Injectable({
  providedIn: "root",
})
export class MarkGuard implements CanActivate {
  constructor(private offStudServ: OflineStudentService, private onStudServ: OnlineStudentService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<UrlTree | boolean> | Promise<UrlTree | boolean> | UrlTree | boolean {

      let studentsEdit: Student[] = [];
      const status = route.url[route.url.length - 1].path;

      if (status === "online"){
        // students = this.onStudServ.students;
      }

      if (status === "offline"){
        studentsEdit = this.offStudServ.tableStudents;
      }

      const studentToEdit = studentsEdit[(+route.url[1].path) - 1];

      if (studentToEdit?.middleMark === 5){
        alert("Сработал Guard на средний балл. Доступ закрыт");
        return false;
      }
    return true;
  }

}
