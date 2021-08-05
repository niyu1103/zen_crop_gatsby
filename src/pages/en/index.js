import React, { useState, useEffect, useRef } from "react"
import { Link } from "gatsby"
import Meta from '../../components/Meta'
import { Layout } from "../../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import Fadein from '../../utils/Fadein'
import FadeinScroll from '../../utils/FadeinScroll'
import SpanWrap from '../../utils/SpanWrap'
import Slider from '../../utils/Slider'
import { isIE } from 'react-device-detect';
import HomeWebGl from '../../components/webgl/homeWebgl';
import Particle from '../../components/webgl/particle';

export default () => {
  const [mainShow, setMainShow] = useState(false);
  const [loaded, onLoad] = useState(false);

  const glElement = useRef(null);


  useEffect(() => {
    Fadein();
    FadeinScroll();
    SpanWrap();

    setTimeout(() => {
      onLoad(true)
    }, 1000)

    setTimeout(() => {
      setMainShow(true)
    }, 2000)

    const homeWebGl = new HomeWebGl();
    homeWebGl.init(glElement.current)
    const particle = new Particle();
    particle.init();

  }, [])

  return (
    <Layout>
      <Meta
        title="株式会社ZENKIGEN"
        bodyclass={isIE ? 'home en ie' : 'home en'}
        description="株式会社ZENKIGENは「テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する」社会を目指します"
        ogpImage=""
      />
      <div id="wrap-loader" className={loaded ? 'hide remove' : ''}>
        <div className="loader">Loading...</div>
      </div>

      <div className="main-visual">
        <div className="main-title td04">
          <h1 className={mainShow ? 'main-copy-sc-f show' : 'main-copy-sc-f'}>
            <span>F</span><span>o</span><span>r</span><span>&nbsp;</span><span>O</span><span>u</span><span>r</span><br />
            <span>N</span><span>e</span><span>x</span><span>t</span><span>&nbsp;</span><span>G</span><span>e</span><span>n</span><span>e</span><span>r</span><span>a</span><span>t</span><span>i</span><span>o</span><span>n</span><span>s</span>
          </h1>
          <p className="sc-f td28 sc-f-on">Contribute to the creation of a society through technology<br />
            where people and companies can fully embody themselves</p>
        </div>
        <div className="area-video sc-f">
          <div className="overlay"></div>
          <video className autoPlay playsInline loop muted src="/images/SHORT_corpo_v02_1280.mp4" poster="/images/zenkigen_corpo_v01.jpg" />
        </div>
      </div>

      <div className="home-main-scroll">
        <div className="home-main-scroll-container">
          <div className="scroll-t">
            SCROLL DOWN
          </div>
          <div className="scroll-arw"></div>
        </div>
      </div>




      <section id="service" className="sec home-service">
        <div className="area-video sc-f">
          <canvas className="particle sc-f sc-f-on"></canvas>
        </div>
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Service</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">ZENKIGENのサービスを紹介します</p>
        </div>
        <div className="content-container">
          <div className="area-service sc-f td02">
            <div className="area-container area-harutaka">
              <div className="service-txt">
                <p className="service-copy1">採用DXなら</p>
                <div className="harutaka-logo"><StaticImage src="../assets/img/harutaka_logo.svg" alt="" /></div>
                <p className="service-name-jp">ハルタカ </p>
                <p className="service-copy2">時間や場所にとらわれない<br />新しい採用の体験を。</p>
                <p className="service-ex-jp">メンバーが最大限の能力を発揮できるよう、<br />
                  働く場所や福利厚生からもサポートしています。</p>
              </div>
              <div className="harutaka-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/harutaka_image.png" alt="" /></div>
              <div className="wrap-btn">
                <a href="https://harutaka.jp" target="_blank" rel="noopener">
                  <div className="btn-s">
                    <span className="btn-txt">View more</span>
                    <span className="btn-ar"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ar_link_white.svg" alt="" /></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="area-service sc-f td04">
            <div className="area-container area-harutaka-ef">
              <div className="service-txt">
                <p className="service-copy1">選考をAIの分析でアシスト</p>
                <div className="harutaka_ef-logo"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/harutakaEF_logo.svg" alt="" /></div>
                <p className="service-name-jp">ハルタカ エントリーファインダー</p>
                <p className="service-copy2">録画動画の選考を<br />AIの分析でアシスト</p>
                <p className="service-ex-jp">印象を定量化することにより、<br />客観的で公平な選考を実現します。</p>
              </div>
              <div className="harutaka-ef-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ef_image.png" alt="" /></div>
              <div className="wrap-btn">
                <a href="https://harutaka.jp/entry-finder/" target="_blank" rel="noopener">
                  <div className="btn-s">
                    <span className="btn-txt">View more</span>
                    <span className="btn-ar"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ar_link_white.svg" alt="" /></span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /#service  */}

      <div className="aboutus-wrap-sec">
        <canvas ref={glElement} className="webgl sc-f sc-f-on"></canvas>
        <div className="points">
          <div className="wrap-points">
            <div className="point point-0 sc-f sc-f-on">
              <span className="label">Vision</span>
            </div>
            <div className="point point-1 sc-f sc-f-on">
              <span className="label">Value</span>
            </div>
            <div className="point point-2 sc-f sc-f-on">
              <span className="label">Philosophy</span>
            </div>
          </div>
        </div>
        <section id="aboutus-main" className="sec aboutus-main">
          <div className="wrap-sec-ttl tac sc-f">
            <h2 className="sec-ttl-en">About&nbsp;Us</h2>
            <p className="sec-ttl-jp sc-f sc-f-on">私たちについて</p>
          </div>
          <div className="content-container">
            <p className="aboutus-txt sc-f sc-f-on">ZENKIGENの活動の基本となる<em>Vision</em> / <em>Value</em> / <em>Philosophy</em></p>
            <div className="wrap-btn sc-f">
              <Link to='/en/aboutus/'>
                <div className="btn-s">
                  <span className="btn-txt">View more</span>
                  <span className="btn-ar"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ar_next_white_s.svg" alt="" /></span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
      {/* /.wrap-sec  */}

      <section id="company" className="sec sec-company">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Company</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">企業情報</p>
        </div>
        <div className="content-container">
          <div className="sec-company-list">
            <div className="wrap-area">
              <section className="area-content sc-f">
                <Link to='/en/company/'>
                  <div className="overlay"></div>
                  <div className="area-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ph_list_company.png" alt="" /></div>
                </Link>
                <div className="wrap-ttl">
                  <Link to='/en/company/'>
                    <h2 className="area-ttl-en">Company Information</h2>
                    <p className="area-ttl-jp">会社概要</p>
                  </Link>
                </div>
              </section>
            </div>
            <div className="wrap-area">
              <section className="area-content sc-f td02">
                <Link to='/en/company/#ceo-message'>
                  <div className="overlay"></div>
                  <div className="area-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ph_list_nozawa.jpg" alt="" /></div>
                </Link>
                <div className="wrap-ttl">
                  <Link to='/en/company/#ceo-message'>
                    <h2 className="area-ttl-en">CE0 Message</h2>
                    <p className="area-ttl-jp">代表メッセージ</p>
                  </Link>
                </div>
              </section>
            </div>
            <div className="wrap-area">
              <section className="area-content sc-f td04">
                <Link to='/en/company/#leadership'>
                  <div className="overlay"></div>
                  <div className="area-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ph_list_leadership.jpg" alt="" /></div>
                </Link>
                <div className="wrap-ttl">
                  <Link to='/en/company/#leadership'>
                    <h2 className="area-ttl-en">Leadership</h2>
                    <p className="area-ttl-jp">役員紹介</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
          <div className="sec-company-list">
            <div className="wrap-area">
              <section className="area-content sc-f">
                <Link to='/en/company/#access'>
                  <div className="overlay"></div>
                  <div className="area-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ph_list_map.jpg" alt="" /></div>
                </Link>
                <div className="wrap-ttl">
                  <Link to='/en/company/#access'>
                    <h2 className="area-ttl-en">Access</h2>
                    <p className="area-ttl-jp">アクセス</p>
                  </Link>
                </div>
              </section>
            </div>
            <div className="wrap-area">
              <section className="area-content sc-f td02">
                <Link to='/en/company/#workstyle'>
                  <div className="overlay"></div>
                  <div className="area-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/workstyle06.jpg" alt="" /></div>
                </Link>
                <div className="wrap-ttl">
                  <Link to='/en/company/#workstyle'>
                    <h2 className="area-ttl-en">Work Style</h2>
                    <p className="area-ttl-jp">ワークスタイル</p>
                  </Link>
                </div>
              </section>
            </div>
            <div className="wrap-area">
              <section className="area-content sc-f td04">
                <Link to='/en/company/#labo'>
                  <div className="overlay"></div>
                  <div className="area-img"><StaticImage src="https://portal2021.zenkigen.co.jp/wp-content/uploads/2021/07/ph_list_lab.jpg" alt="" /></div>
                </Link>
                <div className="wrap-ttl">
                  <Link to='/en/company/#labo'>
                    <h2 className="area-ttl-en">Labo</h2>
                    <p className="area-ttl-jp">ラボ</p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* /#company  */}

      <section id="blog" className="sec sec-blog">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Blog</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">ZENKIGENのBlogを紹介します</p>
        </div>
        <div className="blog-container sc-f">
          <Slider />
        </div>
      </section>
      {/* /#blog  */}
    </Layout>
  )
}
