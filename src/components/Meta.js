import React from "react"
import { Helmet } from "react-helmet"
import { getWindow } from 'ssr-window';

const window = getWindow();
export default props => {
  let lang = '';
  if (window.location.pathname.indexOf('/en') > -1) {
      lang = 'en'
  } else{
      lang = 'ja'
  }
  const baseTitle = "株式会社ZENKIGEN"
  const title = props.title ? `${props.title} | ${baseTitle}` : baseTitle
  const bodyClass = props.bodyclass
  const description = props.description
  const ogpImage = props.ogpImage
  return (
    <Helmet>
      <html lang={lang} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://recruit.zenkigen.co.jp" />
      <meta property="og:image" content={`https://recruit.zenkigen.co.jp/image/ogp/${ogpImage}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="format-detection" content="telephone=no" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <body className={bodyClass} />
    </Helmet>
  )
}