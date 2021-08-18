import { useDispatch, useSelector } from "react-redux";
import { newTask, Task } from "../../domain/Task/Task";
import {
  getTasksSelector,
  getTasks as getTasksAction,
  createTask,
  closeTask,
  openTask,
} from "./task";

const useTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(getTasksSelector);

  const addNewTask = ({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) => {
    const task = newTask(title, description);
    dispatch(createTask(task));
  };

  const getTasks = () => dispatch(getTasksAction());

  const markAsClosed = (task: Task) => {
    dispatch(closeTask(task));
  };

  const markAsToDo = (task: Task) => {
    dispatch(openTask(task));
  };

  return {
    tasks,
    addNewTask,
    getTasks,
    markAsClosed,
    markAsToDo,
  };
};

export default useTask;
