import { elementosLogin } from "./elementosLogin";

class TarefasLogin {
  realizarLogin(usuario, senha) {
    cy.visit("/");
    cy.get(elementosLogin.inputUsuario).type(Cypress.env(usuario));
    cy.get(elementosLogin.inputSenha).type(Cypress.env(senha));
    cy.get(elementosLogin.botaoLogin).click();
  }

  preencherSenha(senha) {
    cy.get(elementosLogin.inputSenha).type(Cypress.env(senha));
    cy.get(elementosLogin.botaoLogin).click();
  }

  preencherUsuario(usuario) {
    cy.get(elementosLogin.inputUsuario).type(Cypress.env(usuario));
    cy.get(elementosLogin.botaoLogin).click();
  }
}

export default new TarefasLogin();
