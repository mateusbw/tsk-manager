import { v4 as uuidv4 } from 'uuid';

export enum Status {
    ToDo = "toDo",
    Closed = "closed",
}

export type Task = {
    id: string;
    title: string;
    description: string;
    status: Status;
    createdAt: Date;
};

export const newTask = ( title: string, description: string ) => ( 
    {
        id: uuidv4(),
        title,
        description,
        status: Status.ToDo,
        createdAt: new Date(),
    }
)

export const closeTask = (task: Task) => (
    {
        ...task,
        status: Status.Closed
    }
)

export const openTask = (task: Task) => (
    {
        ...task,
        status: Status.ToDo
    }
)

export const isClosed = (task: Task) => task.status === Status.Closed