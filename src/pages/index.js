import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Background, SocialLinks, Social, Container, Post, PostImage, PostText, InDevelopment, FooterContact } from "./styles.ts"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allContentfulPost.edges
  const background = data.contentfulBackground
  const header = data.contentfulHeader
  const socials = data.allContentfulSocial.edges

  return (
    <Layout location={location} title={siteTitle} headerLogo={header.headerLogo.fluid} >
      <SEO title="IACON" />

      <Background>
        <Img className="background-image" fluid={background.backgroundImage.fluid} fadeIn durationFadeIn={1500} />
        <Img className="background-logo" fluid={background.backgroundLogo.fluid} />
      </Background>
      
      {/* <Header>
        <Img className="header-logo" fluid={header.headerLogo.fluid} fadeIn durationFadeIn={500} />
      </Header> */}

      <SocialLinks>
        {socials.map(({ node }) => {
          return (
            <Social key={node.slug}>
              <a href={node.link}>
                <Img className="social-link" fluid={node.icon.fluid} />
              </a>
            </Social>
          );
        })}
      </SocialLinks>

      <Container>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Post key={node.slug}>
              <Link to={node.slug} style={{textDecoration: "none" }}>
                <PostImage>
                  <Img className="post-image" fluid={node.image.fluid} />
                </PostImage>
                <PostText>
                  <header>
                    <h3>
                      {title}
                    </h3>
                  </header>
                </PostText>
              </Link>
            </Post>
          )
        })}
        <InDevelopment>
          Nosso site está em construção!<br />AGUARDE!
        </InDevelopment>
      </Container>

      <FooterContact>
        Avenida T-2, Qd. 12, Lt. 03, Sala 104 <br />
        Edifício Thays Alves, St. Bueno, Goiânia - GO <br />
        &copy; 2020 | IACON.
      </FooterContact>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulPost {
      edges {
        node {
          title
          subtitle
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          author
          slug
        }
      }
    }
    contentfulBackground( slug: { eq: "background" }) {
      backgroundImage {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      backgroundLogo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    contentfulHeader( slug: { eq: "logo"}) {
      headerLogo {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
    allContentfulSocial {
      edges {
        node {
          link
          slug
          icon {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
