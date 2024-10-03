describe("Test Case 3: Login User with incorrect email and password", () => {
  it("should display an error message when logging in with incorrect credentials", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Signup / Login' button
    cy.contains("a", "Signup / Login").click();

    // Verify 'Login to your account' is visible
    cy.contains("h2", "Login to your account").should("be.visible");

    // Enter incorrect email address and password
    cy.get('input[data-qa="login-email"]').type("testemail@email.com");
    cy.get('input[data-qa="login-password"]').type("testincorrectpsw");

    // Click 'login' button
    cy.get('button[data-qa="login-button"]').click();

    // Verify error 'Your email or password is incorrect!' is visible
    cy.contains("p", "Your email or password is incorrect!").should(
      "be.visible"
    );
  });
});
