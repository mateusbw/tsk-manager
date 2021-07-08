import { Task } from '../domain/Task/Task';
import React, { createContext, useReducer } from "react";
import taskReducer from "./task/task";

export type State = {
    store: {
        tasks: Task[]
    },
    dispatch: Function
}

const initalTaskState = {
    tasks: []
}

const initialState: State = {
    store: {
       ...initalTaskState
    },
    dispatch: () => {}
}


export const StateContext = createContext(initialState);

export const StateProvider = ({children}: {children: React.ReactNode}) => {
    const [tasks, taskDispatch] = useReducer(taskReducer, initalTaskState);
    
    const combinedReducers = {
        store: {
          ...tasks
        },
        dispatch: (action:any) => taskDispatch(action)
    };

    return (
        <StateContext.Provider value={combinedReducers}>
            {children}
        </StateContext.Provider>
    )
}