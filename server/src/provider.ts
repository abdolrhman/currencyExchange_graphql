import { DataSource } from 'apollo-datasource';
import axios from 'axios';
import { QueryCurrencyArgs } from './generated/graphql';

// This is a (sample) collection of currencies we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
// const currencies = [
//   {
//     id: 0,
//     title: 'Harry Potter and the Chamber of Secrets',
//     author: 'J.K. Rowling'
//   },
//   {
//     id: 1,
//     title: 'Jurassic Park',
//     author: 'Michael Crichton'
//   }
// ];

async function getData (currency = '') {
  return axios.get(`https://api.exchangeratesapi.io/latest?base=${currency}`);
}

// This is a (simple) data source which can be used for retrieving
// the sample collection of currencies. This dataSource is injected
// into the context of the apollo server, which makes it usable
// inside the resolvers.
export class CurrenciesProvider extends DataSource {
  public async getCurrency(args: QueryCurrencyArgs) {
    const { currency, value } = args;
    const { data: currencyChangeRates } = await getData(currency);

    Object.keys(currencyChangeRates.rates).forEach(key => {
      currencyChangeRates.rates[key] = currencyChangeRates.rates[key] * value
    })
    console.log('cuu', currencyChangeRates);
    return currencyChangeRates;
  }

  public async getCurrencies() {
    const { data: currencies } = await getData();
    return currencies;
  }
}
