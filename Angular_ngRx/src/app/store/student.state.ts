import { Student } from "../tableStudmodul/student"

export interface StudentState {
    students: Student[],
    delstud: Student,
    editstud: Student,
}

export const initialStudentState:  StudentState = {
    students: fillStudents(),
    delstud: new Student(0,"a","b","c",new Date(),4.5),
    editstud: new Student(0,"a","b","c",new Date(),4.5),
}

export function fillStudents(): Student[]{
    let res: Student[] =[];
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

    const middleMark: number[] = [22.7, 2.8, 2.4, 4.2, 3.0, 2.6, 2.5, 3.1, 4.4, 4.3, 3.3];

    for (let i: number = 0; i < names.length; i++) {
      const tempStud = new Student(i+1, names[i], patronymic[i], surnames[i], birthDates[i], middleMark[i]);
      res.push(tempStud);
    }
    return res;
}