import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostContentfulTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const header = data.contentfulHeader
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle} headerLogo={header.headerLogo.fluid} >
      <SEO title="IACON" />
      <Img fluid={post.image.fluid} />
      <article>
        <header>
          <h1
            style={{
              // marginTop: rhythm(1),
              marginBottom: 0,
            }}
          >
            {post.title}
          </h1>
        </header>
        <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
        <hr
          style={{
            // marginBottom: rhythm(1),
          }}
        />
        <footer>
          {/* <Bio /> */}
        </footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={`/${previous.slug}`} rel="prev">
                ← {previous.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={`/${next.slug}`} rel="next">
                {next.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostContentfulTemplate

export const pageQuery = graphql`
  query ContentfulBlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    contentfulHeader( slug: { eq: "logo-dark"}) {
      headerLogo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulPost( slug: { eq: $slug }) {
      title
      subtitle
      author
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`
