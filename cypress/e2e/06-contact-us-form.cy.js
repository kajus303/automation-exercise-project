describe("Test Case 6: Contact Us Form", () => {
  it("should submit the contact us form successfully", () => {
    cy.visit("/");
    cy.contains("Contact us").click();
    cy.contains("Get In Touch").should("be.visible");

    // Fill in contact form
    cy.get('input[name="name"]').type("Test User");
    cy.get('input[name="email"]').type("testuser@example.com");
    cy.get('input[name="subject"]').type("Test Subject");
    cy.get('textarea[name="message"]').type("This is a test message.");

    // Upload file
    const filePath = "cypress/fixtures/testfile.txt";
    cy.get('input[name="upload_file"]').selectFile(filePath);

    cy.get('input[data-qa="submit-button"]').click();

    cy.on("window:confirm", (text) => {
      expect(text).to.equal("Press OK to proceed!");
      return true;
    });
    cy.contains(
      "Success! Your details have been submitted successfully."
    ).should("be.visible");

    cy.contains("Home").click();
    cy.url().should("eq", Cypress.config().baseUrl + "/");
    cy.get('img[alt="Website for automation practice"]').should("be.visible");
  });
});
