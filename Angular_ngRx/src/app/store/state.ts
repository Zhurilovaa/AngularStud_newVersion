import { ActionReducerMap } from "@ngrx/store";
import { initialStudentState, StudentState } from "./student.state";
import { studReducer } from "./reducers/stud.reducer";

export interface AppState{
    studTable: StudentState
}

export const initialAppState: AppState ={
    studTable: initialStudentState
}

export function getInitialState(): AppState{
    return initialAppState;
}
/*
export const appReducers: ActionReducerMap<AppState> = {
    studTable: studReducer,
}
*/