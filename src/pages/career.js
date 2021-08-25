import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import workImage1 from "../images/fujitsu.png";
import workImage2 from "../images/senku.png";
import workImage3 from "../images/beachtown.png";
import workImage4 from "../images/logo_coconats.png";
import workImage5 from "../images/educom.png";
import activityImage1 from "../images/interlaken-japan.jpg";
import activityImage2 from "../images/shirahama-koen-parkrun.jpg";
import activityImage3 from "../images/thegreatwall.jpg";
import portfolioImage1 from "../images/hiroto-aoki.png";
import portfolioImage2 from "../images/beach-hayama.png";
import portfolioImage3 from "../images/tep.png";
import skillImage1 from "../images/frontend.svg";
import skillImage2 from "../images/fitness.svg";


function CareerPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="CAREER｜dev.hiroto-aoki.com"
      />

      <section className="text-center">
        <h1 className="mb-4 text-5xl text-gray-800">
          CAREER
        </h1>
        <p className="mb-4 text-base text-gray-700">
          職歴、スキル・知識、制作したポートフォリオを掲載しています
        </p>
      </section>
      <section className="my-8">
        <h2 className="my-2 py-1 text-center text-xl font-bold border-2 border-gray-900">
          職務経歴
        </h2>
        <p className="pl-4 py-4 text-base text-center text-gray-700 text-base">
          所属した会社、参画したプロジェクトでの職務内容です
        </p>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage4} alt="BEACHTOWN" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">coconats</p>
            <p className="italic text-md mb-2">2015年2月〜現在（個人事業）</p>
            <p className="my-2 text-gray-700 text-base">
              ランニング・ノルディックウォーキングなど屋外のフィットネスプログラムを指導。（活動エリア：愛知県　名古屋市/豊田市）<br />
              コーポレートサイト・個人ホームページのWebサイト制作を手掛ける。
            </p>
            <div className="py-4">
              <span className="tag">フィットネス指導</span>
              <span className="tag">Webサイト制作</span>
            </div>
         </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage5} alt="EDUCOM" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">株式会社 EDUCOM</p>
            <p className="italic text-md mb-2">2020年12月〜2021年6月（契約社員）</p>
            <p className="my-2 text-gray-700 text-base">
              教育ネットワークシステムを導入した学校のICT活用をサポート。<br />
              サポート職としてとして教職員からのシステムに関する問い合わせ対応に従事。
            </p>
            <div className="py-4">
              <span className="tag">カスタマーサポート</span>
              <span className="tag"></span>
              <span className="tag"></span>
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage3} alt="BEACHTOWN" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">株式会社 BEACHTOWN</p>
            <p className="italic text-md mb-2">2015年7月〜2020年3月（正社員・業務委託）</p>
            <p className="my-2 text-gray-700 text-base">
              フィットネスプログラムの指導、および施設開設のディレクション、社内SEを兼務しWeb予約サイトの構築を担当。<br />
              チームリーダーとしてメンバーとの連携、ステークホルダーとの折衝に従事。
            </p>
            <div className="py-4">
              <span className="tag">運動指導</span>
              <span className="tag">ディレクション</span>
              <span className="tag">マネージメント</span>
              <span className="tag">Webシステム開発</span>
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage2} alt="Fujitsu" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">株式会社 先駆</p>
            <p className="italic text-md mb-2">2015年2月〜2015年7月（業務委託）</p>
            <p className="my-2 text-gray-700 text-base">
              大学、美術館のホームページ制作に従事し、フロントエンドを担当。<br />
              既存Webページのテンプレート化などのリファクタリング、ユーザビリティ向上のための画面レイアウト変更など改善業務に従事。
            </p>
            <div className="py-4">
              <span className="tag">HTML</span>
              <span className="tag">CSS</span>
              <span className="tag">JavaScript</span>
            </div>         
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage1} alt="Fujitsu" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">富士通 株式会社</p>
            <p className="italic text-md mb-2">2007年4月〜2015年2月（正社員）</p>
            <p className="my-2 text-gray-700 text-base">
              顧客管理システム開発に参画し、システム設計やコーティングを担当。<br />
              メンテナンスを容易にするために独自フレームワークの実装、柔軟なシステム構築の概念を学ぶ。<br />
              担当業務外でビジネスモデル立案の討論会を発⾜させ、携帯電話デバイスを⽤いたアイディアを考案し特許出願。
            </p>
            <div className="py-4">
              <span className="tag">設計</span>
              <span className="tag">Javaコーディング</span>
              <span className="tag">ビジネスモデル特許出願</span>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8">
        <h2 className="my-2 py-1 text-center text-xl font-bold border-2 border-gray-900">
          社会活動
        </h2>
        <p className="pl-4 py-4 text-base text-center text-gray-700 text-base">
          業務外での活動内容です
        </p>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/3 w-full h-full" src={activityImage1} alt="interlaken専属コーチ" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">interlaken 専属コーチ</p>
            <p className="italic text-md mb-2">2020年1月〜現在</p>
            <p className="my-2 text-gray-700 text-base">
              名古屋市のスポーツショップ interlakenにてノルディックウォーキングの講習会、ツアーリングプログラムを担当。
            </p>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://interlaken.jp/" target="_blank" rel="noopener noreferrer">
                interlaken 公式HP
              </a>
            </button>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/3 w-full h-full" src={activityImage2} alt="白浜公園parkrun イベントディレクター" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">白浜公園parkrun イベントディレクター</p>
            <p className="italic text-md mb-2">2020年4月〜現在</p>
            <p className="my-2 text-gray-700 text-base">
            世界中で毎週開催されているコミュニティーイベントparkrunを愛知県豊田市の白浜公園に誘致。<br />
            地域活性のハブとなり健康増進、スポーツ振興を応援する企画を目指す。
            </p>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://www.parkrun.jp/shirahamakoen/" target="_blank" rel="noopener noreferrer">
                白浜公園parkrun 公式HP
              </a>
            </button>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/3 w-full h-full" src={activityImage3} alt="万里の長城マラソン" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">万里の長城マラソン　アンバサダー</p>
            <p className="italic text-md mb-2">2014年5月〜現在</p>
            <p className="my-2 text-gray-700 text-base">
            日中友好を願い発足した本大会のアンバサダーを努める。<br />
            出場実績：2013年、2015年、2017年 優勝
            </p>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://greatwallrun.com/" target="_blank" rel="noopener noreferrer">
                万里の長城マラソン 公式HP
              </a>
            </button>
          </div>
        </div>
      </section>
      <section className="my-16">
        <h2 className="my-2 py-1 text-center text-2xl font-bold border-2 border-gray-900">
          スキル・知識
        </h2>
        <p className="pl-4 py-4 text-center text-base text-gray-700">
        職務で培ったスキル・知識です
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 md:w-1/2 my-4 flex flex-col md:flex-row rounded shadow-lg">
            <img className="px-4 py-4 md:w-1/3 w-full h-full" src={skillImage1} alt="Webプログラミング" />
            <div className="px-6 py-4">
              <p className="text-center font-bold text-lg my-2">Webプログラムミング</p>
              <p className="text-justify text-gray-700 text-base">
                <ul>
                  <li className="tag">HTML</li>
                  <li className="tag">CSS / Sass</li>
                  <li className="tag">JavaScript - Gatsby.js / React.js</li>
                  <li className="tag">PHP - Laravel / Smarty </li>
                  <li className="tag">Java - Struts</li>
                  <li className="tag">RDB - Oracle / PostgreSQL</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 my-4 flex flex-col md:flex-row rounded shadow-lg">
            <img className="px-4 py-4 md:w-1/3 w-full h-full" src={skillImage2} alt="フィットネスプログラム" />
            <div className="px-6 py-4">
              <p className="text-center font-bold text-lg my-2">フィットネスプログラム</p>
              <p className="text-gray-700 text-base">
              <ul>
                <li className="tag">ランニング</li> 
                <li className="tag">ノルディックウォーキング </li>
                <li className="tag">体幹トレーンング </li>
                <li className="tag">筋膜リリース </li>
                <li className="tag">小学生かけっこ教室</li>
                <li className="tag">施設開設ディレクション</li>
              </ul>
             </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-8">
        <h2 className="my-2 py-1 text-center text-2xl font-bold border-2 border-gray-900">
          ポートフォリオ
        </h2>
        <p className="pl-4 py-4 text-center text-base text-gray-700">
        制作した成果物です
        </p>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={portfolioImage1} alt="dev.hiroto-aoki" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">個人ポートフォリオサイト</p>
            <p className="my-2 text-gray-700 text-base">
              本サイトです。経歴や技術的スキルについてまとめたJAMStackな構成のサイトです。
            </p>
            <div className="py-4">
              <span className="tag">GatsbyJS</span>
              <span className="tag">TailwindCSS</span>
              <span className="tag">Netlify</span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://dev.hiroto-aoki.com" target="_blank" rel="noopener noreferrer">
                サイトページ
              </a>
            </button>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://github.com/HirotoAoki/dev.hiroto-aoki.com" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </button>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={portfolioImage2} alt="beach-hayama" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">BEACH 葉山 Web予約サイト</p>
            <p className="my-2 text-gray-700 text-base">
              フィットネスクラブの会員向けレッスン予約のWebサイトです。<br />システム開発を担当しています。
            </p>
            <div className="py-4 text-justify">
              <span className="tag">PHP</span>
              <span className="tag">Smarty</span>
              <span className="tag">PostgreSQL</span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://outdoorfitness-club.com/schedule/hayama/" target="_blank" rel="noopener noreferrer">
                サイトページ
              </a>
            </button>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={portfolioImage3} alt="beach-hayama" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">アウトドアフィットネス Tokyo East Park</p>
            <p className="my-2 text-gray-700 text-base">
              東京都都立公園のフィットネスプログラム導入案件です。<br />ディレクション、Webサイトデザイン、マーケティングを担当しています。
            </p>
            <div className="py-4 text-justify">
              <span className="tag">ディレクション</span>
              <span className="tag">Illustrator</span>
              <span className="tag">PHP</span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 m-1 border border-green-500 hover:border-transparent rounded">
              <a href="https://tokyo-eastpark.com/outdoor/" target="_blank" rel="noopener noreferrer">
                サイトページ
              </a>
            </button>
          </div>
        </div>
      </section>
      <div className="text-center">
        <a href="/contact" className="button hover:border-gray-700 hover:bg-gray-600">
          CONTACT
        </a>
      </div>
    </Layout>
  );
}

export default CareerPage;
