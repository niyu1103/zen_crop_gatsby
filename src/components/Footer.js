import React from "react"
import { Link } from "gatsby"
import scrollTo from 'gatsby-plugin-smoothscroll';
import { getWindow } from 'ssr-window';

const window = getWindow();
export default () => {
  if (window.location.pathname.indexOf('/en') > -1) {
    return (
      <footer className="sc-f">
        <div className="back-top"><Link to="/en">Home</Link></div>
        <div id="page-top">
          <div onClick={() => scrollTo('#top')} className="s-scroll">
            <span className="txt">PAGE TOP</span>
            <span className="arw"></span>
          </div>
        </div>
        <div className="footer-container sc-f">
          <div className="logo"><Link to="/en/">ZENKIGEN</Link></div>
          <div className="footer-column-top">
            <section className="footer-address">
              <h4>Tokyo Office</h4>
              <div className="address-text">
                1-6-1 Otemachi, Chiyoda-ku, <br />Tokyo 100-0004, <br />Otemachi Building 6F 643-ku
              </div>
              <h4>Zenkigen Sazan Beach Office</h4>
              <div className="address-text">
                Southern Beach Hills 4F Room 11-a,<br /> 4-12986-52 Nakakaigan, Chigasaki-shi, <br />Kanagawa, 253-0055 Japan
              </div>
            </section>
            <div className="footer-nav">
              <div className="footer-nav-top">
                <section className="footer-nav-aboutus">
                  <h4><Link to="/en/aboutus/">About Us</Link></h4>
                  <ul>
                    <li><Link to="/en/aboutus/#vision">Vision</Link></li>
                    <li><Link to="/en/aboutus/#values">Value</Link></li>
                    <li><Link to="/en/aboutus/#philosophy">Philosophy</Link></li>
                  </ul>
                </section>
                <section className="footer-nav-company">
                  <h4><Link to="/en/company/">Company</Link></h4>
                  <ul>
                    <li><Link to="/en/company/#company-information">Company Information</Link></li>
                    <li><Link to="/en/company/#ceo-message">CEO Message</Link></li>
                    <li><Link to="/en/company/#leadership">Leadership</Link></li>
                    <li><Link to="/en/company/#access">Access</Link></li>
                  </ul>
                </section>
                <section className="footer-nav-service">
                  <h4><Link to="/en/#service/">Service</Link></h4>
                  <ul>
                    <li><a href="https://harutaka.jp/" target="_blank">harutaka</a></li>
                  </ul>
                </section>
                <section className="footer-nav-recruit">
                  <h4><a href="https://recruit.zenkigen.co.jp">Recruit</a></h4>
                  <ul>
                    <li><a href="https://recruit.zenkigen.co.jp/newgraduate/">New Graduate</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/career/">Career</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/index.html#interview">Interview</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/index.html#message">Message</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/workstyle/">Work Style</a></li>
                  </ul>
                </section>
              </div>
              <div className="footer-nav-bottom">
                <section className="footer-nav-news">
                  <h4><Link to="/news">News</Link></h4>
                </section>
                <section className="footer-nav-blog">
                  <h4><Link to="/en/#blog">Blog</Link></h4>
                </section>
                <section className="footer-nav-english">
                  <h4><Link to="/en/company/#labo">Labo</Link></h4>
                </section>
                <section className="footer-nav-contact">
                  <h4><Link to="/en/contact/">Contact</Link></h4>
                </section>
              </div>
            </div>
          </div>
          <div className="footer-column-bottom">
            <ul>
              <li><Link to="/en/privacy">Privacy Policy</Link></li>
              <li><Link to="/en/security">Security Policy</Link></li>
              <li><Link to="/en/personalinfo">Handling of personal information</Link></li>
            </ul>
            <p className="copyright"><small><span lang="en">&copy;</span> ZENKIGEN, Inc.</small></p>
          </div>
        </div>
      </footer>

    )
  } else {
    return (
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
                ???100-0004<br />??????????????????????????????1-6-1<br />???????????????6???643???
              </div>
              <h4>Zenkigen Sazan Beach Office</h4>
              <div className="address-text">
                ???253-0055<br />?????????????????????????????????4??????12986??????52<br />???????????????????????????4F
              </div>
            </section>
            <div className="footer-nav">
              <div className="footer-nav-top">
                <section className="footer-nav-aboutus">
                  <h4><Link to="/aboutus">About Us</Link></h4>
                  <ul>
                    <li><Link to="/aboutus/#vision">Vision</Link></li>
                    <li><Link to="/aboutus/#values">Value</Link></li>
                    <li><Link to="/aboutus/#philosophy">Philosophy</Link></li>
                  </ul>
                </section>
                <section className="footer-nav-company">
                  <h4><Link to="/company">Company</Link></h4>
                  <ul>
                    <li><Link to="/company/#company-information">????????????</Link></li>
                    <li><Link to="/company/#ceo-message">?????????????????????</Link></li>
                    <li><Link to="/company/#leadership">????????????</Link></li>
                    <li><Link to="/company/#access">????????????</Link></li>
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
                    <li><a href="https://recruit.zenkigen.co.jp/newgraduate/">????????????</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/career/">??????????????????</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/index.html#interview">??????????????????</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/index.html#message">???????????????</a></li>
                    <li><a href="https://recruit.zenkigen.co.jp/workstyle/">?????????????????????</a></li>
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
              <li><Link to="/privacy">??????????????????????????????</Link></li>
              <li><Link to="/security">??????????????????????????????</Link></li>
              <li><Link to="/personalinfo">????????????????????????????????????</Link></li>
            </ul>
            <p className="copyright"><small><span lang="en">&copy;</span> ZENKIGEN, Inc.</small></p>
          </div>
        </div>
      </footer>

    )
  }

}

