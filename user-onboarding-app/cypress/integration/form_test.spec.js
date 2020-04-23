import { v4 as uuid } from 'uuid'

describe('Friends Form', () => {
     it('can navigate to the site', () => {
          cy.visit(`http://localhost:3000/`)
          cy.url().should(`include`, `localhost`)
     })
})