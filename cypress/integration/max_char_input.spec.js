import { cyan } from "color-name";

describe("Text box with max characters", () => {
  it("displays the appropriate remaining characters count", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("span")
      .invoke("text")
      .should("equal", "15");

    cy.get("input").type("hello");

    cy.get("span")
      .invoke("text")
      .should("equal", "10");

    cy.get("input").type(" my friend");

    cy.get("span")
      .invoke("text")
      .should("equal", "0");
  });

  it("prevents the user from typing more characters once max is reached", () => {
    cy.visit("http://localhost:3000/example-2");

    cy.get("input").type("oh my so many characters more than 15");
    cy.get("input").should("have.attr", "value", "oh my so many c");
  });
});
