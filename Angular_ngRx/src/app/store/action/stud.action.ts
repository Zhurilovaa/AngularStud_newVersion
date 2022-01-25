import { Action } from "@ngrx/store";
import { Student } from "src/app/tableStudmodul/student";

export enum StudAction{
    EditS = '[FORM] EditStud',
    AddS = '[FORM] AddStud',
    DelS = '[TABLE] DelStud',
}

//эффект редактирования студента
export class EditStudAction implements Action{
    readonly type = StudAction.EditS;

    constructor(public payload: {estud: Student}) {}
    //вариант редичить по номеру строки
    //constructor(public payload: {id: number}) {}
}

//эффект добавления студента
export class AddStudAction implements Action{
    readonly type = StudAction.AddS;

    constructor(public payload: {newStud: Student}) {}
}

//эффект удаления студента
export class DelStudAction implements Action{
    readonly type = StudAction.DelS;

    constructor(public payload: {delstud: Student}) {}
    //вариант удалять по номеру строки
    //constructor(public payload: {id: number}) {}
}

export type StudUnionActions = EditStudAction | AddStudAction | DelStudAction;