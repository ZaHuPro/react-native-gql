import { gql } from "@apollo/client";

export const GET_USERS = gql`
  query Users {
    users {
      id
      username
    }
  }
`;

export const GET_USER = gql`
  query Users($userId: ID!) {
    user(id: $userId) {
      id
      username
    }
  }
`;

export const USER_ADDED_SUBSCRIPTION = gql`
  subscription Subscription {
    userAdded {
      username
      id
    }
  }
`;
