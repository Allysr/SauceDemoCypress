/// <reference types="cypress"/>

describe("Filter ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  it("Filtro ", () => {
    cy.get('[data-test="product_sort_container"]').select("Name (A to Z)");
    cy.get(".inventory_item").eq(1).should("contain", "Sauce Labs Bike Light");
  });

  it("Filtro de A a Z ", () => {
    cy.get('[data-test="product_sort_container"]').select("Name (A to Z)");
    cy.get(".inventory_item").first().should("contain", "Sauce Labs Backpack");
  });

  it("Filtro de Z a A ", () => {
    cy.get('[data-test="product_sort_container"]').select("Name (Z to A)");
    cy.get(".inventory_item")
      .first()
      .should("contain", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Filtro de Menor para Maior ", () => {
    cy.get('[data-test="product_sort_container"]').select(
      "Price (low to high)"
    );
    cy.get(".inventory_item").first().should("contain", "7.99");
  });

  it("Filtro de Maior para Menor ", () => {
    cy.get('[data-test="product_sort_container"]').select(
      "Price (high to low)"
    );
    cy.get(".inventory_item").first().should("contain", "49.99");
  });
});
