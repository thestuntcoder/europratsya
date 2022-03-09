async function createCountryPages(graphql, actions) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCountry {
        nodes {
          slug {
            current
          }
          id
        }
      }
    }
  `);

  // If there are any errors in the query, cancel the build and tell us
  if (result.errors) throw result.errors;

  // Let‘s gracefully handle if allSanityCatgogy is null
  const categoryNodes = (result.data.allSanityCountry || {}).nodes || [];

  // Loop through the country nodes, but don't return anything
  categoryNodes.forEach((node) => {
    // Desctructure the id and slug fields for each country
    const { id, slug = {} } = node;

    // If there isn't a slug, skip
    if (!slug) return;

    // Make the URL with the current slug
    const path = `/countries/${slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/country.jsx'),
      context: { id },
    });
  });
}

async function createEmployerPages(graphql, actions) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityCompany {
        nodes {
          id
          slug {
            current
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;

  const employerNodes = (result.data.allSanityCompany || {}).nodes || [];

  // Loop through the company nodes, but don't return anything
  employerNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;
    const path = `/company/${slug.current}`;

    createPage({
      path,
      component: require.resolve('./src/templates/company.jsx'),
      context: { id: node.id },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createCountryPages(graphql, actions);
  await createEmployerPages(graphql, actions);
};
