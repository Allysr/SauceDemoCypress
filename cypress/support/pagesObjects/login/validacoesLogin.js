import { elementosProdutos } from "../produtos/elementosProdutos";
import { elementosLogin } from "./elementosLogin";

class ValidacoesLogin {
  validarRedirecionamentoParaPaginaProdutos() {
    cy.get(elementosProdutos.tituloPaginaProdutos)
      .contains("Products")
      .should("be.visible");
  }

  validarLoginIncorreto() {
    cy.get(elementosLogin.mensagemLoginIncorreto)
      .contains(
        "Epic sadface: Username and password do not match any user in this service"
      )
      .should("be.visible");
  }

  validarUsuarioObrigatorio() {
    cy.get(elementosLogin.mensagemLoginIncorreto)
      .contains(
        "Epic sadface: Username is required"
      )
      .should("be.visible");
  }

  validarSenhaObrigatoria() {
    cy.get(elementosLogin.mensagemLoginIncorreto)
      .contains(
        "Epic sadface: Password is required"
      )
      .should("be.visible");
  }

}

export default new ValidacoesLogin();
