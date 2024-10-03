describe("Test Case 6: Contact Us Form", () => {
  it("should submit the contact us form successfully", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Contact Us' button
    cy.contains("a", "Contact us").click();

    // Verify 'GET IN TOUCH' is visible
    cy.contains("h2", "Get In Touch").should("be.visible");

    // Enter name, email, subject and message
    cy.get('input[data-qa="name"]').type("Test User");
    cy.get('input[data-qa="email"]').type("testuser@example.com");
    cy.get('input[data-qa="subject"]').type("Test Subject");
    cy.get('textarea[data-qa="message"]').type("This is a test message.");

    // Upload file
    const filePath = "cypress/fixtures/testfile.txt";
    cy.get('input[name="upload_file"]').selectFile(filePath);

    // Click 'Submit' button
    cy.get('input[data-qa="submit-button"]').click();

    // Click OK button on alert
    cy.on("window:alert", (str) => {
      expect(str).to.equal(
        "Success! Your details have been submitted successfully."
      );
    });

    // Verify success message is visible
    cy.contains(
      "div.status.alert.alert-success",
      "Success! Your details have been submitted successfully."
    ).should("be.visible");

    // Click 'Home' button and verify that landed to home page successfully
    cy.contains("a", "Home").click();
    cy.url().should("eq", "https://automationexercise.com/");
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");
  });
});
