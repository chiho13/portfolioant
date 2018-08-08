import gql from 'graphql-tag';
const PHOTOGRAPHY_QUERY = gql`{
  photographies(orderBy: orderNo_ASC) {
    myImages {
      url
    }
  }
}`;

export default PHOTOGRAPHY_QUERY;
