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
Deve aparecer a mensagem "Epic sadface: Username and password do not match any user in this service".

• Sucesso ao fazer login
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'login'
Deve redirecionar para a página de produtos.

• Campo vázio
Dado que o usário esteja tentando realizar o login
E não insira dados no <campo>
Quando clicar em 'login'
Deve aparecer a mensagem 'Epic sadface: <campo> is required'.


• Filtro de A a Z
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "A a Z"
Então aparecerão todos os produtos desse filtro.

• Filtro de Z a A 
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "Z a A"
Então aparecerão todos os produtos desse filtro.

• Filtro de Menor para Maior
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "Menor para Maior"
Então aparecerão todos os produtos desse filtro.

• Filtro de Maior para Menor
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "Maior para menor"
Então aparecerão todos os produtos desse filtro.

• Fazer compra
Dado que o usuário queira comprar um produto
E clique em Add to Card
E clique no carrinho
E clique em "checkout"
E preencha todos os campos com dados válidos
E clique em "continue"
Quando clicar em "finish"
Então aparecerá a mensagem "THANK YOU FOR YOUR ORDER".

• Adicionar produto no carrinho
Dado que o usuário queira comprar um produto
Quando clicar em "add to card"
Então deverá aparecer o número '1' no icone do carrinho.

• Remover produto do carrinho
Dado que o usuário esteja na página de produtos
E queira remover um item do carrinho
Quando clicar em "remove"
Então deve diminuir um número no ícone de carrinho.

• Remover produto do carrinho na página Your cart
Dado que o usuário esteja na página "Your cart"
E queira remover um item
Quando clicar em "remove"
Então o produto deve desaparecer.

• All Items
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "All Items"
Então será redirecionado para a página de produtos.

• About
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "about"
Então será redirecionado para a página "Sauce Labs".

• Logout
Dado que o usuário esteja logado
E clique no menu
Quando clicar em "Logout"
Então será redirecionado para a página de Login.

• Reset app state
Dado que o usuário esteja logado
E tenha itens em seu carrinho
E clique no menu
Quando clicar em "Reset app state"
Então todos os itens que estavam em seu carrinho serão removidos.
```

<br>
Site utilizado: https://www.saucedemo.com/
<h1>
