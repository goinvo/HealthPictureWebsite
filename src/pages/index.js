import React from "react"

import Layout from '../components/layout'
import Link from '../components/link'

const IndexPage = (props) => (
  <Layout title="Seeing all your health, anywhere, anytime.">
    <h2>Health Picture is...</h2>
    <p>An open source service for visualizing a person’s health and their entire longitudinal, clinical and non-clinical health record. An elegant and beautiful design that will better perform with clinicians, patients, and care teams, to make faster, more informed decisions.</p>
    <p>It is a service that designers, engineers, patients, and clinicians can easily adopt into their projects. </p>
    <p>Getting there is equal parts smart technology, healthcare reform, and literacy. We’re here to help with designing the future of healthcare while evangelizing for the entire system to evolve to better serve patients.</p>
    <blockquote className="has-text-justified mt-8">
      <span className="subtitle is-4">“Nobody is thinking about Precision Medicine like these folks. They are blazing the path for the human experience in health.”</span>
      <br/>
      - Eric Topol, Director, Scripps Translational Science Institute
    </blockquote>
    <h2>Get involved with the future of health.</h2>
    <p>It all starts with sharing a vision.</p>
    <Link to="/join">What's your vision?</Link>
  </Layout>
)

export default IndexPage
