import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getBooksQuery = gql`
{
  books{
    id,
    name,
    genre
  }
}`

function BookList() {
  return (
    <div>
      <ul id="book-list">
        <li>Book name</li>
      </ul>
    </div>
  );
}

export default graphql(getBooksQuery)(BookList);
