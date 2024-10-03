describe("Test Case 7: Verify Test Cases Page", () => {
  it("should navigate to Test Cases page successfully", () => {
    cy.visit("/");
    cy.contains("Test Cases").click();

    cy.url().should("include", "/test_cases");
    cy.get("h2.title.text-center").should("have.text", "Test Cases");
  });
});
