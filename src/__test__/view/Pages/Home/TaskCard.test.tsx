import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { newTask } from "../../../../domain/Task/Task";
import TaskCard from "../../../../view/Pages/Home/TaskCard/TaskCard";
import theme from "../../../../view/theme";

describe("<TaskCard/>", () => {
  it("matches   snapshot", () => {
    Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
    const task = newTask("Title", "Description");
    const taskCardComponent = render(
      <ThemeProvider theme={theme}>
        <TaskCard
          task={task}
          markAsClosed={() => null}
          markAsToDo={() => null}
        />
      </ThemeProvider>
    );
    expect(taskCardComponent.container).toMatchSnapshot();
  });
});
