/// <reference types="cypress" />

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Sucesso ao realizar login", () => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
    cy.get(".title").contains("Products").should("be.visible");
  });

  context("Falha ao fazer login", () => {
    it("Falha no campo 'username'", () => {
      cy.get('[data-test="username"]').type("Erro");
      cy.get('[data-test="password"]').type(Cypress.env("password"));
      cy.get('[data-test="login-button"]').click();
      cy.get('h3[data-test="error"]')
        .contains(
          "Epic sadface: Username and password do not match any user in this service"
        )
        .should("be.visible");
    });

    it("Falha no campo 'password'", () => {
      cy.get('[data-test="username"]').type(Cypress.env("username"));
      cy.get('[data-test="password"]').type("Erro");
      cy.get('[data-test="login-button"]').click();
      cy.get('h3[data-test="error"]')
        .contains(
          "Epic sadface: Username and password do not match any user in this service"
        )
        .should("be.visible");
    });
  });

  context("Campo vázio", () => {
    it("Campo 'username' vazio", () => {
      cy.get('[data-test="password"]').type(Cypress.env("password"));
      cy.get('[data-test="login-button"]').click();
      cy.get('h3[data-test="error"]')
        .contains("Epic sadface: Username is required")
        .should("be.visible");
    });

    it("Campo 'password' vazio", () => {
      cy.get('[data-test="password"]').type(Cypress.env("password"));
      cy.get('[data-test="login-button"]').click();
      cy.get('h3[data-test="error"]')
        .contains("Epic sadface: Username is required")
        .should("be.visible");
    });
  });
});
