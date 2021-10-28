import diabloSiteElements from "../elements/diabloSiteElements";
const diabloE = new diabloSiteElements

class diabloSite{
    acessDiabloSiteAgeSelection(){
        cy.visit(diabloE.urlDiabloAgePage())
    }

    acessDiabloSiteGamePriceSection(){
        cy.visit(diabloE.urlDiabloGamePrice())
    }   

    acessDiabloSiteCalculator(){
        cy.visit(diabloE.urlDiabloCalculadora())
    }   

    acessarMenuCompra(){
        cy.get(diabloE.menuPurchase()).click()
    }

    acessarMainMenu(){
        cy.visit(diabloE.urlDiabloMainMenu())
    }

    clickXboxButton(){
        cy.get(diabloE.butonXbox()).click()
    }

    clickPs4Button(){
        cy.get(diabloE.butonPs4()).click()
    }

    clickButton1Calculadora(){
        cy.get(diabloE.buton1Calculadora()).click()
    }

    clickButton2Calculadora(){
        cy.get(diabloE.buton2Calculadora()).click()
    }

    clickButton3Calculadora(){
        cy.get(diabloE.buton3Calculadora()).click()
    }

    clickButton4Calculadora(){
        cy.get(diabloE.buton4Calculadora()).click()
    }

    clickMenuGame(){
        cy.get(diabloE.menuGame()).click()
    }

    clickSobreGame(){
        cy.get(diabloE.butonSobreGame()).click()
    }

    verifyXboxPrice(price){
        cy.get(diabloE.xboxPrice()).should('contain.text',price)
    }

    verifyPs4Price(price){
        cy.get(diabloE.ps4Price()).should('contain.text',price)
    }

    selectDay(day){
        cy.get(diabloE.daySelector()).select(day)
    }

    selectMonth(mon){
        cy.get(diabloE.monthSelector()).select(mon)
    }

    selectYear(year){
        cy.get(diabloE.yearSelector()).select(year)
    }

    scrollWindow(){
        cy.scrollTo(0,500)
    }

    clickButtonRight(){
        cy.get(diabloE.buttonRight()).click()
    }

    verifyAgeSelection(text){
        if (text == "Você não tem permissão para visualizar este site no momento."){
            cy.get(diabloE.headerAgeFail()).should('have.text', text)
        }
        else{
            cy.get(diabloE.headerAgePass()).should('have.text', text)
        }
    }

    verificaNivelRequerido(soma){
        cy.get(diabloE.nivelRequeridoLabel()).should('contain.text',soma);
    }

    confirmButonPlayExistance(){
        cy.get(diabloE.butonPlayVideo()).click();
        cy.get(diabloE.butonPlayVideo()).should('exist');       
    }

}

export default diabloSite