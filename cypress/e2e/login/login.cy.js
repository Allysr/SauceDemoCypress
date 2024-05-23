/// <reference types="cypress" />

import tarefasLogin from "../../support/pagesObjects/login/tarefasLogin";
import validacoesLogin from "../../support/pagesObjects/login/validacoesLogin";

describe("Login", () => {
  
  it("CT01 - Deve realizar login com sucesso com dados válidos.", () => {
    tarefasLogin.realizarLogin("usuario", "senha");
    validacoesLogin.validarRedirecionamentoParaPaginaProdutos();
  });

  context("CT02 - Deve exibir mensagem de falha ao inserir dados inválidos no login.", () => {
    it("Deve falhar ao inserir 'username' inválido", () => {
      tarefasLogin.realizarLogin("usuarioInvalido", "senha");
      validacoesLogin.validarLoginIncorreto();
    });

    it("Deve falhar ao inserir 'password' inválido", () => {
      tarefasLogin.realizarLogin("usuario", "senhaInvalida");
      validacoesLogin.validarLoginIncorreto();
    });
  });

  context("CT03 - Deve exibir erro ao tentar fazer login com campos vazios.", () => {
    it("Deve exibir erro ao tentar fazer login com 'username' vazio", () => {
      tarefasLogin.realizarLogin("senha");
      validacoesLogin.validarUsuarioObrigatorio();
    });

    it("Deve exibir erro ao tentar fazer login com 'password' vazio", () => {
      tarefasLogin.realizarLogin("usuario");
      validacoesLogin.validarSenhaObrigatoria();
    });
  });
});