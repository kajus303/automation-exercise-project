describe("Test Case 5: Register User with existing email", () => {
  const name = "Test User";
  const email = `testuser${Date.now()}@example.com`;
  const password = "TestPassword123";

  before(() => {
    // Precondition: Register a user with a specific email
    cy.visit("http://automationexercise.com");
    cy.contains("a", "Signup / Login").click();
    cy.get('input[name="name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();

    // Fill in account information
    cy.get("#id_gender1").check();
    cy.get('input[name="password"]').type(password);
    cy.get('select[name="days"]').select("10");
    cy.get('select[name="months"]').select("May");
    cy.get('select[name="years"]').select("1990");

    // Fill additional required fields
    cy.get('input[name="first_name"]').type("Test");
    cy.get('input[name="last_name"]').type("User");
    cy.get('input[name="company"]').type("Test Company");
    cy.get('input[name="address1"]').type("123 Test Street");
    cy.get('input[name="address2"]').type("Apt 1");
    cy.get('select[name="country"]').select("Canada");
    cy.get('input[name="state"]').type("Test State");
    cy.get('input[name="city"]').type("Test City");
    cy.get('input[name="zipcode"]').type("12345");
    cy.get('input[name="mobile_number"]').type("1234567890");

    // Submit registration
    cy.get('button[data-qa="create-account"]').click();

    // Verify account creation and continue
    cy.contains("b", "Account Created!").should("be.visible");
    cy.get('a[data-qa="continue-button"]').click();

    // Ensure 'Logged in as username' is visible
    cy.contains("a", `Logged in as ${name}`).should("be.visible");

    // Logout to prepare for the test
    cy.contains("a", "Logout").click();
  });

  it("should display an error when registering with an existing email", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Signup / Login' button
    cy.contains("a", "Signup / Login").click();

    // Verify 'New User Signup!' is visible
    cy.contains("h2", "New User Signup!").should("be.visible");

    // Enter name and already registered email address
    cy.get('input[name="name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);

    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').click();

    // Verify error 'Email Address already exist!' is visible
    cy.contains("p", "Email Address already exist!").should("be.visible");
  });
});
