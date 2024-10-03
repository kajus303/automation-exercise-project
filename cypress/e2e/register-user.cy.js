describe("Test Case 1: Register User", () => {
  it("should register a new user successfully", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Signup / Login' button
    cy.contains("a", "Signup / Login").click();

    // Verify 'New User Signup!' is visible
    cy.contains("h2", "New User Signup!").should("be.visible");

    // Enter name and email address
    const name = "Test User";
    const email = `testuser${Date.now()}@example.com`;
    cy.get('input[name="name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);

    // Click 'Signup' button
    cy.get('button[data-qa="signup-button"]').click();

    // Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains("b", "Enter Account Information").should("be.visible");

    // Fill details: Title, Name, Email, Password, Date of birth
    cy.get("#id_gender1").check();
    cy.get('input[name="password"]').type("TestPassword123");
    cy.get('select[name="days"]').select("10");
    cy.get('select[name="months"]').select("May");
    cy.get('select[name="years"]').select("1990");

    // Select checkbox 'Sign up for our newsletter!'
    cy.get("#newsletter").check();

    // Select checkbox 'Receive special offers from our partners!'
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

    // Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("b", "Account Created!").should("be.visible");

    // Click 'Continue' button
    cy.get('a[data-qa="continue-button"]').click();

    // Verify that 'Logged in as username' is visible
    cy.contains("a", `Logged in as ${name}`).should("be.visible");

    // Click 'Delete Account' button
    cy.contains("a", "Delete Account").click();

    // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
    cy.contains("b", "Account Deleted!").should("be.visible");
    cy.get('a[data-qa="continue-button"]').click();
  });
});
