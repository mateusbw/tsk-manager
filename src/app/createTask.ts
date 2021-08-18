import { Task, TaskRepository } from "../domain/Task/Task";

type Dependencies = {
  taskRepository: TaskRepository;
};

type Callbacks = {
  onSuccess: (task: Task) => void;
  onError: (error: any) => void;
};

const createTaskCreator = ({ taskRepository }: Dependencies) => {
  return (task: Task, { onSuccess, onError }: Callbacks) => {
    try {
      taskRepository.createTask(task);
      onSuccess(task);
    } catch (e) {
      onError(e);
    }
  };
};

export default createTaskCreator;
