describe("Test Case 5: Register User with Existing Email", () => {
  let user;

  before(function () {
    cy.fixture("user").then((userData) => {
      user = userData;
      user.email = `testuser${Date.now()}@example.com`;

      cy.registerUser(user);
      cy.logoutUser();
    });
  });

  it("should display an error when registering with an existing email", () => {
    cy.visit("/");
    cy.contains("Signup / Login").click();

    cy.get('input[name="name"]').type(user.name);
    cy.get('input[name="email"][data-qa="signup-email"]').type(user.email);
    cy.get('button[data-qa="signup-button"]').click();

    cy.contains("Email Address already exist!").should("be.visible");
  });
});
