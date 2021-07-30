import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components/layout"
import Meta from "../components/Meta"
import FeaturedMedia from "../components/FeaturedMedia"
import NewsPostAll from "../components/NewsPostAll"
import NewsPostPressrelease from "../components/NewsPostPressrelease"
import NewsPostInfo from "../components/NewsPostInfo"
import NewsPostMedia from "../components/NewsPostMedia"
import ArchivePagination from "../components/ArchivePagination"
import Fadein from '../utils/Fadein'



const Archive = (props) => {
  console.log(props);

  const [newsCurrentTab, setNewsCurrentTab] = useState('all');
  const setTab = (newsCurrentTab, e) => {
    setNewsCurrentTab(newsCurrentTab);
  }

  useEffect(() => {
    Fadein();
  }, [])

  const {
    data: {
      allWpPost: { nodes, pageInfo },
    },
    pageContext: { archiveType, archivePath, uri },
  } = props

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
            <li className={newsCurrentTab === 'all' ? 'current' : ''} onClick={setTab.bind(this, "all")}>すべて</li>
            <li className={newsCurrentTab === 'pressrelease' ? 'current' : ''} onClick={setTab.bind(this, "pressrelease")}>プレスリリース</li>
            <li className={newsCurrentTab === 'info' ? 'current' : ''} onClick={setTab.bind(this, "info")}>お知らせ</li>
            <li className={newsCurrentTab === 'media' ? 'current' : ''} onClick={setTab.bind(this, "media")}>メディア</li>
          </ul>

          {/* {postElm(newsCurrentTab)} */}


          <div class="news-list">
            {props.data.allWpPost.nodes.map((post, index) => (
              <article class="news-article sc-f" key={index}>
                <div class="news-txt">
                  <time datetime={post.date}>{post.date}</time>
                  <h1 className="news-ttl"> <Link to={`/news/${post.slug}/`}>{post.title}</Link></h1>
                </div>
                <div class="news-img">
                  <FeaturedMedia image={post.featuredImage} />
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
      {/* /#news */}


      <ArchivePagination {...pageInfo} archivePath={archivePath} />
    </Layout>
  )
}

export const query = graphql`
  query ArchivePage(
    $offset: Int!
    $perPage: Int!
    $categoryDatabaseId: Int
  ) {
    allWpPost(
      limit: $perPage
      skip: $offset
      filter: {
        categories: {
          nodes: { elemMatch: { databaseId: { eq: $categoryDatabaseId } } }
        }
      }
      sort: { fields: date, order: DESC }
    ) {
      nodes {
        slug
          id
          title
          date(formatString: "")
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(layout: FIXED, width: 240, placeholder: BLURRED)
                }
              }
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        currentPage
        pageCount
      }
    }
  }
`

export default Archive