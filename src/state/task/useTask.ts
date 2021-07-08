import { useContext } from "react";
import { Task } from "../../domain/Task/Task";
import { StateContext } from "..";
import {
  addTask,
  markAsClosed as markAsClosedAction,
  markAsToDo as markAsToDoAction,
} from "./task";

const useTask = () => {
  const { store, dispatch } = useContext(StateContext);
  const addNewTask = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => dispatch(addTask(title, description));
  const markAsClosed = (task: Task) => {
    dispatch(markAsClosedAction(task));
  };
  const markAsToDo = (task: Task) => {
    dispatch(markAsToDoAction(task));
  };

  return {
    tasks: store.tasks,
    addNewTask,
    markAsClosed,
    markAsToDo,
  };
};

export default useTask;
