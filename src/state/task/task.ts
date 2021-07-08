import produce from "immer";
import { closeTask, newTask, Task, openTask } from "../../domain/Task/Task";
import { CREATE_NEW_TASK, UPDATE_TASK } from "../actions";

type TaskState = {
  tasks: Task[];
};
interface Action {
  type: string;
  task: Task;
}

const taskReducer = (state: TaskState, action: Action) => {
  switch (action.type) {
    case CREATE_NEW_TASK:
      return produce(state, (draft) => {
        draft.tasks.push(action.task);
      });
    case UPDATE_TASK:
      return produce(state, (draft) => {
        const taskIndex = draft.tasks.findIndex(
          (task) => task.id === action.task.id
        );
        draft.tasks[taskIndex] = action.task;
      });
    default:
      return state;
  }
};

export const addTask = (title: string, description: string): Action => ({
  type: CREATE_NEW_TASK,
  task: newTask(title, description),
});

export const markAsClosed = (task: Task): Action => ({
  type: UPDATE_TASK,
  task: closeTask(task),
});

export const markAsToDo = (task: Task): Action => ({
  type: UPDATE_TASK,
  task: openTask(task),
});

export default taskReducer;
