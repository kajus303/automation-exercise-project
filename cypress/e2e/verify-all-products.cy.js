describe("Test Case 8: Verify All Products and Product Detail Page", () => {
  it("should display all products and navigate to product detail page successfully", () => {
    // Navigate to URL 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");

    // Verify that home page is visible successfully
    cy.get('img[src="/static/images/home/logo.png"]').should("be.visible");

    // Click on 'Products' button
    cy.contains("a", "Products").click();

    // Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should("include", "/products");
    cy.get(".features_items").should("be.visible");

    // The products list is visible
    cy.get(".features_items .product-image-wrapper").should(
      "have.length.greaterThan",
      0
    );

    // Click on 'View Product' of first product
    cy.get(".features_items .product-image-wrapper")
      .first()
      .contains("View Product")
      .click();

    // User is landed on product detail page
    cy.url().should("include", "/product_details");

    // Verify that detail is visible: product name, category, price, availability, condition, brand
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
