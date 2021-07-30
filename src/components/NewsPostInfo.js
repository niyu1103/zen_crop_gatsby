import React, { useEffect } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import FeaturedMedia from "./FeaturedMedia"
import Fadein from '../utils/Fadein'



const NewsPostInfo = () => (

  useEffect(() => {
    Fadein();
  }, []),

  <StaticQuery


    query={graphql`
            query {
             allWpPost(
               sort: {fields: date, order: DESC},
               filter: {categories: {nodes: {elemMatch: {slug: {eq: "info"}}}}}
               ) {
              edges {
                node {
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
              }
            }
          }
        `}
    render={(props) => {

      return (
        <div class="news-list">
          {props.allWpPost.edges.map(({ node }) => (
            <article class="news-article sc-f" key={node.id}>
              <div class="news-txt">
                <time datetime={node.date}>{node.date}</time>
                <h1 className="news-ttl"> <Link to={`/news/${node.slug}/`}>{node.title}</Link></h1>
              </div>
              <div class="news-img">
                <FeaturedMedia image={node.featuredImage} />
              </div>
            </article>
          ))}

        </div>
      )

    }
    }

  />
)

export default NewsPostInfo