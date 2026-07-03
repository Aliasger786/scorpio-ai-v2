import React, { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Key, Terminal, Code2, Zap, Search } from 'lucide-react';

export default function Docs() {
  const [activeTab, setActiveTab] = useState('Getting Started');

  useEffect(() => {
    document.title = "ScorpioAI | Documentation";
  }, []);

  const categories = [
    { name: "Getting Started", icon: <BookOpen size={18} /> },
    { name: "AI Agents", icon: <Zap size={18} /> },
    { name: "Integrations", icon: <Code2 size={18} /> },
    { name: "API Reference", icon: <Terminal size={18} /> },
    { name: "Webhooks", icon: <Key size={18} /> }
  ];

  return (
    <div className="pt-24 min-h-screen flex flex-col">
      <div className="border-b border-white/10 bg-black/50 sticky top-20 z-40 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold text-white">Documentation</h1>
            <Badge variant="purple" className="text-xs">v2.0</Badge>
          </div>
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-1.5 text-sm text-white focus:outline-none focus:border-primary transition-colors w-64"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 flex-1 flex flex-col md:flex-row py-8 gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <nav className="space-y-1 sticky top-40">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setActiveTab(cat.name)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                  activeTab === cat.name 
                    ? 'bg-primary/10 text-primary' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl">
          {activeTab === 'Getting Started' && (
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-white mb-6">Quick Start Guide</h2>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Welcome to ScorpioAI. This guide will walk you through deploying your first AI agent and connecting it to your existing data sources in less than 5 minutes.
              </p>

              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">1</span>
                    Install the Snippet
                  </h3>
                  <p className="text-gray-400 mb-4">Paste this code inside the <code>&lt;head&gt;</code> tag of your website to enable the ScorpioAI widget and tracking.</p>
                  
                  <div className="bg-[#0D0D0D] border border-white/10 rounded-lg p-4 overflow-x-auto relative group">
                    <button className="absolute top-2 right-2 bg-white/10 text-xs px-2 py-1 rounded text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">Copy</button>
                    <pre className="text-sm font-mono text-gray-300">
                      <span className="text-pink-400">&lt;script&gt;</span>{'\n'}
                      {'  '}window.scorpio = window.scorpio || [];{'\n'}
                      {'  '}scorpio.push(<span className="text-yellow-300">'init'</span>, <span className="text-yellow-300">'YOUR_PROJECT_ID'</span>);{'\n'}
                      <span className="text-pink-400">&lt;/script&gt;</span>{'\n'}
                      <span className="text-pink-400">&lt;script</span> <span className="text-green-300">src</span>=<span className="text-yellow-300">"https://cdn.scorpioai.com/widget.js"</span> <span className="text-green-300">async</span><span className="text-pink-400">&gt;&lt;/script&gt;</span>
                    </pre>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">2</span>
                    Authenticate
                  </h3>
                  <p className="text-gray-400 mb-4">If you're using our API directly, you'll need to pass your Bearer token in the headers.</p>
                  <div className="bg-[#0D0D0D] border border-white/10 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                      <span className="text-blue-400">const</span> response = <span className="text-blue-400">await</span> fetch(<span className="text-yellow-300">'https://api.scorpioai.com/v1/agents'</span>, {'{\n'}
                      {'  '}headers: {'{\n'}
                      {'    '}<span className="text-yellow-300">'Authorization'</span>: <span className="text-yellow-300">'Bearer YOUR_API_KEY'</span>,{'\n'}
                      {'    '}<span className="text-yellow-300">'Content-Type'</span>: <span className="text-yellow-300">'application/json'</span>{'\n'}
                      {'  }\n'}
                      {'}'});
                    </pre>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">3</span>
                    Deploy an Agent
                  </h3>
                  <p className="text-gray-400 mb-4">Activate a pre-configured agent via the API. Pass the agent type and your desired configuration.</p>
                  <div className="bg-[#0D0D0D] border border-white/10 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-sm font-mono text-gray-300">
                      POST /v1/agents/deploy{'\n\n'}
                      {'{'}{'\n'}
                      {'  '}<span className="text-green-300">"agent_type"</span>: <span className="text-yellow-300">"cart_recovery"</span>,{'\n'}
                      {'  '}<span className="text-green-300">"config"</span>: {'{'}{'\n'}
                      {'    '}<span className="text-green-300">"channel"</span>: <span className="text-yellow-300">"whatsapp"</span>,{'\n'}
                      {'    '}<span className="text-green-300">"delay_minutes"</span>: <span className="text-purple-400">30</span>,{'\n'}
                      {'    '}<span className="text-green-300">"discount_code"</span>: <span className="text-yellow-300">"COMEBACK10"</span>{'\n'}
                      {'  }'}{'\n'}
                      {'}'}
                    </pre>
                  </div>
                </section>
              </div>
            </div>
          )}

          {activeTab !== 'Getting Started' && (
            <div className="animate-fade-in text-center py-20">
              <Code2 className="w-16 h-16 text-white/20 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-2">{activeTab}</h2>
              <p className="text-gray-400">This documentation section is currently being updated.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
