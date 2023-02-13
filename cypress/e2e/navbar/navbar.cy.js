/// <reference types="cypress" />

describe("Menu", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("All Items", () => {
    cy.get(".shopping_cart_link").click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#inventory_sidebar_link").click();
    cy.get("span.title").contains("Products").should("be.visible");
  });

  it("About", () => {
    cy.get(".shopping_cart_link").click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#about_sidebar_link").invoke("removeAttr", "target").click();
    cy.get(".is-full-mobile > .content-container > .supertitle").should(
      "be.visible"
    );
  });

  it("Logout", () => {
    cy.get("#react-burger-menu-btn").click();
    cy.get("#logout_sidebar_link").click();
    cy.get('[data-test="username"]').should("be.visible");
  });

  it("Reset app state", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get("#react-burger-menu-btn").click();
    cy.get("#reset_sidebar_link").click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });
});
