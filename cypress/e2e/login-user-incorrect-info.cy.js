describe("Test Case 3: Login User with Incorrect Email and Password", () => {
  it("should display an error message with incorrect credentials", () => {
    cy.visit("/");
    cy.contains("Signup / Login").click();

    // Attempt to log in with incorrect credentials
    cy.get('input[name="email"][data-qa="login-email"]').type(
      "wrongemail@example.com"
    );
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get('button[data-qa="login-button"]').click();

    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
});
