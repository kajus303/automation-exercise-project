describe("Test Case 7: Verify Test Cases Page", () => {
  it("Should navigate to Test Cases page successfully", () => {
    cy.visit("");
    cy.url().should("eq", "https://automationexercise.com/");
    cy.get("body").should("be.visible");
    cy.contains("a", "Test Cases").click();
    cy.url().should("include", "/test_cases");
    cy.get("h2.title.text-center").should("have.text", "Test Cases");
  });
});
