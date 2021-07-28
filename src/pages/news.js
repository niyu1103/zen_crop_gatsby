import React, { useState, useEffect, seEffect } from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import Meta from "../components/Meta"
import FeaturedMedia from "../components/FeaturedMedia"
import ArchivePagination from "../components/ArchivePagination"
import Fadein from '../utils/Fadein'

const News = ({ data }) => {

  useEffect(() => {
    Fadein();
  }, [])

  return (
    <Layout>
      <Meta
        title="ニュース"
        bodyclass="news"
        description="株式会社ZENKIGENは「テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する」社会を目指します"
      />

      <section id="news" className="sec sec-news">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">News</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">ニュース</p>
        </div>
        <div className="content-container">
          <ul className="news-nav sc-f">
            <li className="current">すべて</li>
            <li>プレスリリース</li>
            <li>お知らせ</li>
            <li>メディア</li>
          </ul>
          <div className="news-list">
            {data.allWpPost.edges.map(({ node }) => (
              <article className="news-article sc-f" key={node.id}>
                <div className="news-txt">
                  <time datetime="2021-03-25">{node.date}</time>
                  <h1 className="news-ttl"> <Link to={`/news/${node.slug}/`}>{node.title}</Link></h1>
                </div>
                <FeaturedMedia image={node.featuredImage} />
              </article>
            ))}


          </div>


        </div>
      </section>
      {/* /#news */}

    </Layout>
  )
}

export default News

export const query = graphql`
  query {
    allWpPost(sort: {fields: date, order: DESC}) {
      edges {
        node {
          id
          title
          slug
          date(formatString: "YYYY年MM月DD日")
          featuredImage {
            node {
              localFile {
              childImageSharp {
                gatsbyImageData(
                  layout: FIXED
                  width: 240
                  placeholder: BLURRED
                  )
                }
              }
            }
          }
        }
      }

    }
  }
`