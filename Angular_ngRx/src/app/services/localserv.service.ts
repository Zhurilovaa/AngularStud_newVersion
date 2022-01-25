import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of, Subscription, tap } from "rxjs";
import { Student } from "../tableStudmodul/student";


@Injectable({
  providedIn: "root"
})
export class StudService {
  students: Student[] = [];
  count: number = 0;

  constructor(private http: HttpClient) { }

  fillStudents(): Observable<Student[]> {
    return this.http.get<Student[]>("assets/studlist.json")
    .pipe(tap(
      (value) => {
        this.students = value;
      },
    ));
    this.count = this.students.length;
  }
  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  findStudById(id: number): Observable<Student> {
    const fStud = this.students[id];
    return of(fStud);
  }

  addStud(newStud: Student): Subscription {
    this.students.push(newStud);
    return of(this.students).subscribe();
  }

  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  delStud(index: number): Observable<Student[]> {
    this.students.splice(index, 1);
    return of(this.students);
  }

  editStud(edStud: Student, id: number): Subscription {
    this.students[id].name = edStud.name;
    this.students[id].patronym = edStud.patronym ;
    this.students[id].surname = edStud.surname;
    this.students[id].birthdate= edStud.birthdate;
    this.students[id].middleMark = edStud.middleMark;
    return of(this.students).subscribe();
  }
}