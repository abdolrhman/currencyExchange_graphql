import { DataSource } from 'apollo-datasource';
import axios from 'axios';
import { QueryCurrencyArgs } from './generated/graphql';

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
    return currencyChangeRates;
  }

  public async getCurrencies() {
    const { data: currencies } = await getData();
    return currencies;
  }
}
