/// <reference types="cypress"/>

describe("Filter ", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });


  it("Validar se ao filtrar por Filtro de A a Z terá o resultado ordenado.", () => {
    cy.get('[data-test="product_sort_container"]').select("Name (A to Z)");
    cy.get(".inventory_item").first().should("contain", "Sauce Labs Backpack");
  });

  it("Validar se ao filtrar po Filtro de Z a A terá o resultado ordenado.", () => {
    cy.get('[data-test="product_sort_container"]').select("Name (Z to A)");
    cy.get(".inventory_item")
      .first()
      .should("contain", "Test.allTheThings() T-Shirt (Red)");
  });

  it("Validar se ao filtrar por Menor para Maior terá o resultado ordenado. ", () => {
    cy.get('[data-test="product_sort_container"]').select(
      "Price (low to high)"
    );
    cy.get(".inventory_item").first().should("contain", "7.99");
  });

  it("Validar se ao filtrar por Maior para Menor  terá o resultado ordenado. ", () => {
    cy.get('[data-test="product_sort_container"]').select(
      "Price (high to low)"
    );
    cy.get(".inventory_item").first().should("contain", "49.99");
  });
});
