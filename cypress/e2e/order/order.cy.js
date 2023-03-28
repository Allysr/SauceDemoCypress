/// <reference types="cypress" />

describe("Order", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Validar se ao realizar os passos corretos a compra terá sucesso.", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type("Alicia");
    cy.get('[data-test="lastName"]').type("Roses");
    cy.get('[data-test="postalCode"]').type("0000");
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get(".complete-header").should("be.visible");
  });

  it("Validar se ao clicar em add to card o produto aparerá no carrinho.", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("Validar se ao clicar em remove o produto sairá do carrinho.", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_badge").should("not.exist");
  });

  it("Validar se ao clicar em remove o produto sairá da listagem.", () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get(".shopping_cart_link").click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get(".cart_item").should("not.exist");
  });
});
