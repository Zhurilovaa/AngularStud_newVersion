import { Student } from "src/app/tableStudmodul/student";
import { StudentState, initialStudentState } from "../student.state";
import { StudAction, StudUnionActions } from "../action/stud.action";



//reducer
export function studReducer(state: StudentState = initialStudentState, action: StudUnionActions){
    switch(action.type){
        case StudAction.AddS:
            return {
                ...state,
                students:[...state.students, action.payload.newStud]
              };
        case StudAction.DelS:
            return{
                ...state,
                delStud: action.payload.delstud,
            };
        case StudAction.EditS:
            return{
                ...state,
                editStud: action.payload.estud,
            };
        default:
            return state;
    }
}
