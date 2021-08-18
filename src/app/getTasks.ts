import { Task, TaskRepository } from "../domain/Task/Task";

type Dependencies = {
  taskRepository: TaskRepository;
};

type Callbacks = {
  onSuccess: (tasks: Array<Task>) => void;
  onError: (error: any) => void;
};

const getTaksCreator = ({ taskRepository }: Dependencies) => {
  return ({ onSuccess, onError }: Callbacks) => {
    try {
      const tasks = taskRepository.getTasks();
      onSuccess(tasks);
    } catch (e) {
      onError(e);
    }
  };
};

export default getTaksCreator;
