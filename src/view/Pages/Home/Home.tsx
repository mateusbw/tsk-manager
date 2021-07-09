import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Button from "../../Components/Button/Button";
import Text from "../../Components/Text/Text";
import Content from "../../Components/Content/Content";

import Dialog from "../../Components/Dialog/Dialog";
import Flex from "../../Components/Layout/Flex";
import Input from "../../Components/Form/Input/Input";
import TextArea from "../../Components/Form/TextArea/TextArea";

import TaskCard from "./TaskCard/TaskCard";

import { ReactComponent as Logo } from "../../../assets/icons/Icon.svg";

import theme from "../../theme";
import useTask from "../../../state/task/useTask";
import { Status, Task } from "../../../domain/Task/Task";

const Home: React.FC = () => {
  const { tasks, addNewTask, markAsClosed, markAsToDo } = useTask();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [openedDialog, setOpenedDialog] = useState(false);
  const [filteredTasks, setTask] = useState(tasks);
  const [taskTypeFilter, setTaskTypeFilter] = useState(Status.ToDo);

  const onSubmit = (form: { title: string; description: string }) => {
    addNewTask(form);
    setOpenedDialog(false);
    reset();
  };

  useEffect(() => {
    setTask(tasks.filter((task) => task.status === taskTypeFilter));
  }, [tasks, taskTypeFilter]);

  const closeTaskHandler = (task: Task) => {
    markAsClosed(task);
    setTaskTypeFilter(Status.Closed);
  };

  const toDoTaskHandler = (task: Task) => {
    markAsToDo(task);
    setTaskTypeFilter(Status.ToDo);
  };

  return (
    <Content>
      <Flex justifyContent="space-between">
        <Flex alignItems="center">
          <Logo />
          <Text as="h1" variant="medium" marginLeft="20px">
            tsk.
          </Text>
        </Flex>
        <Button
          variant="primary"
          callBack={() => setOpenedDialog(true)}
          data-testid="new-task"
        >
          New Task
        </Button>
      </Flex>
      <Text as="h2" my="64px">
        Hi there.
      </Text>
      <Flex mb="60px">
        <Button
          variant={taskTypeFilter === Status.ToDo ? "secondary" : "inverted"}
          mr="20px"
          callBack={() => setTaskTypeFilter(Status.ToDo)}
        >
          To do
        </Button>
        <Button
          variant={taskTypeFilter === Status.Closed ? "secondary" : "inverted"}
          callBack={() => setTaskTypeFilter(Status.Closed)}
        >
          Closed
        </Button>
      </Flex>

      <Flex flexDirection="column">
        {filteredTasks && filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskCard
              task={task}
              key={task.id}
              markAsClosed={() => closeTaskHandler(task)}
              markAsToDo={() => toDoTaskHandler(task)}
            />
          ))
        ) : (
          <Text
            as="p"
            variant="medium"
            fontWeight={theme.fontWeights.semiBold}
            color={theme.colors.purple}
          >
            No Tasks
          </Text>
        )}
      </Flex>

      <Dialog
        isOpened={openedDialog}
        onClose={() => setOpenedDialog(false)}
        data-testid="new-task-dialog"
      >
        <Text
          as="p"
          variant="medium"
          fontWeight={theme.fontWeights.semiBold}
          mb="44px"
        >
          New Tasks
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            placeholder="Title"
            register={register}
            name="title"
            mb="20px"
            errors={errors}
            data-testid="title-input"
          />
          <TextArea
            placeholder="Description"
            register={register}
            name="description"
            rows={10}
            errors={errors}
            data-testid="description-input"
          />
          <Button variant="primary" mt="20px" block data-testid="save-button">
            Save
          </Button>
        </form>
      </Dialog>
    </Content>
  );
};

export default Home;
