import { useQuery, gql } from '@apollo/client';

const EXCHANGE_RATES = gql`
    query GetRates {
        currency(currency: "USD", value: 15) {
        base,
        date,
        rates {
          TRY,
          CZK
        }
        }
      }
  
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  const currencyArr = Object.keys(data.currency.rates).map((key) => [key, data.currency.rates[key]]);
  return currencyArr.map((date ) => (
    <p>
      {data[0]}: {data[1]}
    </p>
  ));
}

export {ExchangeRates}
