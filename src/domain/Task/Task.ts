import { v4 as uuidv4 } from "uuid";

export enum Status {
  ToDo = "toDo",
  Closed = "closed",
}

export type Task = {
  id: string;
  title: string;
  description: string;
  status: Status;
  createdAt: number;
};

export type TaskRepository = {
  getTasks: () => Array<Task>;
  createTask: (task: Task) => Task;
  updateTask: (task: Task) => Task;
};

export const newTask = (title: string, description: string): Task => ({
  id: uuidv4(),
  title,
  description,
  status: Status.ToDo,
  createdAt: Date.now(),
});

export const closeTask = (task: Task): Task => ({
  ...task,
  status: Status.Closed,
});

export const openTask = (task: Task): Task => ({
  ...task,
  status: Status.ToDo,
});

export const isClosed = (task: Task): boolean => task.status === Status.Closed;
