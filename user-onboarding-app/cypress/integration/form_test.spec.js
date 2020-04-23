import { v4 as uuid } from 'uuid'

const name=uuid().slice(0,5)
const errorUserName = `B`
const nameErrorInput = 'nameErrorInput'
const nameTooShortErrorMessage = 'Name must have at least 3 characters'
const nameEmptyErrorMessage = 'Name is required'
const email = `${name}@helloworld.com`
const password = `A!23abc`
const termsOfService = 'termsOfServiceCheckbox'


describe('Friends Form', () => {
     it('can navigate to the site', () => {
          cy.visit(`http://localhost:3000/`)
          cy.url().should(`include`, `localhost`)
     })

     it('can submit a friend (happy path)', () => {
          cy.get(`[data-cyName='firstNameInput']`)
               .type(name)
               .should(`have.value`, name)

          cy.get(`[data-cyName='emailInput']`)
               .type(email)
               .should(`have.value`, email)

          cy.get(`[data-cyName='passwordInput']`)
               .type(password)
               .should(`have.value`, password)

          cy.get(`[data-cyName='${termsOfService}']`)
               .check()
               .should(`have.checked`)

          cy.get(`[data-cyName='submitButton']`)
               .click()

     })

     it('has validation error if username < 3 chars', () => {
          // capture the input

          cy.get(`[data-cyName='firstNameInput']`)
          .type(errorUserName)

          cy.get(`[data-cyName='${nameErrorInput}']`)
               .contains(nameTooShortErrorMessage)
      

          // type one char 'a'
          // assert that the value is 'a'
          // find the validation error
      
          // type another char 'b'
          // assert that the value is now 'ab'
          // find the validation error
      
          // type another char 'c'
          // assert that the value is now 'abc'
          // assert that the error NOT THERE ANY MORE
      
          // .should('not.exist') // HINT
        })

     it('has validation error if name is empty', () => {
        cy.get(`[data-cyName='firstNameInput']`)
          .type(errorUserName)

          cy.get(`[data-cyName='${nameErrorInput}']`)
               .contains(nameTooShortErrorMessage)
      
          cy.get(`[data-cyName='firstNameInput']`)
               .type('{selectall}')
               .type('{backspace}')

          cy.get(`[data-cyName='${nameErrorInput}']`)
               .contains(nameEmptyErrorMessage)

     })
})