<h1 align="center">
<br> Estudo de Cypress no site Sauce Demo
</h1>


<div align="center">
<img width="800px" alt="Site para testes automatizados CuraHealthcare" src="https://i.imgur.com/hJSmZi3.png" />
</div>
<br>


<h4 align="center">
  Alguns BDD's usados para realização dos testes no cypress:
</h4>

```diff  
• Falha ao fazer login
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'login'
Então deve aparecer a mensagem "Epic sadface: Username and password do not match any user in this service".

• Sucesso ao fazer login
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'login'
Então deve redirecionar para a página de produtos.

• Campo vázio
Dado que o usário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'login'
Então deve aparecer a mensagem 'Epic sadface: <campo> is required'.


• Filtro de A a Z
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "A a Z"
Então devem aparecer todos os produtos desse filtro.

• Filtro de Z a A 
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Z a A"
Então devem aparecer todos os produtos desse filtro.

• Filtro de Menor para Maior
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Menor para Maior"
Então devem aparecer todos os produtos desse filtro.

• Filtro de Maior para Menor
Dado que o usuário esteja na página de produtos
E acionar o filtro na tela de listagem
Quando clicar no filtro de "Maior para menor"
Então devem aparecer todos os produtos desse filtro.

• Fazer compra
Dado que o usuário queira comprar um produto
E clique em Add to Card
E clique no carrinho
E clique em "checkout"
E preencha todos os campos com dados válidos
E clique em "continue"
Quando clicar em "finish"
Então deve aparecer a mensagem "THANK YOU FOR YOUR ORDER".

• Adicionar produto no carrinho
Dado que o usuário queira comprar um produto
Quando clicar em "add to card"
Então deve aparecer o número '1' no icone do carrinho.

• Remover produto do carrinho
Dado que o usuário esteja na página de produtos
E queira remover um item do carrinho
Quando clicar em "remove"
Então deve diminuir um número no ícone de carrinho.

• Remover produto do carrinho na página Your cart
Dado que o usuário esteja na página "Your cart"
E queira remover um item
Quando clicar em "remove"
Então deve ser removido o item.

• All Items
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "All Items"
Então deve ser redirecionado para a página de produtos.

• About
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "about"
Então deve ser redirecionado para a página "Sauce Labs".

• Logout
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "Logout"
Então deve ser redirecionado para a página de Login.

• Reset app state
Dado que o usuário esteja logado
E tenha itens em seu carrinho
E clique no menu
Quando clicar em "Reset app state"
Então devem ser removidos todos os itens que estavam no carrinho.
```

<br>
Site utilizado: https://www.saucedemo.com/
<h1>
