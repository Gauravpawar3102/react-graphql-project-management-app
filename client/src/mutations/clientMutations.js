import { gql } from '@apollo/client';

const DELETE_CLIENT = gql`
  mutation deleteClient($id: ID!) {
    deleteClient(id: $id) {
      id
      name
      email
      phone
    }
  }
`;
// const ADD_CLIENT = gql`
//   mutation addClient(name:"Test Client ",email:"test@test.com",phone:"555-444-666") {
//   id
//   }
// `;

export { DELETE_CLIENT };
