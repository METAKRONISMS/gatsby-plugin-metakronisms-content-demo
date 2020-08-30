import { graphql } from 'gatsby';

export { default } from 'gatsby-plugin-metakronisms-content/dist/Episode';

export const query = graphql`
query allEpisodeMdx ($seasonNr: Int = 0, $episodeNr: Int = 0) {
  episodeMdx: allMdx(filter: {fields: {seasonNr: {eq: $seasonNr}, episodeNr: {eq: $episodeNr}}}) {
    nodes {
      parent {
        ... on File {
          name
        }
      }
      frontmatter {
        title
        choices {
          target
          title
        }
      }
      body
    }
  }
}
`;
