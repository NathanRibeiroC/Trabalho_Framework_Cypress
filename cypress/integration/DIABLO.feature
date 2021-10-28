Feature: Funcionalidades site diablo

    @C214
    Scenario: Verificação de idade não permitida
        Given Acessei ao site diablo:"página verificação de idade"
        When Inserir dia:"31"
        And Inserir mês:"Agosto"
        And Inserir ano:"2016"
        And Pressionar botao de confirmação
        Then Permissão deve aparecer:"Você não tem permissão para visualizar este site no momento."

    @C214
    Scenario: Verificação de idade permitida
        Given Acessei ao site diablo:"página verificação de idade"
        When Inserir dia:"31"
        And Inserir mês:"Agosto"
        And Inserir ano:"1999"
        And Pressionar botao de confirmação
        Then Permissão deve aparecer:"Arcanista"
    
    # @C214
    # Scenario: Verificação preço XBOX
    #     Given Acessei ao site diablo:"página verificação preço de jogo"
    #     When Acessar menu compra
    #     And Scroll window
    #     And Clicar botao xbox
    #     Then Verificar preco xbox:"R$199,00+"

    # @C214
    # Scenario: Verificação preço PS4
    #     Given Acessei ao site diablo:"página verificação preço de jogo"
    #     When Acessar menu compra
    #     And Scroll window
    #     And Clicar botao ps4
    #     Then Verificar preco ps4:"R$ 249,00"

    @C214
    Scenario: Verificação funcionamento da Calculadora
        Given Acessei ao site diablo:"página calculadora"
        And click botao calculadora:"botão1"
        And click botao calculadora:"botão2"
        And click botao calculadora:"botão3"
        And click botao calculadora:"botão4"
        Then verifica soma:"20"

    @C214
    Scenario: Verificação funcionamento do vídeo
        Given Acessei ao site diablo:"main menu"
        When Click menu game
        And Click sobre game
        And Inserir dia:"31"
        And Inserir mês:"Agosto"
        And Inserir ano:"1999"
        And Pressionar botao de confirmação
        Then Confirma existencia botao play
        

