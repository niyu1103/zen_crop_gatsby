import React, { useState, useEffect, seEffect } from "react"
import { graphql } from "gatsby"
import { Layout } from "../../components/layout"
import Meta from "../../components/Meta"
import Fadein from '../../utils/Fadein'

const Post = ({ data }) => {

  useEffect(() => {
    Fadein();
  }, [])

  return (
    <>
      <Layout>
        <Meta
          title={`${data.wpPost.title} | ニュース`}
          bodyclass="news-post"
          description="株式会社ZENKIGENは「テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する」社会を目指します"
        />

        <section id="news" className="sec news-post">
          <div className="wrap-post-ttl sc-f show">
            <p className="post-ttl-category">{data.wpPost.categories.nodes[0].name}</p>
            <h1 className="post-ttl">{data.wpPost.title}</h1>
            <p className="post-time">{data.wpPost.date}</p>
          </div>
          <div className="wrap-post">
            <div className="content-container">
              <section className="post-container sc-f show">
                <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
              </section>
            </div>
          </div>
        </section>
        {/*
      <article className="myContainer">
        <h1>{data.wpPost.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.wpPost.content }} />
      </article> */}

      </Layout>
    </>
  )
}

export default Post

export const query = graphql`
  query($id: String!) {
    wpPost(id: {eq: $id}) {
      title
      content
      date
      categories {
      nodes {
        name
      }
    }
  }
}
`