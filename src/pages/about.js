import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import profileImage from "../images/profile.png";

function AboutPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="ABOUT｜dev.hiroto-aoki.com"
      />
    
      <h1 className="mb-4 text-5xl text-gray-800 text-center">
        ABOUT ME
      </h1>
      <section className="my-8">
        <h2 className="my-2 py-1 text-xl font-bold border-2 border-gray-900 text-center">
          プロフィール
        </h2>
        <div className="flex flex-col md:flex-row">
          <figure className="sm:w-1/4 mx-4 my-4 md:w-1/3">
            <img className="rounded-full" alt="青木宏和" src={profileImage} />
          </figure>        
          <p className="sm:w-3/4 px-4 my-4 text-base">
            はじめまして、青木宏和と申します。<br /> 
            フィットネス指導とWebサイト開発に従事しています。<br /><br />
            学生時代、カナダでの英語留学中にプログラミングを学び、大学卒業後にSIer企業でシステムエンジニアとしてキャリアをスタート。
            その後、社外での活動や趣味が高じてフィットネススポーツ業界にインストラクターとして転身。<br />
            フィットネス指導者＆Webエンジニアとしてのパラレルキャリアを構築するために日々修練中。<br /><br />
            運動プログラムやWebシステムの開発を通じて、教育・福祉分野に関わる社会活動に携わっていきたいです。
          </p>
        </div>
        <div className="text-center">
          <a href="/career" className="button hover:border-gray-700 hover:bg-gray-600">
            MY CAREER
          </a>
          <a href="/contact" className="button hover:border-gray-700 hover:bg-gray-600">
            CONTACT
          </a>
        </div>
      </section>
    </Layout>
  );
}

export default AboutPage;
