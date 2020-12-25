import { gql } from 'apollo-server';
const { typeDefs } = require('../src/resolver');

test('check if type Query has correct fields', () => {
   expect(typeQuery).toBe(gql`
      type Query {
        _: Boolean
      }
   `);
});

test('check if type Person has correct fields', () => {
  expect(typePerson).toBe(gql`
    type Person {
      name: String!
      surname: String!
    }
    extend type Query {
      person: Person!
    }
  `);
});
