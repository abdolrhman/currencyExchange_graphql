import {gql, useQuery} from "@apollo/client";
import React from 'react';

const EXCHANGE_RATES = gql`
    query GetRates ($currency: String!, $value: Int!){
        currency(currency: $currency, value: $value) {
            base,
            date,
            rates {
                TRY,
                CZK
            }
        }
    }

`;

const ExchangeRates = () => {
  const currency = 'USD';
  const value = 1;
  const {loading, error, data} = useQuery(EXCHANGE_RATES, {
    variables: { currency, value }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  // transfer the separated comma object properties, into an array of arrays
  let currencyArr = Object.keys(data.currency.rates).map((key) => [key, data.currency.rates[key]]);
  //remove first element in the array -> __typename: Rates
  currencyArr.shift();
  return currencyArr.map((data) => (
    <p>
      {data[0]}: {data[1]}
    </p>
  ));
}


export default ExchangeRates
