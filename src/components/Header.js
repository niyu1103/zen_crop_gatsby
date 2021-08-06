import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import { getWindow } from 'ssr-window';

const window = getWindow();
export default () => {

  const [isActive, setActive] = useState(false)
  const onNavToggle = () => {
    setActive(!isActive)
  }


  if (window.location.pathname.indexOf('/en') > -1) {
    return (
      <div id="top">
        <div className={isActive ? 'drawer show' : 'drawer'}>
          <div className="drawer-wrapper">
            <div className="drawer-container-top">
              <section className={isActive ? 'drawer-nav-aboutus show' : 'drawer-nav-aboutus'}>
                <h4 className="drawer-ttl"><Link to="/en/aboutus/" onClick={onNavToggle}>About Us</Link></h4>
                <ul>
                  <li><Link to="/en/aboutus/#vision" onClick={onNavToggle}>Vision</Link></li>
                  <li><Link to="/en/aboutus/#values" onClick={onNavToggle}>Value</Link></li>
                  <li><Link to="/en/aboutus/#philosophy" onClick={onNavToggle}>Philosophy</Link></li>
                </ul>
              </section>
              <section className={isActive ? 'drawer-nav-company show' : 'drawer-nav-company'}>
                <h4 className="drawer-ttl"><Link to="/en/company/" onClick={onNavToggle}>Company</Link></h4>
                <ul>
                  <li><Link to="/en/company/#company-information" onClick={onNavToggle}>Company Information</Link></li>
                  <li><Link to="/en/company/#ceo-message" onClick={onNavToggle}>CEO Message</Link></li>
                  <li><Link to="/en/company/#leadership" onClick={onNavToggle}>Leadership</Link></li>
                  <li><Link to="/en/company/#access" onClick={onNavToggle}>Access</Link></li>
                </ul>
              </section>
              <section className={isActive ? 'drawer-nav-service show' : 'drawer-nav-service'}>
                <h4 className="drawer-ttl"><Link to="/en/#service/" onClick={onNavToggle}>Service</Link></h4>
                <ul>
                  <li><a href="https://harutaka.jp/" target="_blank">harutaka</a></li>
                </ul>
              </section>
              <section className={isActive ? 'drawer-nav-recruit show' : 'drawer-nav-recruit'}>
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
            <div className="drawer-container-bottom">
              <section className={isActive ? 'drawer-nav-news show' : 'drawer-nav-news'}>
                <h4 className="drawer-ttl"><Link to="/news/" onClick={onNavToggle}>News</Link></h4>
              </section>
              <section className={isActive ? 'drawer-nav-blog show' : 'drawer-nav-blog'}>
                <h4 className="drawer-ttl"><Link to="/en/#blog" onClick={onNavToggle}>Blog</Link></h4>
              </section>
              <section className={isActive ? 'drawer-nav-english show' : 'drawer-nav-english'}>
                <h4 className="drawer-ttl"><Link to="/en/company/#labo" onClick={onNavToggle}>Labo</Link></h4>
              </section>
              <section className={isActive ? 'drawer-nav-contact show' : 'drawer-nav-contact'}>
                <h4 className="drawer-ttl"><Link to="/en/contact/" onClick={onNavToggle}>Contact</Link></h4>
              </section>
            </div>
          </div>
        </div>
        {/* <!-- .drawer --> */}

        <header className="show">
          <div className="header-container">
            <div className="site-id"><Link to="/en/"><span className="site-id-img">ZENKIGEN</span></Link>
            </div>
            <nav className="gnav">
              <ul>
                <li><Link to="/en/aboutus">About Us</Link></li>
                <li><Link to="/en/company/">Company</Link></li>
                <li><a href="https://recruit.zenkigen.co.jp">Recruit</a></li>
              </ul>
            </nav>
            <div className="back-top"><Link to="/en/">HOME</Link></div>
            <div className="header-nav" onClick={onNavToggle}>
              <div className="header-nav-inner ">
                <span>MENU</span>
              </div>
            </div>
            <div className="lang-nav">
              <ul>
                <li className="current"><Link to="/en">EN</Link></li>
                <li><Link to="/">日本語</Link></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  } else {
    const toBack = () => {
      if (window.location.pathname.indexOf('/news/') > -1) {
        return (
          <Link to="/news">News Top</Link>
        );
      } else {
        return (
          <Link to="/">HOME</Link>
        );
      }

    };
    return (
      <div id="top">
        <div className={isActive ? 'drawer show' : 'drawer'}>
          <div className="drawer-wrapper">
            <div className="drawer-container-top">
              <section className={isActive ? 'drawer-nav-aboutus show' : 'drawer-nav-aboutus'}>
                <h4 className="drawer-ttl"><Link to="/aboutus" onClick={onNavToggle}>About Us</Link></h4>
                <ul>
                  <li><Link to="/aboutus/#vision" onClick={onNavToggle}>Vision</Link></li>
                  <li><Link to="/aboutus/#values" onClick={onNavToggle}>Value</Link></li>
                  <li><Link to="/aboutus/#philosophy" onClick={onNavToggle}>Philosophy</Link></li>
                </ul>
              </section>
              <section className={isActive ? 'drawer-nav-company show' : 'drawer-nav-company'}>
                <h4 className="drawer-ttl"><Link to="/company" onClick={onNavToggle}>Company</Link></h4>
                <ul>
                  <li><Link to="/company/#company-information" onClick={onNavToggle}>会社概要</Link></li>
                  <li><Link to="/company/#ceo-message" onClick={onNavToggle}>代表メッセージ</Link></li>
                  <li><Link to="/company/#leadership" onClick={onNavToggle}>役員紹介</Link></li>
                  <li><Link to="/company/#access" onClick={onNavToggle}>アクセス</Link></li>
                </ul>
              </section>
              <section className={isActive ? 'drawer-nav-service show' : 'drawer-nav-service'}>
                <h4 className="drawer-ttl"><Link to="/#service" onClick={onNavToggle}>Service</Link></h4>
                <ul>
                  <li><a href="https://harutaka.jp/" target="_blank">harutaka</a></li>
                </ul>
              </section>
              <section className={isActive ? 'drawer-nav-recruit show' : 'drawer-nav-recruit'}>
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
            <div className="drawer-container-bottom">
              <section className={isActive ? 'drawer-nav-news show' : 'drawer-nav-news'}>
                <h4 className="drawer-ttl"><Link to="/news" onClick={onNavToggle}>News</Link></h4>
              </section>
              <section className={isActive ? 'drawer-nav-blog show' : 'drawer-nav-blog'}>
                <h4 className="drawer-ttl"><Link to="/#blog" onClick={onNavToggle}>Blog</Link></h4>
              </section>
              <section className={isActive ? 'drawer-nav-english show' : 'drawer-nav-english'}>
                <h4 className="drawer-ttl"><Link to="/company/#labo" onClick={onNavToggle}>Labo</Link></h4>
              </section>
              <section className={isActive ? 'drawer-nav-contact show' : 'drawer-nav-contact'}>
                <h4 className="drawer-ttl"><Link to="/contact" onClick={onNavToggle}>Contact</Link></h4>
              </section>
            </div>
          </div>
        </div>
        {/* <!-- .drawer --> */}

        <header className="show">
          <div className="header-container">
            <div className="site-id">
              <Link to="/"><span className="site-id-img">ZENKIGEN</span></Link>
            </div>
            <nav className="gnav">
              <ul>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/company">Company</Link></li>
                <li><a href="https://recruit.zenkigen.co.jp">Recruit</a></li>
              </ul>
            </nav>
            <div className="back-top">{toBack()}</div>
            <div className="header-nav" onClick={onNavToggle}>
              <div className="header-nav-inner ">
                <span>MENU</span>
              </div>
            </div>
            <div className="lang-nav">
              <ul>
                <li><Link to="/en">EN</Link></li>
                <li className="current"><Link to="/">日本語</Link></li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    )
  }


}
