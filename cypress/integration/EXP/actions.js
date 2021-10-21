//EXAMPLE FOR CALENDAR
import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';
import googlePagePO from '../../support/pageobjects/gmailSignUpPage'
const googlePage = new googlePagePO

Given('Acessei ao site de criação de conta do Gmail', () => {
    googlePage.acessGooglePage()
    cy.wait(500)
});

When('Inserir "Nome":{string}', (nome) => {
    googlePage.typeOnNameField(nome)
    cy.wait(500)   
});

And('Inserir "Sobrenome":{string}', (sobreNome) => {
    googlePage.typeOnLastNameField(sobreNome)
    cy.wait(10)
});

And('Checar que campo "Username" não está vazio', () => {
    googlePage.checkUserNameFieldNotEmpty()
    cy.wait(500)
});

And('Inserir "Password":{string}', (password) => {
    googlePage.typeOnPasswordField(password)
    cy.wait(500)
});

And('Inserir "Confirm Password":{string}', (password) => {
    googlePage.typeOnConfirmPasswordField(password)
    cy.wait(500)
});

And('Clicar botão "Próxima"', () => {
    googlePage.clicarBotaoProxima()
    cy.wait(500)
});

Then('Deve aparecer uma notificação informando ausência de preenchimento do campo de confirmação de senha', () => {
    googlePage.verifyNotificationExceptionSenha()
});

