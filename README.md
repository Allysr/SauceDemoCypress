<h1 align="center">
<br> Estudo de Cypress no site Sauce Demo
</h1>

<h4 align="center">
  Alguns BDD's usados para realização dos testes no cypress
</h4>

<h1 align="center">
Falha ao fazer login
Dado que o usuário tenha cadastro
E insira nome ou senha inválidos
Quando clicar 'login'
Deve aparecer a mensagem "Epic sadface: Username and password do not match any user in this service"

Sucesso ao fazer login
Dado que o usuário tenha cadastro
E insira os dados válidos
Quando clicar em 'login'
Deve redirecionar para a página de produtos

Filtro de A a Z
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "A a Z"
Então aparecerão todos os produtos desse filtro

Filtro de Z a A 
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "Z a A"
Então aparecerão todos os produtos desse filtro

Filtro de Menor para Maior
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "Menor para Maior"
Então aparecerão todos os produtos desse filtro

Filtro de Maior para Menor
Dado que o usuário esteja na página de produtos
Quando acionar o filtro na tela de listagem
E clicar no filtro de "Maior para menor"
Então aparecerão todos os produtos desse filtro

Fazer compra
Dado que o usuário queira comprar um produto
E clique em Add to Card
E clique no carrinho
E clique em "checkout"
E preencha todos os campos com dados válidos
E clique em "continue"
Quando clicar em "finish"
Então aparecerá a mensagem "THANK YOU FOR YOUR ORDER"

Remover produto do carrinho
Dado que o usuário esteja na página de produtos
E queira remover um item do carrinho
Quando clicar em "remove"
Então deve diminuir um número no ícone de carrinho

Remover produto do carrinho na página Your cart
Dado que o usuário esteja na página "Your cart"
E queira remover um item
Quando clicar em "remove"
Então o produto deve desaparecer 
</h1>

<br>
Site utilizado: https://www.saucedemo.com/
<h1>