import { Student } from "../tableStudmodul/student";
import { Injectable } from "@angular/core";
// import { TableStudModule } from "../tableStudmodul/tableStud.module";

export class StudentService {
  public students: Student[] = [];
  public tableStudents: Student[] = [];

  constructor(){
this.fillStudent();
}

  fillStudent(): void {}
  getAllStudents(): Student[] {
    return [];
  }
  createTableStud(): void{}

  deleteStudent(id: number): void{}

  newStudent(stud: Student): void{}

  editStudent(id: number, newValues: Student): void{}

}

@Injectable( { providedIn: "root" } )
export class OflineStudentService implements StudentService{
  public students: Student[] = [];
  public tableStudents: Student[] = [];


  constructor(){
    this.fillStudent();
  }

  getAllStudents(): Student[] {
    return this.tableStudents;
  }

  fillStudent(): void {
    const names: string[] = ["виктория", "Таисия", "Роберт", "Мирослава",
    "Максим", "Анна", "Маргарита", "Максим", "Ян", "Максим", "Виктория"];

    const surnames: string[] = ["Сергеева", "Никифорова", "Бирюков", "Сомова",
    "Раков", "Селиванова", "Михайлова", "Корнилов", "Пахомов", "Баженов", "Сергеева"];

    const patronymic: string[] = ["Марковна", "Николаевна", "Ильич", "Платоновна",
    "Николаевич", "Михайловна", "Тимофеевна", "Леонидович", "Максимович", "Даниилович", "Марковна"];

    const birthDates: Date[] = [
      new Date(1999, 0, 15),
      new Date(2000, 1, 27),
      new Date(2000, 5, 13),
      new Date(2000, 6, 4),
      new Date(2000, 7, 12),
      new Date(2000, 9, 5),
      new Date(2001, 7, 4),
      new Date(2001, 7, 8),
      new Date(2002, 5, 5),
      new Date(2002, 7, 9),
      new Date(1999, 0, 15),
    ];

    const middleMark: number[] = [22.7, 2.8, 2.4, 5, 3.0, 2.6, 2.5, 3.1, 4.4, 4.3, 3.3];

    for (let i: number = 0; i < names.length; i++) {
      const tempStud = new Student(names[i], patronymic[i], surnames[i], birthDates[i], middleMark[i]);
      this.students.push(tempStud);
    }
    this.createTableStud();
  }

  createTableStud(): void{
    this.tableStudents = [];
    for (const stud of this.students){
      // условие попадания в таблицу
      if (stud.filtred && !(stud.deleted)) {
        this.tableStudents.push(stud);
      }
    }
  }


  newStudent(currStud: Student): void {
    this.students.push(currStud);
    this.tableStudents.push(currStud);
  }

  editStudent(id: number, newValues: Student): void{
    this.tableStudents[id].editStudent(newValues.name, newValues.patronym, newValues.surname, newValues.birthdate, newValues.middleMark);
    // console.log(this.tableStudents)
  }

  deleteStudent(id: number): void{
    this.students[id].deleted = true;
  }
}
