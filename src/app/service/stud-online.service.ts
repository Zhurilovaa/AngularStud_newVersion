import { Student } from "../tableStudmodul/student";
import { StudentService } from "./stud-ofline.service";
import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";



@Injectable({  providedIn: "root" })
export class OnlineStudentService implements StudentService{

    public students: Student[] = [];
  public tableStudents: Student[] = [];

  constructor(){
    this.fillStudent();
  }
  fillStudent(): void {}
  getAllStudents(): Student[] {
    return [];
  }
  createTableStud(): void{ }
  deleteStudent(id: number): void{}

  newStudent(stud: Student): void{}

  editStudent(id: number, newValues: Student): void{}

}
