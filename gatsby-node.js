
const path = require(`path`)
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPage {
        edges {
          node {
            id
            slug
          }
        }
      }
      allWpPost(sort: {fields: date, order: DESC}) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)

  // 固定ページ
  result.data.allWpPage.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug}/`,
      component: path.resolve("./src/templates/page.js"),
      context: {
        id: node.id,
      },
    })
  })
  result.data.allWpPost.edges.forEach(({ node }) => {
    const title = encodeURI(node.slug)
    createPage({
      path: `/news/${node.slug}/`,
      component: path.resolve("./src/templates/post.js"),
      context: {
        id: node.id,
      },
    })
  })
}