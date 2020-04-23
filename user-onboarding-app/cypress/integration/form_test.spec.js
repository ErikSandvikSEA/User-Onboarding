import { v4 as uuid } from 'uuid'

const name=uuid().slice(0,5)
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

     })
})