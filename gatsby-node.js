const path = require(`path`)
// const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // const postPage = path.resolve(`./src/templates/blog-post-contentful.js`)
  const postPage = path.resolve(`./src/pages/PostPage/index.js`)
  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulPost.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: postPage,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }
