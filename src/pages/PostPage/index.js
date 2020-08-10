import React from 'react';
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Container, PostImage, PostArticle, PostHeader, PostTitle, PageNavigation, PageList, PageListItem } from './styles';

const PostPage = ({ data, pageContext, location }) => {
  const header = data.contentfulHeader
  const post = data.contentfulPost
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle} headerLogo={header.headerLogo.fluid}>
      <SEO title="IACON" />

      <Container>
        <PostImage>
          <Img className="post-image" fluid={post.image.fluid} />
        </PostImage>
        <PostArticle>
          <PostHeader>
            <PostTitle>{post.title}</PostTitle>
          </PostHeader>
          <section dangerouslySetInnerHTML={{ __html: post.content.childContentfulRichText.html }} />
          <hr />
          <footer></footer>
        </PostArticle>

        <PageNavigation>
          <PageList>
            <PageListItem>
              {previous && (
                <Link to={`/${previous.slug}`} rel="prev">
                  ← {previous.title}
                </Link>
              )}
            </PageListItem>
            <PageListItem>
              {next && (
                <Link to={`/${next.slug}`} rel="next">
                  {next.title} →
                </Link>
              )}
            </PageListItem>
          </PageList>
        </PageNavigation>
        
      </Container>
    </Layout>
  )
}

export default PostPage

export const pageQuery = graphql`
  query ContentfulPostBySlug($slug: String!) {
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
