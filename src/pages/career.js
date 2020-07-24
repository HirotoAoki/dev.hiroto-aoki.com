import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import workImage1 from "../images/fujitsu.png";
import workImage2 from "../images/senku.png";
import workImage3 from "../images/beachtown.png";
import portfolioImage1 from "../images/hiroto-aoki.png";
import portfolioImage2 from "../images/beach-hayama.png";
import portfolioImage3 from "../images/tep.png";
import portfolioImage4 from "../images/view.jpg";
import skillImage1 from "../images/frontend.svg";
import skillImage2 from "../images/backend.svg";
import skillImage3 from "../images/tools.svg";
import skillImage4 from "../images/fitness.svg";



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
          在籍した会社での職務内容です
        </p>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage1} alt="Fujitsu" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">富士通株式会社</p>
            <p className="italic text-md mb-2">2007年4月〜2015年2月</p>
            <p className="my-2 text-gray-700 text-base">
              顧客管理システムのプロジェクトに参画しシステム設計やコーティングを担当しました。メンテナンスを容易にするために独自フレームワークを実装するなど、柔軟なシステム構築の概念を学びました。<br />
              在籍中に個人活動としてビジネスモデルを考案し特許出願しています。
            </p>
            <div className="py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">設計</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Java</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">ビジネスモデル特許出願</span>
            </div>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage2} alt="Fujitsu" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">株式会社 先駆</p>
            <p className="italic text-md mb-2">2015年2月〜2015年7月</p>
            <p className="my-2 text-gray-700 text-base">
              大学や美術館のホームページ制作を担当し、画面作成を担当しました。<br />
              ユーザーの目に触れる画面を通じてマークアップ言語でのコーディングについて学びました。
            </p>
            <div className="py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">HTML</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">CSS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">JavaScript</span>
            </div>         
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={workImage3} alt="BEACHTOWN" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">株式会社 BEACHTOWN</p>
            <p className="italic text-md mb-2">2015年7月〜2020年4月</p>
            <p className="my-2 text-gray-700 text-base">
              フィットネスプログラムの指導、および施設開設のディレクション、社内SEを兼務しWeb予約サイトの構築を担当しました。<br />
              マネージメント、課題解決力が養われる経験となりました。
            </p>
            <div className="py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">インストラクター</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">マネージメント</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">システム開発</span>
            </div>
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
            <img className="px-4 py-4 md:w-1/3 w-full h-full" src={skillImage1} alt="フロントエンド" />
            <div className="px-6 py-4">
              <p className="text-center font-bold text-lg my-2">フロントエンド</p>
              <p className="text-justify text-gray-700 text-base">
                <ul>
                  <li>HTML</li>
                  <li>TailwindCSS / Sass</li>
                  <li>Gatsby.js / Node.js / Vue.js</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 my-4 flex flex-col md:flex-row rounded shadow-lg">
            <img className="px-4 py-4 md:w-1/3 w-full h-full" src={skillImage2} alt="バックエンド" />
            <div className="px-6 py-4">
              <p className="text-center font-bold text-lg my-2">バックエンド</p>
              <p className="text-gray-700 text-base">
              <ul>
                <li>PHP - Laravel / Smarty </li>
                <li>Java - Struts</li>
                <li>RDB - Oracle / PostgreSQL</li>
              </ul>
             </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="lg:w-1/2 md:w-1/2 my-4 flex flex-col md:flex-row rounded shadow-lg">
            <img className="px-4 py-4 md:w-1/3 w-full h-full" src={skillImage3} alt="その他" />
            <div className="px-6 py-4">
              <p className="text-center font-bold text-lg my-2">その他</p>
              <p className="text-gray-700 text-base">
              <ul>
                <li>Netlify </li>
                <li>Xserver / お名前.com</li>
                <li>Visual Studio Code</li>
              </ul>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-1/2 my-4 flex flex-col md:flex-row rounded shadow-lg">
            <img className="px-4 py-4 md:w-1/3 w-full h-full" src={skillImage4} alt="フィットネス" />
            <div className="px-6 py-4">
              <p className="text-center font-bold text-lg my-2">フィットネス関連</p>
              <p className="text-gray-700 text-base">
              <ul>
                <li>ランニング指導 </li>
                <li>ノルディックウォーキング指導</li>
                <li>体幹トレーニング指導</li>
                <li>フィットネス施設開設ディレクション</li>
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
              本サイトです。経歴や技術的スキルについてまとめています。
            </p>
            <div className="py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">GatsbyJS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">TailwindCSS</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Netlify</span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 mr-2 border border-green-500 hover:border-transparent rounded">
              <a href="https://dev.hiroto-aoki.com" target="_blank" rel="noopener noreferrer">
                DEMO
              </a>
            </button>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 mr-2 border border-green-500 hover:border-transparent rounded">
              <a href="https://github.com/HirotoAoki/dev.hiroto-aoki.com" target="_blank" rel="noopener noreferrer">
                Github
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
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">PHP</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Smarty</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">PostgreSQL</span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 mr-2 border border-green-500 hover:border-transparent rounded">
              <a href="https://outdoorfitness-club.com/schedule/hayama/" target="_blank" rel="noopener noreferrer">
                オフィシャルサイト
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
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">ディレクション</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Illustrator</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">PHP</span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 mr-2 border border-green-500 hover:border-transparent rounded">
              <a href="https://tokyo-eastpark.com/outdoor/" target="_blank" rel="noopener noreferrer">
                オフィシャルサイト
              </a>
            </button>
          </div>
        </div>
        <div className="my-4 flex flex-col md:flex-row rounded shadow-lg">
          <img className="px-4 py-4 md:w-1/2 w-full h-full" src={portfolioImage4} alt="" />
          <div className="px-6 py-4">
            <p className="font-bold text-lg mb-2">Laravel オリジナルシステム</p>
            <p className="my-2 text-gray-700 text-base">
              Laravel オリジナルシステムの説明
            </p>
            <div className="py-4 text-justify">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">Laravel</span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"></span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"></span>
            </div>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 mr-2 border border-green-500 hover:border-transparent rounded">
              <a href="" target="_blank" rel="noopener noreferrer">
                DEMO
              </a>
            </button>
            <button className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-1 px-3 mr-2 border border-green-500 hover:border-transparent rounded">
              <a href="https://github.com/HirotoAoki/" target="_blank" rel="noopener noreferrer">
                Github
              </a>
            </button>
          </div>
        </div> 
      </section>
      <div className="text-center">
        <a href="/contact" className="px-4 py-2 mx-2 my-4 text-sm font-bold text-white bg-gray-700 border-b-4 border-gray-800 rounded hover:border-gray-700 hover:bg-gray-600 justify-center">
          CONTACT
        </a>
      </div>
    </Layout>
  );
}

export default CareerPage;
