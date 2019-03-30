import gql from 'graphql-tag';

export const TESTS = gql`{
  tests(id: $id) {
    id
    name
  }
}`