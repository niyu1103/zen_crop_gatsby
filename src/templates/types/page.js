import React, { useState, useEffect, seEffect } from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Meta from '../../components/Meta'
import { Layout } from "../../components/layout"
import Fadein from '../../utils/Fadein'
import SpanWrap from '../../utils/SpanWrap'
import WebGl from '../../components/webgl/webgl';
import { initScript } from '../../utils/GoogleMap';
import { getWindow } from 'ssr-window';

const window = getWindow();

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

  const renderHelmet = () => {
    if (window.location.pathname.indexOf('company') > -1) {
      return (
        <Helmet>
          <script>{initScript}</script>
          <script
            type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB87ujqnQ1I1IlPVrZ71hS_N64SbjjlxZM&callback=initMap"
            async defe
          >
          </script>
        </Helmet>
      );
    }
    return null;
  }

  return (
    <Layout>
      <Meta
        title="株式会社ZENKIGEN"
        bodyclass={data.wpPage.slug}
        description="株式会社ZENKIGENは「テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する」社会を目指します"
        ogpImage=""
      />
      {renderHelmet()}

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
