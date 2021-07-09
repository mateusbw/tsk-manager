import {
  newTask,
  closeTask,
  openTask,
  Status,
  isClosed,
} from "../../../domain/Task/Task";

jest.mock("uuid", () => ({
  v4: () => 1,
}));
describe("Domain > Task", () => {
  describe("newTask", () => {
    it("creates task correctly", () => {
      Date.now = jest.fn(() => new Date("2019-04-07T10:20:30Z").getTime());
      expect(newTask("Title", "Description")).toStrictEqual({
        id: 1,
        title: "Title",
        description: "Description",
        status: Status.ToDo,
        createdAt: 1554632430000,
      });
    });
  });

  describe("closeTask", () => {
    it("returns task with status closed", () => {
      const task = newTask("Title", "Description");
      expect(closeTask(task).status).toBe(Status.Closed);
    });
  });

  describe("openTask", () => {
    it("returns task with status To Do", () => {
      const task = newTask("Title", "Description");
      expect(openTask(task).status).toBe(Status.ToDo);
    });
  });

  describe("isClosed", () => {
    const task = newTask("Title", "Description");
    describe("Closed Task", () => {
      it("returns true", () => {
        expect(isClosed(closeTask(task))).toBe(true);
      });
    });
    describe("Opened Task", () => {
      it("returns false", () => {
        expect(isClosed(openTask(task))).toBe(false);
      });
    });
  });
});
