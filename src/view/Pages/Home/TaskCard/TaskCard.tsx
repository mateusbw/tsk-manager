import styled, { keyframes } from "styled-components";
import Flex from "../../../Components/Layout/Flex";
import Text from "../../../Components/Text/Text";
import CloseTaskButton from "../../../Components/CloseTaskButton/CloseTaskButton";
import Card from "../../../Components/Card/Card";
import CardHeader from "../../../Components/Card/CardHeader/CardHeader";
import CardBody from "../../../Components/Card/CardBody/CardBody";
import CardFooter from "../../../Components/Card/CardFooter/CardFooter";
import Button from "../../../Components/Button/Button";
import { ReactComponent as DotsIcon } from "../../../../assets/icons/dots.svg";

import theme from "../../../theme";
import { isClosed as isTaskClosed, Task } from "../../../../domain/Task/Task";
import timeUtil from "../../../../utils/timeUtil";

const onEnterRight = keyframes`
    from{opacity: 0; transform: translateX(50%)}
    to{opacity: 1; transform: translateX(0)}`;

const onEnterLeft = keyframes`
    from{opacity: 0; transform: translateX(-50%)}
    to{opacity: 1; transform: translateX(0)}
    `;

const BaseTaskCard = styled(Card)<{ isClosed: boolean }>`
  animation: ${({ isClosed }) => (isClosed ? onEnterLeft : onEnterRight)} 0.5s
    forwards;
`;

type Props = {
  task: Task;
  markAsClosed: () => void;
  markAsToDo: () => void;
};

const TaskCard = ({ task, markAsClosed, markAsToDo }: Props) => {
  return (
    <BaseTaskCard
      mb="20px"
      isClosed={isTaskClosed(task)}
      data-testid="task-card"
    >
      <CardHeader display="flex" justifyContent="space-between">
        <Flex alignItems="center">
          <CloseTaskButton
            isClosed={isTaskClosed(task)}
            onCloseCallback={markAsClosed}
            onTodoCallback={markAsToDo}
          />
          <Text as="h2" variant="small" fontWeight={theme.fontWeights.semiBold}>
            {task.title}
          </Text>
        </Flex>
        <Button variant="icon" p="0">
          <DotsIcon />
        </Button>
      </CardHeader>
      <CardBody>
        <Text as="p" variant="small">
          {task.description}
        </Text>
      </CardBody>
      <CardFooter textAlign="center">
        <Text as="p" variant="small" fontWeight={theme.fontWeights.thin}>
          Created {timeUtil.formatDate(task.createdAt, "ff")}
        </Text>
      </CardFooter>
    </BaseTaskCard>
  );
};

export default TaskCard;
