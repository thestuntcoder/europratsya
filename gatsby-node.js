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

  if (result.errors) throw result.errors;
  const countryNodes = (result.data.allSanityCountry || {}).nodes || [];

  countryNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;

    createPage({
      path: `/countries/${slug.current}`,
      component: require.resolve('./src/templates/country.jsx'),
      context: { id: node.id, language: 'en' },
    });

    createPage({
      path: `/uk/countries/${slug.current}`,
      component: require.resolve('./src/templates/country.jsx'),
      context: { id: node.id, language: 'uk' },
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

  employerNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;

    createPage({
      path: `/company/${slug.current}`,
      component: require.resolve('./src/templates/company.jsx'),
      context: { id: node.id, language: 'en' },
    });

    createPage({
      path: `/uk/company/${slug.current}`,
      component: require.resolve('./src/templates/company.jsx'),
      context: { id: node.id, language: 'uk' },
    });
  });
}

async function createJobPages(graphql, actions) {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityJobPost {
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
  const jobNodes = (result.data.allSanityJobPost || {}).nodes || [];

  jobNodes.forEach((node) => {
    const { id, slug = {} } = node;
    if (!slug) return;

    createPage({
      path: `/job/${slug.current}`,
      component: require.resolve('./src/templates/job.jsx'),
      context: { id: node.id, language: 'en' },
    });

    createPage({
      path: `/uk/job/${slug.current}`,
      component: require.resolve('./src/templates/job.jsx'),
      context: { id: node.id, language: 'uk' },
    });
  });
}

exports.createPages = async ({ graphql, actions }) => {
  await createCountryPages(graphql, actions);
  await createEmployerPages(graphql, actions);
  await createJobPages(graphql, actions);
};
