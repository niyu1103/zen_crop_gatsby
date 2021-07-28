import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StaticImage } from "gatsby-plugin-image"

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <>
      <div className="swiper-container blog-swiper">
        <div className="swiper-wrapper">
          <Slider {...settings}>
            <div className="swiper-slide">
              <a href="https://note.com/zenkigen/m/mfa71e8138ecd" target="_blank">
                <div className="overlay"></div>
                <div className="area-img">
                  <StaticImage src="../images/ph_blog_member.jpg" alt="" />
                </div>
                <section className="wrap-blog-ttl">
                  <h4 className="area-ttl-en">ZENKIGENの仕事、働き方</h4>
                  <p className="area-ttl-jp"></p>
                </section>
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://note.com/nozawahibiki" target="_blank">
                <div className="overlay"></div>
                <div className="area-img">
                  <StaticImage src="../images/ph_blog_nozawa.jpg" alt="" />
                </div>
                <section className="wrap-blog-ttl">
                  <h4 className="area-ttl-en">社長ブログ</h4>
                  <p className="area-ttl-jp">代表取締役CEO 野澤比日樹のブログ</p>
                </section>
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://note.com/zenkigen/m/mecbcce4b1cc7" target="_blank">
                <div className="overlay"></div>
                <div className="area-img">
                  <StaticImage src="../images/ph_blog_design.jpg" alt="" />
                </div>
                <section className="wrap-blog-ttl">
                  <h4 className="area-ttl-en">ZENKIGEN DESIGN</h4>
                  <p className="area-ttl-jp">デザイナーブログ</p>
                </section>
              </a>
            </div>
            <div className="swiper-slide">
              <a href="https://note.com/zenkigen" target="_blank">
                <div className="overlay"></div>
                <div className="area-img">
                  <StaticImage src="../images/ph_blog_zenkigen.jpg" alt="" />
                </div>
                <section className="wrap-blog-ttl">
                  <h4 className="area-ttl-en">ZENKIGEN note</h4>
                  <p className="area-ttl-jp">ZENKIGENの公式ブログ</p>
                </section>
              </a>
            </div>
          </Slider>
        </div>
      </div>
      {/* <div className="swiper-button-next next-post pagenation"></div>
      <div className="swiper-button-prev pre-post pagenation"></div> */}
    </>
  );
}