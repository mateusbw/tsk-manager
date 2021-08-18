import { closeTask, Task, TaskRepository } from "../domain/Task/Task";

type Dependencies = {
  taskRepository: TaskRepository;
};

type Callbacks = {
  onSuccess: (task: Task) => void;
  onError: (error: any) => void;
};

const closeTaskCreator = ({ taskRepository }: Dependencies) => {
  return (task: Task, { onSuccess, onError }: Callbacks) => {
    try {
      const openedTask = closeTask(task);
      const updatedTask = taskRepository.updateTask(openedTask);
      onSuccess(updatedTask);
    } catch (e) {
      onError(e);
    }
  };
};

export default closeTaskCreator;
