import { elementosCarrinho } from "./elementosCarrinho";

class TarefasCarrinho {
  removerItemCarrinho() {
    cy.get(elementosCarrinho.botaoRemoverItem).click();
  }
}

export default new TarefasCarrinho();
