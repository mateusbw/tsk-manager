import { cookieService } from "./services/cookieService";

import taskRepositoryCreator from "./infra/taskRepository";

import createTaskCreator from "./app/createTask";
import getTasksCreator from "./app/getTasks";
import closeTaskCreator from "./app/closeTask";
import openTaskCreator from "./app/openTask";

const taskRepository = taskRepositoryCreator({ service: cookieService });

const createTask = createTaskCreator({ taskRepository });
const getTasks = getTasksCreator({ taskRepository });
const closeTask = closeTaskCreator({ taskRepository });
const openTask = openTaskCreator({ taskRepository });

const container = { createTask, getTasks, closeTask, openTask };

export type Container = typeof container;
export default container;
