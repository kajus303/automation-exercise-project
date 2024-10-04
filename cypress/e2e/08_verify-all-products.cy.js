describe("Test Case 8: Verify All Products and Product Detail Page", () => {
  it("should display all products and navigate to product detail page", () => {
    cy.visit("/");
    cy.contains("Products").click();

    cy.url().should("include", "/products");
    cy.get(".features_items .product-image-wrapper").should(
      "have.length.gt",
      0
    );

    // View first product's details
    cy.get(".features_items .product-image-wrapper")
      .first()
      .contains("View Product")
      .click();

    cy.url().should("include", "/product_details");
    cy.get(".product-information").within(() => {
      cy.get("h2").should("be.visible"); // Product name
      cy.contains("Category:").should("be.visible");
      cy.contains("Rs.").should("be.visible"); // Price
      cy.contains("Availability:").should("be.visible");
      cy.contains("Condition:").should("be.visible");
      cy.contains("Brand:").should("be.visible");
    });
  });
});
