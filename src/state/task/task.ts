import produce from "immer";
import type { Reducer, Dispatch } from "redux";
import { State } from "..";
import { Container } from "../../container";
import { Task } from "../../domain/Task/Task";

import {
  TASKS_CREATE_SUCCESS,
  TASKS_ERROR_REQUEST,
  TASKS_GET_SUCCESS,
  TASKS_PENDING_REQUEST,
  TASKS_UPDATE_SUCCESS,
} from "../actions";

enum RequestStatuses {
  INIT = "INIT",
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  FAILED = "FAILED",
}

export type TaskState = {
  tasks: Task[];
  status: RequestStatuses;
  error: any;
};

const initialState = {
  tasks: [],
  status: RequestStatuses.INIT,
  error: null,
};

export const taskReducer: Reducer<TaskState, any> = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case TASKS_PENDING_REQUEST:
      return produce(state, (draft) => {
        draft.status = RequestStatuses.PENDING;
      });
    case TASKS_ERROR_REQUEST:
      return produce(state, (draft) => {
        draft.status = RequestStatuses.FULFILLED;
        draft.error = action.error;
      });
    case TASKS_GET_SUCCESS:
      return produce(state, (draft) => {
        draft.status = RequestStatuses.FULFILLED;
        draft.error = null;
        draft.tasks = action.payload;
      });
    case TASKS_CREATE_SUCCESS:
      return produce(state, (draft) => {
        draft.status = RequestStatuses.FULFILLED;
        draft.error = null;
        draft.tasks.push(action.payload);
      });
    case TASKS_UPDATE_SUCCESS:
      return produce(state, (draft) => {
        const taskIndex = draft.tasks.findIndex(
          (task) => task.id === action.payload.id
        );
        draft.tasks[taskIndex] = action.payload;
      });
    default:
      return state;
  }
};

const taksRequestPending = {
  type: TASKS_PENDING_REQUEST,
};

const tasksRequestFailed = (error: any) => ({
  type: TASKS_ERROR_REQUEST,
  error,
});

const requestGetTasksFulfilled = (tasks: Task[]) => ({
  type: TASKS_GET_SUCCESS,
  payload: tasks,
});

const requestCreateTaskFulfilled = (task: Task) => ({
  type: TASKS_CREATE_SUCCESS,
  payload: task,
});

const requestUpdateTaskFulfilled = (task: Task) => ({
  type: TASKS_UPDATE_SUCCESS,
  payload: task,
});

export const getTasks = () => {
  return (
    dispatch: Dispatch<any>,
    getState: () => State,
    container: Container
  ) => {
    dispatch(taksRequestPending);
    container.getTasks({
      onSuccess: (tasks) => dispatch(requestGetTasksFulfilled(tasks)),
      onError: (error) => dispatch(tasksRequestFailed(error)),
    });
  };
};

export const createTask = (task: Task) => {
  return (
    dispatch: Dispatch<any>,
    getState: () => State,
    container: Container
  ) => {
    dispatch(taksRequestPending);
    container.createTask(task, {
      onSuccess: (newTask) => dispatch(requestCreateTaskFulfilled(newTask)),
      onError: (error) => dispatch(tasksRequestFailed(error)),
    });
  };
};

export const closeTask = (task: Task) => {
  return (
    dispatch: Dispatch<any>,
    getState: () => State,
    container: Container
  ) => {
    dispatch(taksRequestPending);
    container.closeTask(task, {
      onSuccess: (newTask) => dispatch(requestUpdateTaskFulfilled(newTask)),
      onError: (error) => dispatch(tasksRequestFailed(error)),
    });
  };
};

export const openTask = (task: Task) => {
  return (
    dispatch: Dispatch<any>,
    getState: () => State,
    container: Container
  ) => {
    dispatch(taksRequestPending);
    container.openTask(task, {
      onSuccess: (newTask) => dispatch(requestUpdateTaskFulfilled(newTask)),
      onError: (error) => dispatch(tasksRequestFailed(error)),
    });
  };
};

export const getTasksSelector = (state: State): Task[] => state.tasks.tasks;
