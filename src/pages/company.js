import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"
import Meta from '../components/meta'
import { Layout } from "../components/layout"
import { GoogleApis } from "../components/GoogleApis.js"
import { StaticImage } from "gatsby-plugin-image"
import Fadein from '../utils/Fadein'
import SpanWrap from '../utils/SpanWrap'
import { isIE } from 'react-device-detect';
// import HomeWebGl from '../components/webgl/homeWebgl';

export default () => {
  const [mainShow, setMainShow] = useState(false);
  const [loaded, onLoad] = useState(false);
  const glElement = useRef(null);

  useEffect(() => {
    Fadein();
    SpanWrap();

  }, [])

  return (
    <Layout>
      <Meta
        title="株式会社ZENKIGEN"
        bodyclass={isIE ? 'company ie' : 'company'}
        description="株式会社ZENKIGENは「テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する」社会を目指します"
        ogpImage=""
      />
      <section id="company-information" className="sec company-information">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Company&nbsp;Information</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">会社概要</p>
        </div>
        <div className="content-container">
          <dl className="company-information-talbe">
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">会社名</dt>
              <dd className="company-information-talbe-value">株式会社ZENKIGEN</dd>
            </div>
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">所在地</dt>
              <dd className="company-information-talbe-value"><span className="em">本社</span><br />〒100-0004 東京都千代田区大手町1-6-1 大手町ビル6階 643区<br /><br /><span className="em">ZENKIGEN Sazan Beach オフィス</span><br />〒253-0055 神奈川県茅ケ崎市中海岸四丁目12986番地52 サザンビーチヒルズ4階11-a</dd>
            </div>
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">設立</dt>
              <dd className="company-information-talbe-value">2017年10月</dd>
            </div>
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">資本金</dt>
              <dd className="company-information-talbe-value">100,000,000円（2020年10月末）</dd>
            </div>
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">代表者名</dt>
              <dd className="company-information-talbe-value">代表取締役CEO 野澤 比日樹</dd>
            </div>
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">事業内容</dt>
              <dd className="company-information-talbe-value">採用DXサービス『harutaka（ハルタカ）』の企画・開発<br />
                AIエンジン『ZIGAN（ジガン）』の企画・開発<br />
                パートナーとの共同研究機関『ZENKIGEN Lab（ゼンキゲンラボ）』の運営<br />
                人事コミュニティ『ZINZIEN（ジンジエン）』の運営</dd>
            </div>
            <div className="company-information-talbe-row sc-f">
              <dt className="company-information-talbe-key">許認可</dt>
              <dd className="company-information-talbe-value">認証基準: JIS Q 27001:2014（ISO/IEC 27001:2013」）<br />認証番号: IS 702166<br />
                <div className="company-information-isms"><StaticImage src="../images/isms.png" alt="認証基準: JIS Q 27001:2014（ISO/IEC 27001:2013」）認証番号: IS 702166" /></div>
              </dd>
            </div>
          </dl>
        </div>
      </section>
      {/* /#company-information  */}

      <section id="ceo-message" className="sec ceo-message">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">CEO&nbsp;Message</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">代表メッセージ</p>
        </div>
        <div className="content-container">
          <div className="wrap-content">
            <div className="ceo-message-photo sc-f"><StaticImage src="../images/ph_ceo-message.jpg" alt="" /></div>
            <section className="ceo-message-txt">
              <h3 className="ceo-message-copy sc-f">次世代によい社会を残すことへの想い</h3>
              <p className="message-txt1 sc-f">2017年10月、『テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する』というビジョンのもと、株式会社ZENKIGENを創業しました。<br />
                『全機現』という言葉は、「人の持つ能力の全てを発揮する」という禅の言葉です。<br />
                私自身が誰よりも全機現するのは当然として、多くの大人が全機現する社会は活気があり、全機現している大人を見た子供達が、大人になることに希望を持つ社会はとても素敵な社会だと信じています。</p>
              <p className="message-txt2 sc-f">そんな社会を次世代に引き渡したい。<br />
                <span className="main-copy-en sc-f">For Our Next Generations</span><br />
                その思いが当社の創業精神です。</p>
              <p className="message-txt1 sc-f">一社の力は微々たるものですが、それでも我々の働きや行いが、次世代によりよき社会を引き渡すことに繋がるかどうかを基準に、
                当社のビジョンである『テクノロジーを通じて人と企業が全機現できる社会の創出に貢献する』から一歩も外れることなく邁進して参ります。</p>
              <div className="ceo-message-name sc-f">
                <p className="ceo-message-job">代表取締役 CEO</p>
                <p className="ceo-message-name-jp">野澤 比日樹</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      {/* /#ceo-message  */}

      <section id="leadership" className="sec leadership">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Leadership</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">役員紹介</p>
        </div>
        <div className="content-container">
          <div className="sec-leadership-list">
            <div className="wrap-area">
              <div className="area-content">
                <div className="leadership-img sc-f"><StaticImage src="../images/ph_leadership_nozawa.jpg" alt="" /></div>
                <div className="wrap-ttl sc-f">
                  <p className="leadership-job">代表取締役 CEO</p>
                  <p className="leadership-name">野澤 比日樹</p>
                  <p className="leadership-profile">1998年株式会社インテリジェンス（現：パーソルキャリア）に新卒入社。1999年創業期のサイバーエージェントへ転職し、大阪支社の立ち上げ、社長室、事業責任者等に従事し、会社の成長に貢献。2011年に孫正義会長の誘いでソフトバンクグループの社長室に入社し、電力事業であるSB Power株式会社の設立、立ち上げに携わる。2017年10月株式会社ZENKIGEN創業。</p>
                </div>
              </div>
            </div>
            <div className="wrap-area">
              <section className="area-content">
                <div className="leadership-img sc-f td04"><StaticImage src="../images/ph_leadership_mizuno.jpg" alt="" /></div>
                <div className="wrap-ttl sc-f td04">
                  <p className="leadership-job">取締役</p>
                  <p className="leadership-name">水野 宇広</p>
                  <p className="leadership-profile">1999年安田火災海上保険株式会社（現：損害保険ジャパン日本興亜）に新卒入社。2000年株式会社インテリジェンス（現：パーソルキャリア）へ転職。その後、株式会社ノッキングオンの創業、クックパッド上場準備・人事部長、AOI Pro.(現：AOI TYO Holdings)を経て、2012年12月より株式会社ユニコン代表取締役COOとして創業より参画。2017年10月株式会社ZENKIGEN創業。</p>
                </div>
              </section>
            </div>

            <div className="wrap-area">
              <section className="area-content">
                <div className="leadership-img sc-f "><StaticImage src="../images/ph_leadership_namura.jpg" alt="" /></div>
                <div className="wrap-ttl sc-f ">
                  <p className="leadership-job">取締役</p>
                  <p className="leadership-name">名村 卓</p>
                  <p className="leadership-profile">2004年株式会社サイバーエージェント入社。アメーバピグ、AWA、AbemaTVなどの新規サービスの立ち上げに従事。2016年株式会社メルカリ入社。US版メルカリの開発を担当。2017年4月より株式会社メルカリ 執行役員CTO就任。</p>
                </div>
              </section>
            </div>

            <div className="wrap-area">
              <section className="area-content">
                <div className="leadership-img sc-f td04"><StaticImage src="../images/ph_leadership_kariyazono.jpg" alt="" /></div>
                <div className="wrap-ttl sc-f td04">
                  <p className="leadership-job">取締役</p>
                  <p className="leadership-name">仮屋薗 聡一</p>
                  <p className="leadership-profile">1996年、株式会社グロービスのベンチャーキャピタル事業設立に参画。1999年にはエイパックス・グループと合弁会社エイパックス・グロービス・パートナーズを設立。現在に至る。累計運用総額660億円。主なトラックレコードにユーザベース、オイシックス、グリー、ワークスアプリケーションズ、ネットエイジグループ等。グロービス参画前は三和総合研究所にて経営戦略コンサルティングに従事。2015年7月より一般社団法人日本ベンチャーキャピタル協会会長を務める。慶應義塾大学法学部卒、米国ピッツバーグ大学MBA修了。<br />著書に、「機関投資家のためのプライベート・エクイティ」（きんざい）、「ケースで学ぶ起業戦略」(日経BP社)、「MBAビジネスプラン」(ダイヤモンド社)、「ベンチャーキャピタリストが語る起業家への提言」(税務研究会)がある。</p>
                </div>
              </section>
            </div>

            <div className="wrap-area">
              <section className="area-content">
                <div className="leadership-img sc-f "><StaticImage src="../images/ph_leadership_nanba.jpg" alt="" /></div>
                <div className="wrap-ttl sc-f ">
                  <p className="leadership-job">取締役</p>
                  <p className="leadership-name">難波 俊充</p>
                  <p className="leadership-profile">2003年、サイバーエージェントに入社し広告代理店部門に配属。2007年に渡米、翌年にサイバーエージェント米国支社を設立し代表に就任。その後、サイバーエージェント・ベンチャーズにて、シニア・ヴァイス・プレジデントとしてベンチャーキャピタル投資を行う。<br />2013年、WiL パートナーに就任、現在に至る。HR tech, Legal tech, Real Estate techなど幅広いSaaS事業を投資支援している。</p>
                </div>
              </section>
            </div>
            <div className="wrap-area">
              <section className="area-content">
                <div className="leadership-img sc-f td04"><StaticImage src="../images/ph_leadership_tei.jpg" alt="" /></div>
                <div className="wrap-ttl sc-f td04">
                  <p className="leadership-job">特別顧問</p>
                  <p className="leadership-name">鄭 雄一</p>
                  <p className="leadership-profile">1989年東京大学医学部医学科卒業。1997年医学博士号取得。東京大学医学部付属病院研修医、米国マサチューセッツ総合病院内分泌科研究員、ハーバード大学医学部助教授、東京大学大学院医学系研究科疾患生命工学センター助教授等を経て、2007年より現職。専門は、骨軟骨生物学・再生医学・バイオマテリアル工学。<br />「医学は実学である」という信念のもとに、工学的な手法を使って病気の治療に貢献するものを開発し、患者さんの役に立ちたいと思っている。内科医出身。医・工・薬・理連携に関わる研究教育プロジェクトを指導的立場で推進し、産学連携、規制対応、規格化・標準化の推進に積極的に取り組んでいる。３Ｄプリンターを使ったオーダーメイドの人工骨などユニークな成果もある。</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      {/* /#leadership */}

      <section id="access" className="sec access">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Access</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">アクセス</p>
        </div>
        <div className="content-container">
          <section className="access-point">
            <h3 className="access-office sc-f">東京本社</h3>
            <p className="access-address sc-f">〒100-0004 東京都千代田区大手町1-6-1 大手町ビル6階 643区</p>
            <div className="access-maps sc-f" id="tokyo-office">
            </div>
            <div className="access-transport sc-f">
              <p>東京メトロ丸ノ内線、千代田線、半蔵門線、東西線、都営三田線「大手町駅」E1出口直結</p>
            </div>
            <div className="wrap-btn sc-f">
              <a href="https://goo.gl/maps/v1EEQCoZkrDgU3d66" target="_blank" rel="noopener">
                <div className="btn-s">
                  <span className="btn-txt">Google Maps</span>
                  <span className="btn-ar"><StaticImage src="../images/ar_link_white.svg" alt="" /></span>
                </div>
              </a>
            </div>
          </section>

          <section className="access-point" id="sbo-office">
            <h3 className="access-office sc-f">ZENKIGEN Sazan Beach オフィス</h3>
            <p className="access-address sc-f">〒253-0055 神奈川県茅ケ崎市中海岸四丁目12986番地52 サザンビーチヒルズ4階11-a</p>
            <div className="access-maps sc-f">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1627.7556079502178!2d139.39805709241867!3d35.31812478018381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185282711a9cbb%3A0xdb9439a6a648fa!2z44CSMjUzLTAwNTUg56We5aWI5bed55yM6IyF44O25bSO5biC5Lit5rW35bK477yU5LiB55uu77yR77yS77yZ77yY77yWIOOCteOCtuODs-ODk-ODvOODgeODkuODq-OCug!5e0!3m2!1sja!2sjp!4v1620531829154!5m2!1sja!2sjp" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div className="access-transport sc-f">
              <p>電車: 東海道本線、JR湘南新宿ライン、JR相模線「茅ヶ崎駅」南口より徒歩約18分<br />路線バス: 茅ヶ崎駅南口から37番系統 「浜見平団地（西浜）」 約10分「海水浴場前」下車<br />コミュニティバス「えぼし号」: 茅ヶ崎駅南口から 「中海岸南湖循環市立病院線」 約10分「9番サザンビーチ入口」下車</p>
            </div>
            <div className="wrap-btn sc-f">
              <a href="https://goo.gl/maps/w5Fu4rrKe3Zt5rBz9" target="_blank" rel="noopener">
                <div className="btn-s">
                  <span className="btn-txt">Google Maps</span>
                  <span className="btn-ar"><StaticImage src="../images/ar_link_white.svg" alt="" /></span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </section>
      {/* /#access  */}

      <section id="workstyle" className="sec workstyle">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Workstyle</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">ワークスタイル</p>
        </div>
        <div className="content-container sc-f">
          <div className="overlay"></div>
          <div className="workstyle-img">
            <StaticImage src="../images/area_workstyle.jpg" alt="" />
          </div>
          <section className="workstyle-txt sc-f">
            <h3>Culture / Office / Benefits</h3>
            <p>メンバーが最大限の能力を発揮できるよう、働く場所や福利厚生からもサポートしています。</p>
            <div className="wrap-btn sc-f">
              <a href="https://recruit.zenkigen.co.jp/workstyle/" target="_blank" rel="noopener">
                <div className="btn-s">
                  <span className="btn-txt">View more</span>
                  <span className="btn-ar"><StaticImage src="../images/ar_link_white.svg" alt="" /></span>
                </div>
              </a>
            </div>
          </section>
        </div>
      </section>
      {/* /#workstyle  */}

      <section id="labo" className="sec labo">
        <div className="wrap-sec-ttl sc-f">
          <h2 className="sec-ttl-en">Labo</h2>
          <p className="sec-ttl-jp sc-f sc-f-on">ラボ</p>
        </div>
        <div className="content-container sc-f">
          <div className="overlay"></div>
          <div className="labo-video">
            <video className="" autoplay="" playsinline="" loop="" muted="" src="http://localhost:10048/wp-content/uploads/2021/07/labo.mp4" poster="../assets/img/labo.png"></video>
          </div>
          <section className="labo-txt sc-f">
            <h3>ZENKIGEN Labo</h3>
            <p>ZENKIGEN Laboについての説明文章が入ります。</p>
          </section>
        </div>
      </section>
      {/* /#labo  */}
    </Layout>
  )
}
