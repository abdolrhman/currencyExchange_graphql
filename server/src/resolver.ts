import { gql } from 'apollo-server';
import { IResolvers } from './generated/graphql';

// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type Rates {
      TRY: Float
      CZK: Float
      RUB: Float
      ISK: Float
      GBP: Float
      CHF: Float
      HRK: Float
      PHP: Float
      CAD: Float
      SGD: Float
      DKK: Float
      BRL: Float
      BGN: Float
      NOK: Float
      CNY: Float
      ZAR: Float
      JPY: Float
      THB: Float
      NZD: Float
      RON: Float
      KRW: Float
      HKD: Float
      MXN: Float
      USD: Float
      ILS: Float
      INR: Float
      SEK: Float
      MYR: Float
      PLN: Float
      AUD: Float
      HUF: Float
      IDR: Float
  }

  # This "Currency" type can be used in other type declarations.
  type Currency {
    base: String
    date: String
    rates: Rates
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    currency(currency: String!, value: Int!): Currency
    currencies: Currency
  }
`;

// Resolvers define the technique for fetching the types in the
// schema.  We'll retrieve currencies from the "currencies" array above.
export const resolvers: IResolvers = {
  Query: {
    currency: (_, args, ctx) =>
      ctx.dataSources.currenciesProvider.getCurrency(args),
    currencies: (_, __, ctx) =>
      ctx.dataSources.currenciesProvider.getCurrencies()
  }
};
