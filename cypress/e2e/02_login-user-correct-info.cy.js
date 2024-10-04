describe("Test Case 2: Login User with Correct Email and Password", () => {
  let user;

  before(function () {
    cy.fixture("user").then((userData) => {
      user = userData;
      user.email = `testuser${Date.now()}@example.com`;

      cy.registerUser(user);
      cy.logoutUser();
    });
  });

  it("should log in the user with correct credentials", () => {
    cy.loginUser(user.email, user.password);
    cy.contains(`Logged in as ${user.name}`).should("be.visible");

    cy.contains("Delete Account").click();
    cy.contains("Account Deleted!").should("be.visible");
    cy.get('a[data-qa="continue-button"]').click();
  });
});
