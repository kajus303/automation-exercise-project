describe("Test Case 1: Register User", () => {
  it("should register a new user successfully", () => {
    cy.fixture("user").then((user) => {
      user.email = `testuser${Date.now()}@example.com`;

      cy.registerUser(user);
      cy.contains(`Logged in as ${user.name}`).should("be.visible");

      cy.contains("Delete Account").click();
      cy.contains("Account Deleted!").should("be.visible");
      cy.get('a[data-qa="continue-button"]').click();
    });
  });
});
