describe("e2e", () => {
  describe("Open App", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000/");
    });

    describe("new Task", () => {
      describe("Dialog", () => {
        it("is not visible", () => {
          cy.getByTestId("new-task-dialog").should("not.be.visible");
        });
      });

      describe("open Dialog", () => {
        it("is visible", () => {
          cy.getByTestId("new-task").click();
          cy.getByTestId("new-task-dialog").should("be.visible");
        });
      });

      describe("empty form", () => {
        it("validates the form", () => {
          cy.getByTestId("new-task").click();
          cy.getByTestId("save-button").click();
          cy.getByTestId("new-task-dialog").should("be.visible");
          cy.getByTestId("title-input").should(
            "have.css",
            "border",
            "1px solid rgb(249, 60, 60)"
          );
          cy.getByTestId("description-input").should(
            "have.css",
            "border",
            "1px solid rgb(249, 60, 60)"
          );
        });
      });

      describe("Filled form", () => {
        it("adds news task", () => {
          cy.getByTestId("new-task").click();
          cy.getByTestId("title-input").type("Title");
          cy.getByTestId("description-input").type("Description");
          cy.getByTestId("save-button").click();

          cy.getByTestId("new-task-dialog").should("not.be.visible");
          cy.getByTestId("task-card").should("be.visible");
        });
      });
    });
  });
});
