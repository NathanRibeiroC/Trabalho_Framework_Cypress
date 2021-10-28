import { Given, And, When, Then} from 'cypress-cucumber-preprocessor/steps';
import * as user from './actions';
import diabloSite from '../../support/pageobjects/diabloSite'
const diabloAgePage = new diabloSite

Given('Acessei ao site diablo:{string}', (url) => {
    if (url=="página verificação de idade"){
        diabloAgePage.acessDiabloSiteAgeSelection()
    }
    else if(url=="página verificação preço de jogo"){
        diabloAgePage.acessDiabloSiteGamePriceSection()        
    }
    else if(url=="página calculadora"){
        diabloAgePage.acessDiabloSiteCalculator()       
    }
    else if(url=="main menu"){
        diabloAgePage.acessarMainMenu()
    }
    cy.wait(500)
});

When('Inserir dia:{string}', (day) => {
    diabloAgePage.selectDay(day)
    cy.wait(500)
});

When('Acessar menu compra', () => {
    diabloAgePage.acessarMenuCompra()
    cy.wait(500)
});

And('Clicar botao xbox', () => {
    diabloAgePage.clickXboxButton()
    cy.wait(500)    
});

And('Clicar botao ps4', () => {
    diabloAgePage.clickPs4Button()
    cy.wait(20000)    
});

And("click botao calculadora:{string}", (botao) => {
    if(botao=="botão1"){
        diabloAgePage.clickButton1Calculadora()
    }
    else if(botao=="botão2"){
        diabloAgePage.clickButton2Calculadora()
        cy.get('.alert-icon').click()
    }
    else if(botao=="botão3"){
        diabloAgePage.clickButton3Calculadora()
    }
    else if(botao=="botão4"){
        diabloAgePage.clickButton4Calculadora()
    }
});

When("Click menu game", () => {
    diabloAgePage.clickMenuGame()
    cy.wait(500)
});

And("Click sobre game", () => {
    diabloAgePage.clickSobreGame()
    cy.wait(500)
});

And('Inserir dia:{string}', (day) => {
    diabloAgePage.selectDay(day)
    cy.wait(500)
});

And('Inserir mês:{string}', (mon) => {
    diabloAgePage.selectMonth(mon)
    cy.wait(500)
});

And('Inserir ano:{string}', (y) => {
    diabloAgePage.selectYear(y)
    cy.wait(500)
});

And('Pressionar botao de confirmação', () => {
    diabloAgePage.clickButtonRight()
    cy.wait(500)
});

And('Scroll window', () => {
    diabloAgePage.scrollWindow()
    cy.wait(500)
});

Then('Permissão deve aparecer:{string}', (notification) => {
    diabloAgePage.verifyAgeSelection(notification)
});

Then('Verificar preco xbox:{string}', (price) => {
    diabloAgePage.verifyXboxPrice(price)
});

Then('Verificar preco ps4:{string}', (price) => {
    diabloAgePage.verifyPs4Price(price)
});

Then('verifica soma:{string}', (soma) => {
    diabloAgePage.verificaNivelRequerido(soma)
});

Then('Confirma existencia botao play', () => {
    diabloAgePage.confirmButonPlayExistance()
});
