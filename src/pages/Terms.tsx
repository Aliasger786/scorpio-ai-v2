import React, { useEffect } from 'react';

export default function Terms() {
  useEffect(() => {
    document.title = "ScorpioAI | Terms of Service";
  }, []);

  return (
    <div className="pt-32 pb-20 min-h-screen container mx-auto px-4 max-w-4xl">
      <div className="mb-12 border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
        <p className="text-gray-400">Last updated: October 15, 2023</p>
      </div>

      <div className="prose prose-invert prose-lg max-w-none text-gray-300">
        <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the ScorpioAI platform operated by ScorpioAI Inc.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">1. Acceptance of Terms</h2>
        <p>By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service. If you are accepting these terms on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">2. Use of AI Agents</h2>
        <p>You are solely responsible for the actions, output, and behavior of the AI agents deployed under your account. You agree not to use the Service to:</p>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-400">
          <li>Generate spam, unsolicited outreach, or harassing communications.</li>
          <li>Impersonate human beings without proper disclosure where required by law.</li>
          <li>Process highly sensitive data (e.g., complete credit card numbers, SSNs) through the chat interface directly, bypassing secure payment links.</li>
        </ul>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">3. Subscription and Billing</h2>
        <p>Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis (Billing Cycle). At the end of each Billing Cycle, your Subscription will automatically renew under the exact same conditions unless you cancel it or ScorpioAI cancels it.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">4. Intellectual Property</h2>
        <p>The Service and its original content (excluding Content provided by you), features, and functionality are and will remain the exclusive property of ScorpioAI and its licensors. The AI models, logic flows, and underlying architecture constitute trade secrets of ScorpioAI.</p>

        <h2 className="text-2xl font-bold text-white mt-10 mb-4">5. Limitation of Liability</h2>
        <p>In no event shall ScorpioAI, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
      </div>
    </div>
  );
}
