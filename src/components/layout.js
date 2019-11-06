/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import "../styles/index.scss"

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from './footer'
import SEO from './seo'

const Layout = (props) => {
  return (
    <>
      <SEO />
      <Header />
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              { props.title }
            </h1>
            {
              props.subtitle ?
                <h2 class="subtitle">
                  { props.subtitle }
                </h2>
              : null
            }
          </div>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <div className="content">
            { props.children }
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Layout
