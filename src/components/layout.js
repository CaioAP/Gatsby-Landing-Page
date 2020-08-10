import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import Sidebar from "./sidebar"
import { LayoutContainer, SideBarMenu, Header } from "../pages/styles.ts"

const Layout = ({ location, title, headerLogo, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <Header>
        <Img className="header-logo" fluid={headerLogo} fadeIn durationFadeIn={500}/>
      </Header>
    )
  } else {
    header = (
      <Header>
        <Link to="/">
          <Img className="header-logo-dark" fluid={headerLogo} fadeIn durationFadeIn={500}/>
        </Link>
        <hr />
      </Header>
    )
  }
  return (
    <LayoutContainer>
      <SideBarMenu>
        <Sidebar />
      </SideBarMenu>

      <header>{header}</header>

      <main>{children}</main>

      <footer></footer>
    </LayoutContainer>
  )
}

export default Layout
