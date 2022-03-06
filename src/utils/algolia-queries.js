const indexName = `Home`
const pageQuery = `{
  pages: allSitePage {
      nodes {
        id
        component
        path
        componentChunkName
        internal {
          type
          contentDigest
        }
      }
      edges {
        node {
          id
          path
        }
      }
    }
  }`
function pageToAlgoliaRecord({ node: { id, frontmatter, fields, ...rest } }) {
  return {
    objectID: id,
    ...frontmatter,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]
module.exports = queries
