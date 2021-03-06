import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="CONTACT｜dev.hiroto-aoki.com"
      />
 
      <section>
        <div className="text-center">
          <h1 className="mb-4 text-5xl text-gray-800">
          CONTACT
          </h1>
          <p className="mb-4 text-base text-gray-700">
          仕事相談問い合わせはこちらからお願いいたします
          </p>
        </div>
        <form className="mx-auto md:w-1/2" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/thanks">
          <input type="hidden" name="form-name" value="contact" />
          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="name"
          >
            名前
          </label>

          <input
            className="w-full mb-6 form-input"
            name="name"
            placeholder="青木宏和"
            type="text"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="emeil"
          >
            メールアドレス
          </label>
          
          <input
            className="w-full mb-6 form-input"
            name="emeil"
            placeholder="メールアドレス"
            type="email"
            required
          />

          <label
            className="block mb-2 text-xs font-bold uppercase"
            htmlFor="message"
          >
            メッセージ
          </label>

          <textarea
            className="w-full mb-6 form-textarea"
            name="message"
            placeholder=""
            rows="8"
          />
          <div className="text-center">
            <button className="button hover:border-gray-700 hover:bg-gray-600">
              送信
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}

export default ContactPage;
