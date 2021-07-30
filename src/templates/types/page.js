import React, { useState, useEffect, seEffect } from "react"
import { graphql } from "gatsby"
import Meta from '../../components/meta'
import { Layout } from "../../components/layout"
import Fadein from '../../utils/Fadein'
import SpanWrap from '../../utils/SpanWrap'
import WebGl from '../../components/webgl/webgl';

console.log(window.location.pathname);
const Page = ({ data }) => {

  useEffect(() => {
    Fadein();

    if (window.location.pathname.indexOf('company') > -1) {
      SpanWrap();
    }

    if (window.location.pathname.indexOf('aboutus') > -1) {
      SpanWrap();
      const webGl = new WebGl();
      webGl.init();
    }
  }, [])


  return (
    <Layout>
      <Meta
        title="株式会社ZENKIGEN"
        bodyclass={data.wpPage.slug}
        description="株式会社ZENKIGENは「テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する」社会を目指します"
        ogpImage=""
      />

      <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }} />

    </Layout>
  )
}

export default Page

export const query = graphql`
  query($id: String!) {
    wpPage(id: {eq: $id}) {
      title
      slug
      content
    }
  }
`
