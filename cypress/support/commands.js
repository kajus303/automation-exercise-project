Cypress.Commands.add("registerUser", (user) => {
  cy.visit("/");
  cy.contains("Signup / Login").click();

  cy.get('input[data-qa="signup-name"]').type(user.name);
  cy.get('input[data-qa="signup-email"]').type(user.email);
  cy.get('button[data-qa="signup-button"]').click();

  // Account Information
  cy.get("#id_gender1").check();
  cy.get('input[data-qa="password"]').type(user.password);
  cy.get('select[data-qa="days"]').select(user.birthDay);
  cy.get('select[data-qa="months"]').select(user.birthMonth);
  cy.get('select[data-qa="years"]').select(user.birthYear);
  cy.get("#newsletter").check();
  cy.get("#optin").check();

  // Address Information
  cy.get('input[data-qa="first_name"]').type(user.firstName);
  cy.get('input[data-qa="last_name"]').type(user.lastName);
  cy.get('input[data-qa="company"]').type(user.company);
  cy.get('input[data-qa="address"]').type(user.address1);
  cy.get('input[data-qa="address2"]').type(user.address2);
  cy.get('select[data-qa="country"]').select(user.country);
  cy.get('input[data-qa="state"]').type(user.state);
  cy.get('input[data-qa="city"]').type(user.city);
  cy.get('input[data-qa="zipcode"]').type(user.zipcode);
  cy.get('input[data-qa="mobile_number"]').type(user.mobileNumber);

  cy.get('button[data-qa="create-account"]').click();
  cy.contains("Account Created!").should("be.visible");
  cy.get('a[data-qa="continue-button"]').click();
});

Cypress.Commands.add("loginUser", (email, password) => {
  cy.visit("/");
  cy.contains("Signup / Login").click();

  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[data-qa="login-button"]').click();
});

Cypress.Commands.add("logoutUser", () => {
  cy.contains("Logout").click();
});
