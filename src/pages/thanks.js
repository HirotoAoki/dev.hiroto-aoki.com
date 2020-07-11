import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import viewImage from "../images/view.jpg";

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
          メール送信完了
          </h1>
          <p className="mb-4 text-base text-gray-700">
          お問い合わせいいただきありがとうございます。<br />
          内容を確認した後にご連絡いたします。
          </p>
          <img className="lg:w-1/2 md:w-1/2 mx-auto mb-8" src={viewImage} alt="サンクス" />
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;
