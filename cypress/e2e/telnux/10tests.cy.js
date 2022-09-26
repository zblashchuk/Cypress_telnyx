/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
import "cypress-real-events/support";
const { generateUser } = require("/home/runner/work/Cypress_telnyx/Cypress_telnyx/cypress/support/generate.js");

describe ('Window', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
    cy.get('div')
        .then(($div) => {
          let acceptCookie = $div.find('.sc-df34c536-1');
          if (acceptCookie.length !== 0) {
            cy.contains('Accept and close').click()
          } })
        });
  
  it('1 Check API Pricing for Germany', () => {
  const country = 'Germany'
  cy.getMainMemuElement('Pricing').realHover().wait(500)
  cy.getDropdownMenuItem('See all Pricing').wait(500).click({force: true})
  .getPricing('Voice API').click()
  .dropdownCountryPricing(country).should('contain', country)
 });

it('2check that user should get sign up page by click on sign up button', () => {
    cy.getMainMemuElement('Sign up').click()
    cy.url().should('include', '/sign-up')
  })

  it('3check that user should register by by valid data', () => {
    cy.getMainMemuElement('Sign up').click()
  cy.signUp_VerifyEmail()
})

it('4check that user should not login with data which was not used for register before', () => {
  cy.getTopMemuElement('Log In')
  cy.signIn()

})

it('5use requests to navigation bar links for Company item in Menu', () => {
  const pages = ['About Telnyx', 'Careers', 'Partners', 'Integrations']
  cy.getMainMemuElement('Company').realHover()
   pages.forEach(page => {
     cy
        .contains(page)
        .then((link) => {
        cy.request(link.prop('href'))
  })
});
})

it('6dropdown menu is visible when move to items main menu', () => {
  const pages = ['Products', 'Solutions', 'Resources', 'Company', 'Pricing']
  pages.forEach(page => {
     cy.getMainMemuElement(page)
     .realHover()
     .wait(500)
     cy.dropDownMenuVisible(page)
     .should('be.visible')  
      })
    });

it('7dropdown menu is visible when move to items main menu', () => {
  cy.getTopMemuElement('Support')
  cy.checkSearchField('SMS')
    });

it('8 Talk to an expert', () => {
  cy.getMainMemuElement('Talk to an expert')
  .click()
  .talkToExpert()
            });

it('9 join To Waist List', () => {
      cy.joinToWaistList()
      cy.url()
      .should('include', '/products/storage-waitlist')
  });

it('10 should not register with empty require fields', () => {
  cy
  .getMainMemuElement('Sign up').click()
  .signUp_emptyFields()
  cy.url()
  .should('include', '/sign-up')               
     });    
})

