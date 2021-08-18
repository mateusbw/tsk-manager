import { Task, TaskRepository } from "../domain/Task/Task";
import { Service } from "../services/cookieService";

type Dependencies = {
  service: Service<Task>;
};

const taskRepository = ({ service }: Dependencies): TaskRepository => ({
  getTasks(): Array<Task> {
    const tasks = service.get("tasks");
    return tasks;
  },
  createTask(task: Task) {
    const createdTask = service.post("tasks", task);
    return createdTask;
  },
  updateTask(task: Task) {
    const updatedTask = service.put("tasks", task.id, task);
    return updatedTask;
  },
});

export default taskRepository;
