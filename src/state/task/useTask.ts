import { Task } from './../../domain/Task/Task';
import { useContext } from "react"
import { StateContext } from "../"
import { 
    addTask, 
    markAsClosed as markAsClosedAction,
    markAsToDo as markAsToDoAction,
} from "./task";

export const useTask = () => {
   const {store, dispatch} =  useContext(StateContext);
   const addNewTask = ({title, description}: {title: string, description: string}) => 
        dispatch(addTask(title, description));
   const markAsClosed = (task: Task) =>{
        dispatch(markAsClosedAction(task))};
   const markAsToDo = (task: Task) => {
        dispatch(markAsToDoAction(task))
    };

   return {
       tasks: store.tasks,
       addNewTask,
       markAsClosed,
       markAsToDo
   }
}