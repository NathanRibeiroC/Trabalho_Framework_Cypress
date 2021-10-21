Feature: Criação de uma conta no Gmail
    @C214
    Scenario: Tentar criar uma conta sem preencher campo obrigatório
        Given Acessei ao site de criação de conta do Gmail
        When Inserir "Nome":"José Manuel"
        And Inserir "Sobrenome":"Souza Castellanos"
        And Checar que campo "Username" não está vazio
        And Inserir "Password":"JoseManuElSouza#1837"
        And Clicar botão "Próxima"
        Then Deve aparecer uma notificação informando ausência de preenchimento do campo de confirmação de senha

    @C214
    Scenario Outline: Tentar várias tentativas de senha
        Given Acessei ao site de criação de conta do Gmail
        When Inserir "Nome":"José Manuel"
        And Inserir "Sobrenome":"Souza Castellanos"
        And Checar que campo "Username" não está vazio
        And Inserir "Password":<password>
        And Inserir "Confirm Password":<password>
        And Clicar botão "Próxima"
        Then Deve aparecer uma notificação informando ausência de preenchimento do campo de confirmação de senha
        Examples: 
        |password|
        |"123456"|
        |"$%&*"|
        |"()()"|

