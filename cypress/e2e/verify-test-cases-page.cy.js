describe("Test Case 7: Verify Test Cases Page", () => {
  it("should navigate to Test Cases page successfully", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Test Cases' button
    cy.contains("a", "Test Cases").click();

    // Verify user is navigated to test cases page successfully
    cy.url().should("include", "/test_cases");
    cy.get("h2.title.text-center").should("have.text", "Test Cases");
  });
});
