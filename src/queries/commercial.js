import gql from 'graphql-tag';
const COMM_QUERY = gql`{
	portfolioProjects(orderBy: updatedAt_DESC, where: {projectType: COMM}) {
    portfolioimage {
      url
    }
    projectTitle
    projectDescription
  }
}`;

export default COMM_QUERY;
