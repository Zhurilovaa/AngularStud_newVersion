// import { identifierName, ReturnStatement } from "@angular/compiler";
import { Component, ChangeDetectionStrategy,  ChangeDetectorRef   } from "@angular/core";
import { ActivatedRoute,  Router } from "@angular/router";
import { OnlineStudentService } from "../service/stud-online.service";
import { StudentService, OflineStudentService } from "../service/stud-ofline.service";

import { Student } from "./student";

@Component({
  selector: "app-workStud",
  templateUrl: "./tableStud.component.html",
  styleUrls: ["./tableStud.component.less"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{
    provide: StudentService,
    useFactory: (snapshot: ActivatedRoute): StudentService => {
      return snapshot.snapshot.url[snapshot.snapshot.url.length - 1].path === "online" ?
      new OnlineStudentService() :
      new OflineStudentService();
    },
    deps: [ActivatedRoute]
  }]
})
export class TableStudComponent {
  title = "student_list";

  online = true;
  constructor(public ref: ChangeDetectorRef, public studService: StudentService, public router: Router, public activeRoute: ActivatedRoute){
    activeRoute.url.subscribe((e) => {
        if (e[e.length - 1].path === "online"){
          this.online = true;
        } else {
          this.online = false;
        }
      });
    const today = new Date();
    this.minDate = new Date(today.setFullYear(today.getFullYear() - 30));

  }

  // массив студентов
  // students: Student[] = [];
  // для вывода в таблицу
  // tableStud: Student[] = [];

  classOn: boolean = true;
  fiterParam: string = "number";
  filterStart: Date | number = 0.0;
  filterEnd: Date | number = 5.0;
  minDate: Date = new Date();
  processDel: boolean = false;
  delStudent: number = -1;

  setClassOn(): void {
    this.classOn = this.classOn ? false : true;
  }
  getClassOn(): boolean {
    return this.classOn;
  }

  setFilterParam(param: string): void {
    this.fiterParam = param;
    switch (this.fiterParam){
      case "number":
        this.filterStart = 0.0;
        this.filterEnd = 5.0;
        break;
      case "date":
        this.filterStart = this.minDate;
        this.filterEnd = new Date();
        break;
      default:
        break;
    }
  }

  setFilter(limit: string, position: string): void {
      switch (this.fiterParam){
        case "number":
          switch (position){
            case "start":
              this.filterStart = limit ? +limit : 0.0 ;
              break;
            case "end":
              this.filterEnd = limit ? +limit : 5.0;
              break;
            default:
              break;
          }
          break;
        case "date":
          switch (position){
            case "start":
              this.filterStart = limit ? new Date(limit) : this.minDate;
              break;
            case "end":
              this.filterEnd = limit ? new Date(limit) : new Date();
              break;
            default:
              break;
          }
          break;
        default:
          break;
      }
  }

  findStudent(key: string, param: string): void {
    if (key === "") {
      for (const stud of this.studService.students) {
        stud.find = false;
      }
      return;
    }
    for (const stud of this.studService.students) {
      switch (param) {
        case "name":
            stud.find = stud.name.toLowerCase().startsWith(key.trim().toLowerCase()) ? true : false;
          break;
        case "surname":
            stud.find = stud.surname.toLowerCase().startsWith(key.trim().toLowerCase()) ?  true : false;
          break;
        case "patronym":
            stud.find = stud.patronym.toLowerCase().startsWith(key.trim().toLowerCase()) ? true : false;
          break;
        default:
          break;
      }
    }
    this.studService.createTableStud();
  }

  filterStud(): void {
    switch (this.fiterParam){
      case "number":
        for (const stud of this.studService.students){
          // не подходит под диапозон
          stud.filtred = ((stud.middleMark < this.filterStart) || (stud.middleMark > this.filterEnd)) ? false : true ;
        }
        break;
      case "date":
        for (const stud of this.studService.students){
          // не подходит под диапозон
          stud.filtred = ((stud.birthdate < this.filterStart) || (stud.birthdate > this.filterEnd)) ? false : true ;
        }
        break;
      default:
        break;
    }
    this.studService.createTableStud();
  }

  notFilter(): void {
    for (const stud of this.studService.students){
      stud.filtred = true;
    }
    this.studService.createTableStud();
  }

  sortStud(param: string = "id"): void {
    this.studService.students.sort((prev: Student, next: Student) => {
      if (prev.getFieldByKey(param) < next.getFieldByKey(param)) {
        return -1;
      }
      if (prev.getFieldByKey(param) > next.getFieldByKey(param)) {
        return 1;
      }
      if (param === "id"){
        return prev.middleMark - next.middleMark;
      }
      return 0;
    });
    this.studService.createTableStud();
  }

  getShowMessage(): boolean {
    return this.processDel;
  }

  deleteRow(): void {
    // this.delStudent.deleted = true;
    this.studService.deleteStudent(this.delStudent);
    this.studService.createTableStud();
    this.popupOff();
  }

  popupOff(id: number = -1): void {
    if ((id) !== -1){
      this.delStudent = (id);
      this.studService.tableStudents[id].procDel = true;
    } else {
      this.studService.tableStudents[this.delStudent].procDel = false;
    }
    this.processDel = !this.processDel;
  }
}
