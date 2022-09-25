// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress-xpath" />
const { generateUser } = require("/home/runner/work/Cypress_telnyx/Cypress_telnyx/cypress/support/generate.js");
Cypress.Commands.add('getMainMemuElement', (MainMemuElement) => {
  cy.xpath(`// header // div // ul // li [contains(.,"${MainMemuElement}")]`);
});

Cypress.Commands.add('getTopMemuElement', (TopMemuElement) => {
  cy.xpath(`// a[@class="sc-f97529d6-0 bjUuRN Text-sc-5o8owa-0 sc-28d89a84-0 frufKM blLdCs mchNoDecorate"][contains(.,"${TopMemuElement}")]`).click();
});

Cypress.Commands.add('signUp_VerifyEmail', () => {
  const {email, firstName, password} = generateUser();
  //cy.visit('/sign-up')
  cy.get('#email')
    .type(email)

    cy.get('#full_name')
    .type(firstName)

    cy.get('#password')
    .type(password)

    cy.get('.sc-26f7330-5 > .sc-e117dd75-0 > svg > rect')
    .click()

    cy.get('[type="submit"]')
    .click();

    cy.get('[class="sc-81d2e95d-0 kJhPEq"]').should('contain', email)
    cy.url().should('include', '/verify-email')
 })

 Cypress.Commands.add('signUp_emptyFields', () => {

    cy.get('[type="submit"]')
    .click();
    cy.get('.sc-1e9319a3-2.gjkoxd').should('contain', 'This field is required.')
 })

 Cypress.Commands.add('signIn', () => {
  const {email, password} = generateUser();
  
  cy.get('[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] [name="email"]')
    .type(email)

    cy.get('[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] [name="password"]')
    .type(password)

    cy.get('[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]')
    .click();

    cy.get('[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]').should('contain', 'That email and password combination is not valid, ')
    cy.url().should('include', '/sign-in')
 })

Cypress.Commands.add('dropDownMenuVisible', (MainMemuElement) => {
  cy.xpath(`//li [contains(.,"${MainMemuElement}")] // div [@class="sc-14c941d7-1 sc-7b3980dc-4 jTyFqK denEOW"] // div [@class="sc-7b3980dc-9 ctVOEX"]`)
 })

 Cypress.Commands.add('checkSearchField', (data) => {
  cy.get('[placeholder="Search for articles..."]')
  .type(data)
  .type('{enter}')

  const searchlist = [cy.get('div>[class="t__h3"]')]

  searchlist.forEach(item => {
    item.should('contain', 'SMS')  
      })
    })

  Cypress.Commands.add('getDropdownMenuItem', (item) => {
    cy.xpath(`// span[contains(., "${item}")]`)
    
  })
Cypress.Commands.add('getPricing', (product) => {
  cy.xpath(`// div[@class="sc-b3b3ecae-0 cNquRU" and contains(., '${product}')] // a[contains(., 'See Pricing')]`)
})
Cypress.Commands.add('dropdownCountryPricing', (country) => {
  cy.xpath('// div[@class="sc-ecffda1a-4 dCDohY"] // span[@class="sc-3ccaa17d-0 jGFDkY"] [contains(., "United")]')
  .click()
  .wait(500)

  cy.get('[class="sc-24b6e351-0 dvgaUI"]').type(country)
  .wait(500)
  .type('{enter}')

  cy.get('[class="sc-7894861d-0 dZOOEV"] [class="sc-3ccaa17d-0 jGFDkY"]')
 })

Cypress.Commands.add('talkToExpert', () => {
  const {firstName, lastName, email, randReasonForContact} = generateUser();
        
  cy.get('#Reason_for_Contact__c')
    .select(randReasonForContact)
      
  cy.get('#FirstName')
  .type(firstName)
      
  cy.get('#LastName')
  .type(lastName);

  cy.get('#Email')
  .type(email);
          
  cy.get('#Website')
  .type('http://www.example.com/');

  cy.get('.sc-fe4a45f0-6.jFCuMy')
  .then(($form) => {
  let caseForm = $form.find('#Use_Case_Form__c');
  if (caseForm.length !== 0) {
     cy.get('#Use_Case_Form__c')
    .select('Video')
  } })

   cy.get('.mktoButton')
    .click();
    cy.url().should('include', `thank-you?userEmail=${firstName}`)
       })
Cypress.Commands.add('joinToWaistList', () => {
const {firstName, lastName, email} = generateUser();
        
cy.get('header span [href="/products/storage"]')
  .click()
   cy.get('.sc-31a8cefb-10 > .sc-5d3a275a-0 > .sc-5d3a275a-1')
  .click({force: true})
      
  cy.get('#FirstName')
  .type(firstName)
      
  cy.get('#LastName')
          .type(lastName);

  cy.get('#Email')
  .type(email);
          
  cy.get('[ type="submit"]')
          .click();

}) 
      



