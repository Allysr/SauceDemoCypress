/// <reference types="cypress" />

import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import validacoesLogin from "../../support/pagesObjects/login/validacoesLogin";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("CT01 - Validar se ao inserir dados validos o login será bem-sucedido.", () => {
    tarefasLogin.realizarLogin("usuario", "senha");
    validacoesLogin.validarRedirecionamentoParaPaginaProdutos();
  });

  context(
    "CT02 - Validar se ao inserir dados inválidos no login aparecerá uma mensagem de falha.",
    () => {
      it("Falha no campo 'username'", () => {
        tarefasLogin.realizarLogin("usuarioInvalido", "senha");
        validacoesLogin.validarLoginIncorreto();
      });

      it("Falha no campo 'password'", () => {
        tarefasLogin.realizarLogin("usuario", "senhaInvalida");
        validacoesLogin.validarLoginIncorreto();
      });
    }
  );

  context(
    "Validar se ao clicar em login com os campos vazios terá um erro.",
    () => {
      it("Campo 'username' vazio", () => {
        tarefasLogin.preencherUsuario("usuario");
        validacoesLogin.validarSenhaObrigatoria();
      });

      it("Campo 'password' vazio", () => {
        tarefasLogin.preencherSenha("senha");
        validacoesLogin.validarUsuarioObrigatorio();
      });
    }
  );
});
