import gql from 'graphql-tag';
const PORTFOLIO_QUERY = gql`{
	portfolioProjects(orderBy: updatedAt_ASC) {
    portfolioimage {
      url
    }
    projectTitle
    projectDescription
  }
}`;

export default PORTFOLIO_QUERY;
