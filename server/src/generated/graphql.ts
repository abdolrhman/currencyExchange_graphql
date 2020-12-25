/* tslint:disable */
import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../index';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Currency = {
   __typename?: 'Currency',
  base?: Maybe<Scalars['String']>,
  date?: Maybe<Scalars['String']>,
  rates?: Maybe<Rates>,
};

export type Query = {
   __typename?: 'Query',
  currency?: Maybe<Currency>,
  currencies?: Maybe<Currency>,
};


export type QueryCurrencyArgs = {
  currency: Scalars['String'],
  value: Scalars['Int']
};

export type Rates = {
   __typename?: 'Rates',
  TRY?: Maybe<Scalars['Float']>,
  CZK?: Maybe<Scalars['Float']>,
  RUB?: Maybe<Scalars['Float']>,
  ISK?: Maybe<Scalars['Float']>,
  GBP?: Maybe<Scalars['Float']>,
  CHF?: Maybe<Scalars['Float']>,
  HRK?: Maybe<Scalars['Float']>,
  PHP?: Maybe<Scalars['Float']>,
  CAD?: Maybe<Scalars['Float']>,
  SGD?: Maybe<Scalars['Float']>,
  DKK?: Maybe<Scalars['Float']>,
  BRL?: Maybe<Scalars['Float']>,
  BGN?: Maybe<Scalars['Float']>,
  NOK?: Maybe<Scalars['Float']>,
  CNY?: Maybe<Scalars['Float']>,
  ZAR?: Maybe<Scalars['Float']>,
  JPY?: Maybe<Scalars['Float']>,
  THB?: Maybe<Scalars['Float']>,
  NZD?: Maybe<Scalars['Float']>,
  RON?: Maybe<Scalars['Float']>,
  KRW?: Maybe<Scalars['Float']>,
  HKD?: Maybe<Scalars['Float']>,
  MXN?: Maybe<Scalars['Float']>,
  USD?: Maybe<Scalars['Float']>,
  ILS?: Maybe<Scalars['Float']>,
  INR?: Maybe<Scalars['Float']>,
  SEK?: Maybe<Scalars['Float']>,
  MYR?: Maybe<Scalars['Float']>,
  PLN?: Maybe<Scalars['Float']>,
  AUD?: Maybe<Scalars['Float']>,
  HUF?: Maybe<Scalars['Float']>,
  IDR?: Maybe<Scalars['Float']>,
};


export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  Currency: ResolverTypeWrapper<Currency>,
  Rates: ResolverTypeWrapper<Rates>,
  Float: ResolverTypeWrapper<Scalars['Float']>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  String: Scalars['String'],
  Int: Scalars['Int'],
  Currency: Currency,
  Rates: Rates,
  Float: Scalars['Float'],
  Boolean: Scalars['Boolean'],
};

export type CurrencyResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Currency'] = ResolversParentTypes['Currency']> = {
  base?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  date?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  rates?: Resolver<Maybe<ResolversTypes['Rates']>, ParentType, ContextType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  currency?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType, RequireFields<QueryCurrencyArgs, 'currency' | 'value'>>,
  currencies?: Resolver<Maybe<ResolversTypes['Currency']>, ParentType, ContextType>,
};

export type RatesResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Rates'] = ResolversParentTypes['Rates']> = {
  TRY?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  CZK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  RUB?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ISK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  GBP?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  CHF?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  HRK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  PHP?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  CAD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  SGD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  DKK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  BRL?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  BGN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  NOK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  CNY?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ZAR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  JPY?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  THB?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  NZD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  RON?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  KRW?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  HKD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  MXN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  USD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  ILS?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  INR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  SEK?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  MYR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  PLN?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  AUD?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  HUF?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
  IDR?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>,
};

export type Resolvers<ContextType = Context> = {
  Currency?: CurrencyResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Rates?: RatesResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
