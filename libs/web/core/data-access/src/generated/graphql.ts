import { gql } from 'apollo-angular'
import { Injectable } from '@angular/core'
import * as Apollo from 'apollo-angular'
import * as ApolloCore from '@apollo/client/core'
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type CorePaging = {
  __typename?: 'CorePaging'
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  total?: Maybe<Scalars['Int']>
}

export type CorePagingInput = {
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
}

export type CreateLogInput = {
  createdAt?: Maybe<Scalars['DateTime']>
  level: LogLevel
  message: Scalars['String']
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
}

export type IntercomMessage = {
  __typename?: 'IntercomMessage'
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type Log = {
  __typename?: 'Log'
  createdAt?: Maybe<Scalars['DateTime']>
  id?: Maybe<Scalars['String']>
  ip?: Maybe<Scalars['String']>
  level?: Maybe<LogLevel>
  message?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  system?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['DateTime']>
  user?: Maybe<User>
}

export type LoginInput = {
  email: Scalars['String']
  password: Scalars['String']
}

export enum LogLevel {
  Critical = 'Critical',
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
  Trace = 'Trace',
  Warning = 'Warning',
}

export type Mutation = {
  __typename?: 'Mutation'
  createLog?: Maybe<Log>
  intercomPub?: Maybe<IntercomMessage>
  login?: Maybe<UserToken>
  logout?: Maybe<Scalars['Boolean']>
  register?: Maybe<UserToken>
}

export type MutationCreateLogArgs = {
  input: CreateLogInput
}

export type MutationIntercomPubArgs = {
  payload?: Maybe<Scalars['JSON']>
  scope?: Maybe<Scalars['String']>
  type: Scalars['String']
}

export type MutationLoginArgs = {
  input: LoginInput
}

export type MutationRegisterArgs = {
  input: RegisterInput
}

export type Query = {
  __typename?: 'Query'
  adminCountLogs?: Maybe<CorePaging>
  adminLog?: Maybe<Log>
  adminLogs?: Maybe<Array<Log>>
  me?: Maybe<User>
  uptime?: Maybe<Scalars['Float']>
}

export type QueryAdminCountLogsArgs = {
  input: CorePagingInput
}

export type QueryAdminLogArgs = {
  logId: Scalars['String']
}

export type QueryAdminLogsArgs = {
  input: CorePagingInput
}

export type RegisterInput = {
  avatarUrl?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  password: Scalars['String']
  phone?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** User role */
export enum Role {
  Admin = 'Admin',
  User = 'User',
}

export type Subscription = {
  __typename?: 'Subscription'
  intercomSub?: Maybe<IntercomMessage>
}

export type SubscriptionIntercomSubArgs = {
  scope?: Maybe<Scalars['String']>
  type?: Maybe<Scalars['String']>
}

export type User = {
  __typename?: 'User'
  avatarUrl?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  email?: Maybe<Scalars['String']>
  firstName?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  lastName?: Maybe<Scalars['String']>
  location?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Role>
  updatedAt?: Maybe<Scalars['DateTime']>
  username?: Maybe<Scalars['String']>
}

export type UserToken = {
  __typename?: 'UserToken'
  /** JWT Bearer token */
  token: Scalars['String']
  user: User
}

export type UserTokenDetailsFragment = { __typename?: 'UserToken' } & Pick<UserToken, 'token'> & {
    user: { __typename?: 'User' } & UserDetailsFragment
  }

export type UserDetailsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'firstName' | 'lastName' | 'username' | 'avatarUrl' | 'email' | 'role'
>

export type MeQueryVariables = Exact<{ [key: string]: never }>

export type MeQuery = { __typename?: 'Query' } & { me?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> }

export type LogoutMutationVariables = Exact<{ [key: string]: never }>

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'logout'>

export type LoginMutationVariables = Exact<{
  input: LoginInput
}>

export type LoginMutation = { __typename?: 'Mutation' } & {
  login?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type RegisterMutationVariables = Exact<{
  input: RegisterInput
}>

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register?: Maybe<{ __typename?: 'UserToken' } & UserTokenDetailsFragment>
}

export type UptimeQueryVariables = Exact<{ [key: string]: never }>

export type UptimeQuery = { __typename?: 'Query' } & Pick<Query, 'uptime'>

export type IntercomDetailsFragment = { __typename?: 'IntercomMessage' } & Pick<
  IntercomMessage,
  'type' | 'scope' | 'payload'
>

export type IntercomPubMutationVariables = Exact<{
  type: Scalars['String']
  scope?: Maybe<Scalars['String']>
  payload?: Maybe<Scalars['JSON']>
}>

export type IntercomPubMutation = { __typename?: 'Mutation' } & {
  intercomPub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type IntercomSubSubscriptionVariables = Exact<{ [key: string]: never }>

export type IntercomSubSubscription = { __typename?: 'Subscription' } & {
  intercomSub?: Maybe<{ __typename?: 'IntercomMessage' } & IntercomDetailsFragment>
}

export type LogDetailFragment = { __typename?: 'Log' } & Pick<
  Log,
  'id' | 'createdAt' | 'updatedAt' | 'level' | 'system' | 'scope' | 'message' | 'payload' | 'ip'
>

export type AdminLogsQueryVariables = Exact<{
  input: CorePagingInput
}>

export type AdminLogsQuery = { __typename?: 'Query' } & {
  items?: Maybe<
    Array<{ __typename?: 'Log' } & { user?: Maybe<{ __typename?: 'User' } & UserDetailsFragment> } & LogDetailFragment>
  >
  count?: Maybe<{ __typename?: 'CorePaging' } & Pick<CorePaging, 'total' | 'limit' | 'skip'>>
}

export type AdminLogQueryVariables = Exact<{
  logId: Scalars['String']
}>

export type AdminLogQuery = { __typename?: 'Query' } & { adminLog?: Maybe<{ __typename?: 'Log' } & LogDetailFragment> }

export type CreateLogMutationVariables = Exact<{
  input: CreateLogInput
}>

export type CreateLogMutation = { __typename?: 'Mutation' } & {
  createLog?: Maybe<{ __typename?: 'Log' } & LogDetailFragment>
}

export const UserDetailsFragmentDoc = gql`
  fragment UserDetails on User {
    id
    firstName
    lastName
    username
    avatarUrl
    email
    role
  }
`
export const UserTokenDetailsFragmentDoc = gql`
  fragment UserTokenDetails on UserToken {
    token
    user {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`
export const IntercomDetailsFragmentDoc = gql`
  fragment IntercomDetails on IntercomMessage {
    type
    scope
    payload
  }
`
export const LogDetailFragmentDoc = gql`
  fragment LogDetail on Log {
    id
    createdAt
    updatedAt
    level
    system
    scope
    message
    payload
    ip
  }
`
export const MeDocument = gql`
  query me {
    me {
      ...UserDetails
    }
  }
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class MeGQL extends Apollo.Query<MeQuery, MeQueryVariables> {
  document = MeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`

@Injectable({
  providedIn: 'root',
})
export class LogoutGQL extends Apollo.Mutation<LogoutMutation, LogoutMutationVariables> {
  document = LogoutDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const LoginDocument = gql`
  mutation Login($input: LoginInput!) {
    login(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class LoginGQL extends Apollo.Mutation<LoginMutation, LoginMutationVariables> {
  document = LoginDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const RegisterDocument = gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      ...UserTokenDetails
    }
  }
  ${UserTokenDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class RegisterGQL extends Apollo.Mutation<RegisterMutation, RegisterMutationVariables> {
  document = RegisterDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const UptimeDocument = gql`
  query Uptime {
    uptime
  }
`

@Injectable({
  providedIn: 'root',
})
export class UptimeGQL extends Apollo.Query<UptimeQuery, UptimeQueryVariables> {
  document = UptimeDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomPubDocument = gql`
  mutation IntercomPub($type: String!, $scope: String, $payload: JSON) {
    intercomPub(type: $type, scope: $scope, payload: $payload) {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomPubGQL extends Apollo.Mutation<IntercomPubMutation, IntercomPubMutationVariables> {
  document = IntercomPubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const IntercomSubDocument = gql`
  subscription IntercomSub {
    intercomSub {
      ...IntercomDetails
    }
  }
  ${IntercomDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class IntercomSubGQL extends Apollo.Subscription<IntercomSubSubscription, IntercomSubSubscriptionVariables> {
  document = IntercomSubDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminLogsDocument = gql`
  query AdminLogs($input: CorePagingInput!) {
    items: adminLogs(input: $input) {
      ...LogDetail
      user {
        ...UserDetails
      }
    }
    count: adminCountLogs(input: $input) {
      total
      limit
      skip
    }
  }
  ${LogDetailFragmentDoc}
  ${UserDetailsFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminLogsGQL extends Apollo.Query<AdminLogsQuery, AdminLogsQueryVariables> {
  document = AdminLogsDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const AdminLogDocument = gql`
  query AdminLog($logId: String!) {
    adminLog(logId: $logId) {
      ...LogDetail
    }
  }
  ${LogDetailFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class AdminLogGQL extends Apollo.Query<AdminLogQuery, AdminLogQueryVariables> {
  document = AdminLogDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}
export const CreateLogDocument = gql`
  mutation CreateLog($input: CreateLogInput!) {
    createLog(input: $input) {
      ...LogDetail
    }
  }
  ${LogDetailFragmentDoc}
`

@Injectable({
  providedIn: 'root',
})
export class CreateLogGQL extends Apollo.Mutation<CreateLogMutation, CreateLogMutationVariables> {
  document = CreateLogDocument

  constructor(apollo: Apollo.Apollo) {
    super(apollo)
  }
}

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

interface WatchQueryOptionsAlone<V> extends Omit<ApolloCore.WatchQueryOptions<V>, 'query' | 'variables'> {}

interface QueryOptionsAlone<V> extends Omit<ApolloCore.QueryOptions<V>, 'query' | 'variables'> {}

interface MutationOptionsAlone<T, V> extends Omit<ApolloCore.MutationOptions<T, V>, 'mutation' | 'variables'> {}

interface SubscriptionOptionsAlone<V> extends Omit<ApolloCore.SubscriptionOptions<V>, 'query' | 'variables'> {}

@Injectable({ providedIn: 'root' })
export class ApolloAngularSDK {
  constructor(
    private meGql: MeGQL,
    private logoutGql: LogoutGQL,
    private loginGql: LoginGQL,
    private registerGql: RegisterGQL,
    private uptimeGql: UptimeGQL,
    private intercomPubGql: IntercomPubGQL,
    private intercomSubGql: IntercomSubGQL,
    private adminLogsGql: AdminLogsGQL,
    private adminLogGql: AdminLogGQL,
    private createLogGql: CreateLogGQL,
  ) {}

  me(variables?: MeQueryVariables, options?: QueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.fetch(variables, options)
  }

  meWatch(variables?: MeQueryVariables, options?: WatchQueryOptionsAlone<MeQueryVariables>) {
    return this.meGql.watch(variables, options)
  }

  logout(variables?: LogoutMutationVariables, options?: MutationOptionsAlone<LogoutMutation, LogoutMutationVariables>) {
    return this.logoutGql.mutate(variables, options)
  }

  login(variables: LoginMutationVariables, options?: MutationOptionsAlone<LoginMutation, LoginMutationVariables>) {
    return this.loginGql.mutate(variables, options)
  }

  register(
    variables: RegisterMutationVariables,
    options?: MutationOptionsAlone<RegisterMutation, RegisterMutationVariables>,
  ) {
    return this.registerGql.mutate(variables, options)
  }

  uptime(variables?: UptimeQueryVariables, options?: QueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.fetch(variables, options)
  }

  uptimeWatch(variables?: UptimeQueryVariables, options?: WatchQueryOptionsAlone<UptimeQueryVariables>) {
    return this.uptimeGql.watch(variables, options)
  }

  intercomPub(
    variables: IntercomPubMutationVariables,
    options?: MutationOptionsAlone<IntercomPubMutation, IntercomPubMutationVariables>,
  ) {
    return this.intercomPubGql.mutate(variables, options)
  }

  intercomSub(
    variables?: IntercomSubSubscriptionVariables,
    options?: SubscriptionOptionsAlone<IntercomSubSubscriptionVariables>,
  ) {
    return this.intercomSubGql.subscribe(variables, options)
  }

  adminLogs(variables: AdminLogsQueryVariables, options?: QueryOptionsAlone<AdminLogsQueryVariables>) {
    return this.adminLogsGql.fetch(variables, options)
  }

  adminLogsWatch(variables: AdminLogsQueryVariables, options?: WatchQueryOptionsAlone<AdminLogsQueryVariables>) {
    return this.adminLogsGql.watch(variables, options)
  }

  adminLog(variables: AdminLogQueryVariables, options?: QueryOptionsAlone<AdminLogQueryVariables>) {
    return this.adminLogGql.fetch(variables, options)
  }

  adminLogWatch(variables: AdminLogQueryVariables, options?: WatchQueryOptionsAlone<AdminLogQueryVariables>) {
    return this.adminLogGql.watch(variables, options)
  }

  createLog(
    variables: CreateLogMutationVariables,
    options?: MutationOptionsAlone<CreateLogMutation, CreateLogMutationVariables>,
  ) {
    return this.createLogGql.mutate(variables, options)
  }
}
