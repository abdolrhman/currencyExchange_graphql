import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import { EXCHANGE_RATES, ExchangeRates } from '../componenets/ExchangeRates';
import React from 'react';

const mocks = [
  {
    request: {
      query: EXCHANGE_RATES,
      variables: {
        currency: 'USD',
        value: 1,
      },
    },
    result: {
      data: {
        currency: { base: 'USD' },
      },
    },
  },
];

it('renders without error', () => {
  const component = TestRenderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <ExchangeRates name="USD" />
    </MockedProvider>,
  );

  const tree = component.toJSON();
  expect(tree.children).toContain('Loading...');
});
