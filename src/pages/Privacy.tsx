import React, { useEffect } from 'react';

export default function Privacy() {
  useEffect(() => {
    document.title = "ScorpioAI | Privacy Policy";
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-400">Last updated: October 15, 2023</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        <p>At ScorpioAI ("we", "our", or "us"), we are committed to protecting your privacy and ensuring the security of your personal and business data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website, platform, and AI agent services.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Information We Collect</h2>
        <p>We collect information that you provide directly to us, including:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
          <li><strong>Account Information:</strong> Name, email address, password, company name, and billing information.</li>
          <li><strong>Integration Data:</strong> Information from third-party platforms you connect to ScorpioAI (e.g., Shopify, CRM data, messaging platforms).</li>
          <li><strong>Agent Training Data:</strong> Documents, FAQs, and chat histories uploaded to train your specific AI agents.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. How We Use Your Data</h2>
        <p>We use the collected information for various purposes, including:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
          <li>To provide, maintain, and improve our services.</li>
          <li>To process transactions and send related information.</li>
          <li>To run and optimize your dedicated AI agents based on your specific business rules.</li>
          <li><strong>Note on AI Training:</strong> We DO NOT use your private customer data or proprietary business information to train our global baseline models. Your data is isolated to your specific tenant.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Data Security</h2>
        <p>We implement appropriate technical and organizational security measures designed to protect your personal information against accidental or unlawful destruction, loss, alteration, and unauthorized disclosure or access. All data is encrypted at rest and in transit using industry-standard protocols.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Third-Party Disclosures</h2>
        <p>We do not sell your personal data. We may share your information with third-party service providers (e.g., payment processors, cloud hosting providers) only to the extent necessary to deliver our services. These providers are bound by strict confidentiality agreements.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="text-primary">privacy@scorpioai.com</p>
      </div>
    </div>
  );
}
