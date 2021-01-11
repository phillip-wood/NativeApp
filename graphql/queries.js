/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSneaker = /* GraphQL */ `
  query GetSneaker($id: ID!) {
    getSneaker(id: $id) {
      id
      brand
      model
      submodel
      colorway
      createdAt
      updatedAt
    }
  }
`;
export const listSneakers = /* GraphQL */ `
  query ListSneakers(
    $filter: ModelSneakerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSneakers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        brand
        model
        submodel
        colorway
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
