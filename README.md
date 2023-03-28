<h1 align="center">
<br> Estudo de Cypress no site Sauce Demo
</h1>


<div align="center">
<img width="800px" alt="Site para testes automatizados CuraHealthcare" src="https://i.imgur.com/hJSmZi3.png" />
</div>
<br>


<h4 align="center">
  Alguns cenários usados para realização dos testes no cypress:
</h4>

```diff  
• Validar se ao inserir dados validos o login será bem-sucedido.
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'login'
Então deve redirecionar para a página de produtos.

• Validar se ao inserir dados inválidos no login aparecerá uma mensagem de falha.
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'login'
Então deve aparecer a mensagem "Epic sadface: Username and password do not match any user in this service".

• Validar se ao clicar em login com os campos vazios terá um erro.
Dado que o usário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'login'
Então deve aparecer a mensagem 'Epic sadface: <campo> is required'.


• Validar se ao filtrar por Filtro de A a Z terá o resultado ordenado.
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "A a Z"
Então devem aparecer todos os produtos desse filtro.

• Validar se ao filtrar po Filtro de Z a A terá o resultado ordenado.
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Z a A"
Então devem aparecer todos os produtos desse filtro.

• Validar se ao filtrar por Menor para Maior terá o resultado ordenado.
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Menor para Maior"
Então devem aparecer todos os produtos desse filtro.

• Validar se ao filtrar por Maior para Menor  terá o resultado ordenado.
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Maior para menor"
Então devem aparecer todos os produtos desse filtro.


• Validar se ao realizar os passos corretos a compra terá sucesso.
Dado que o usuário queira comprar um produto
E clique em Add to Card
E clique no carrinho
E clique em "checkout"
E preencha todos os campos com dados válidos
E clique em "continue"
Quando clicar em "finish"
Então deve aparecer a mensagem "THANK YOU FOR YOUR ORDER".

• Validar se ao clicar em add to card o produto aparerá no carrinho.
Dado que o usuário queira comprar um produto
Quando clicar em "add to card"
Então deve aparecer o número '1' no icone do carrinho.

• Validar se ao clicar em remove o produto sairá do carrinho.
Dado que o usuário esteja na página de produtos
E queira remover um item do carrinho
Quando clicar em "remove"
Então deve diminuir um número no ícone de carrinho.

• Validar se ao clicar em remove o produto sairá da listagem.
Dado que o usuário esteja na página "Your cart"
E queira remover um item
Quando clicar em "remove"
Então deve ser removido o item.


• Validar se ao clicar em All Items irá para a tela de produtos.
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "All Items"
Então deve ser redirecionado para a página de produtos.

• Validar se ao clicar em About irá para a tela sauce labs.
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "about"
Então deve ser redirecionado para a página "Sauce Labs".

• Validar se ao clicar em Logout irá para a tela de login.
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "Logout"
Então deve ser redirecionado para a página de Login.

• Validar se ao clicar em reset app state o carrinho esvaziará.
Dado que o usuário esteja logado
E tenha itens em seu carrinho
E clique no menu
Quando clicar em "Reset app state"
Então devem ser removidos todos os itens que estavam no carrinho.
```

<br>
Site utilizado: https://www.saucedemo.com/
<h1>
