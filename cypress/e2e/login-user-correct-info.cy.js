describe("Test Case 2: Login User with correct email and password", () => {
  const name = "Test User";
  const email = `testuser${Date.now()}@example.com`;
  const password = "TestPassword123";

  before(() => {
    // Precondition: Register a new user to login with
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

    // Select checkboxes
    cy.get("#newsletter").check();
    cy.get("#optin").check();

    // Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get('input[name="first_name"]').type("Test");
    cy.get('input[name="last_name"]').type("User");
    cy.get('input[name="company"]').type("Test Company");
    cy.get('input[name="address1"]').type("123 Test Street");
    cy.get('input[name="address2"]').type("Apt 1");
    cy.get('select[name="country"]').select("Australia");
    cy.get('input[name="state"]').type("Test State");
    cy.get('input[name="city"]').type("Test City");
    cy.get('input[name="zipcode"]').type("12345");
    cy.get('input[name="mobile_number"]').type("1234567890");

    // Click 'Create Account' button
    cy.get('button[data-qa="create-account"]').click();

    // Verify account creation and continue
    cy.contains("b", "Account Created!").should("be.visible");
    cy.get('a[data-qa="continue-button"]').click();

    // Logout to prepare for login test
    cy.contains("a", "Logout").click();
  });

  it("should login user with correct email and password", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Signup / Login' button
    cy.contains("a", "Signup / Login").click();

    // Verify 'Login to your account' is visible
    cy.contains("h2", "Login to your account").should("be.visible");

    // Enter correct email address and password
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);

    // Click 'login' button
    cy.get('button[data-qa="login-button"]').click();

    // Verify that 'Logged in as username' is visible
    cy.contains("a", `Logged in as ${name}`).should("be.visible");

    // Click 'Delete Account' button
    cy.contains("a", "Delete Account").click();

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains("b", "Account Deleted!").should("be.visible");
    cy.get('a[data-qa="continue-button"]').click();
  });
});
