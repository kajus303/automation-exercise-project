describe("Test Case 4: Logout User", () => {
  let user;

  before(function () {
    cy.fixture("user").then((userData) => {
      user = userData;
      user.email = `testuser${Date.now()}@example.com`;

      cy.registerUser(user);
      cy.logoutUser();
    });
  });

  it("should log in and log out the user successfully", () => {
    cy.loginUser(user.email, user.password);
    cy.contains(`Logged in as ${user.name}`).should("be.visible");

    cy.logoutUser();
    cy.url().should("include", "/login");
    cy.contains("Login to your account").should("be.visible");
  });
});
