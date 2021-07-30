import React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';

export default () => (
  <footer className="sc-f" id="footer">
    <div className="back-top"><Link to="/">Home</Link></div>
    <div id="page-top">
      <div onClick={() => scrollTo('#top')} className="s-scroll">
        <span className="txt">PAGE TOP</span>
        <span className="arw"></span>
      </div>
    </div>

    <div className="footer-container sc-f show">
      <div className="logo"><Link to="/">ZENKIGEN</Link></div>
      <div className="footer-column-top">
        <section className="footer-address">
          <h4>Tokyo Office</h4>
          <div className="address-text">
            〒100-0004<br />東京都千代田区大手町1-6-1<br />大手町ビル6階643区
          </div>
          <h4>Zenkigen Sazan Beach Office</h4>
          <div className="address-text">
            〒253-0055<br />神奈川県茅ヶ崎市中海岸4丁目12986番地52<br />サザンビーチヒルズ4F
          </div>
        </section>
        <div className="footer-nav">
          <div className="footer-nav-top">
            <section className="footer-nav-aboutus">
              <h4><Link to="/aboutus">About Us</Link></h4>
              <ul>
                <li><Link to="/aboutus/#vision">Vision</Link></li>
                <li><Link to="/aboutus/#value">Value</Link></li>
                <li><Link to="/aboutus/#philosophy">Philosophy</Link></li>
              </ul>
            </section>
            <section className="footer-nav-company">
              <h4><Link to="/company">Company</Link></h4>
              <ul>
                <li><Link to="/company/#company-information">会社概要</Link></li>
                <li><Link to="/company/#ceo-message">代表メッセージ</Link></li>
                <li><Link to="/company/#leadership">役員紹介</Link></li>
                <li><Link to="/company/#access">アクセス</Link></li>
              </ul>
            </section>
            <section className="footer-nav-service">
              <h4><Link to="/#service/">Service</Link></h4>
              <ul>
                <li><a href="https://harutaka.jp/" target="_blank">harutaka</a></li>
              </ul>
            </section>
            <section className="footer-nav-recruit">
              <h4><a href="https://recruit.zenkigen.co.jp">Recruit</a></h4>
              <ul>
                <li><a href="https://recruit.zenkigen.co.jp/newgraduate/">新卒採用</a></li>
                <li><a href="https://recruit.zenkigen.co.jp/career/">キャリア採用</a></li>
                <li><a href="https://recruit.zenkigen.co.jp/index.html#interview">インタビュー</a></li>
                <li><a href="https://recruit.zenkigen.co.jp/index.html#message">メッセージ</a></li>
                <li><a href="https://recruit.zenkigen.co.jp/workstyle/">ワークスタイル</a></li>
              </ul>
            </section>
          </div>
          <div className="footer-nav-bottom">
            <section className="footer-nav-news">
              <h4><Link to="/news">News</Link></h4>
            </section>
            <section className="footer-nav-blog">
              <h4><Link to="/#blog">Blog</Link></h4>
            </section>
            <section className="footer-nav-english">
              <h4><Link to="/company/#labo">Labo</Link></h4>
            </section>
            <section className="footer-nav-contact">
              <h4><Link to="/contact">Contact</Link></h4>
            </section>
          </div>
        </div>

      </div>
      <div className="footer-column-bottom">
        <ul>
          <li><Link to="/privacy">プライバシーポリシー</Link></li>
          <li><Link to="/security">情報セキュリティ方針</Link></li>
          <li><Link to="/personalinfo">個人情報の取扱いについて</Link></li>
        </ul>
        <p className="copyright"><small><span lang="en">&copy;</span> ZENKIGEN, Inc.</small></p>
      </div>
    </div>
  </footer>
)
