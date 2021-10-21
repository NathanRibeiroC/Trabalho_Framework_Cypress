import googlePageElements from '../elements/gmailSignUpPageElements'
const googlePageE = new googlePageElements

class googlePage {
    // Acessa o site que será testado
    acessGooglePage() {
        cy.visit(googlePageE.urlGooglePage())
    }

    typeOnNameField(nome){
        cy.get(googlePageE.nameInput()).type(nome)
    }

    typeOnLastNameField(nome){
        cy.get(googlePageE.lastNameInput()).type(nome)
    }

    checkUserNameFieldNotEmpty(){
        cy.get(googlePageE.userNameInput()).invoke('val').should('not.be.empty')
    }
    
    typeOnPasswordField(senha){
        cy.get(googlePageE.passwordInput()).type(senha)
    }   

    clicarBotaoProxima(){
        cy.get(googlePageE.botaoProxima()).click()
    }

    verifyNotificationExceptionSenha(){
        cy.get(googlePageE.notificacaoExceptionSenha())
    }

    typeOnConfirmPasswordField(senha){
        cy.get(googlePageE.passwordConfirmInput()).type(senha)
    }
    // // Clica no botão que acessa a página de login do site
    // clicarBotaoPaginaLogin() {
    //     cy.get(loginElements.botaoLogin()).click()
    // }
  
    // // Verifica se o botão tem o texto "Esqueceu sua senha?"
    // visualizarBotaoRecuperarSenha() {
    //     cy.get(loginElements.botaoRecuperarSenha()).should('contain', 'Esqueceu sua senha?')
    // }
}

export default googlePage;