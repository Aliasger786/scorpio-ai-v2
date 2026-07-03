import { useEffect } from 'react';
import { type LucideIcon, Bot, MessageCircle, ShoppingBag, ShoppingCart, Headphones, Star, Megaphone, RefreshCw, BarChart2, Package, CheckCircle2, Zap, Target } from 'lucide-react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { Link } from 'wouter';

interface Feature {
  Icon: LucideIcon;
  title: string;
  desc: string;
  points: string[];
}

export default function Features() {
  useEffect(() => {
    document.title = "ScorpioAI | Features";
  }, []);

  const features: Feature[] = [
    { Icon: Zap, title: "Lead Generation", desc: "Capture anonymous website visitors automatically.", points: ["Exit-intent capture", "Social media scraping", "Instant engagement"] },
    { Icon: Target, title: "Lead Scoring", desc: "Identify your hottest prospects.", points: ["Behavioral tracking", "Intent analysis", "Automated routing"] },
    { Icon: MessageCircle, title: "DM Automation", desc: "Turn followers into customers.", points: ["IG/FB Auto-replies", "Comment-to-DM triggers", "Qualification flows"] },
    { Icon: ShoppingBag, title: "Product Recommendations", desc: "Personalized suggestions at scale.", points: ["Purchase history matching", "Cross-selling", "Dynamic bundles"] },
    { Icon: ShoppingCart, title: "Cart Recovery", desc: "Bring back lost revenue.", points: ["Multi-channel follow-up", "Dynamic discounts", "Objection handling"] },
    { Icon: Headphones, title: "Customer Support", desc: "Instant answers 24/7.", points: ["Order tracking integration", "Refund processing", "Human handoff"] },
    { Icon: Star, title: "Review Collection", desc: "Build social proof on autopilot.", points: ["Post-purchase triggers", "Negative review interception", "Incentive delivery"] },
    { Icon: Megaphone, title: "Marketing Content", desc: "Generate converting copy.", points: ["Email newsletters", "SMS campaigns", "A/B testing"] },
    { Icon: RefreshCw, title: "CRM Sync", desc: "Keep your data pristine.", points: ["Bi-directional sync", "Tag automation", "Duplicate prevention"] },
    { Icon: Bot, title: "Workflow Automation", desc: "Connect tools via n8n.", points: ["1000+ app integrations", "Custom webhooks", "Conditional logic"] },
    { Icon: BarChart2, title: "AI Analytics", desc: "See the math behind the magic.", points: ["Revenue attribution", "Conversation sentiment", "Drop-off analysis"] },
    { Icon: Package, title: "Multi-channel Messaging", desc: "Be everywhere they are.", points: ["WhatsApp & SMS", "Email orchestration", "Unified inbox"] }
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Everything You Need to Automate Revenue</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">Stop piecing together 10 different SaaS tools. ScorpioAI provides a unified suite of capabilities designed specifically to generate, recover, and protect your revenue.</p>
      </section>

      <SectionWrapper variant="grid" className="pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <GlassCard key={i} className="flex flex-col h-full" delay={i * 0.05}>
              <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-4">
                <f.Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
              <p className="text-gray-400 mb-6">{f.desc}</p>
              <ul className="space-y-2 mt-auto">
                {f.points.map((p, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle2 size={14} className="text-secondary" /> {p}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper variant="gradient">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Manual Operations vs. ScorpioAI</h2>
          <div className="glass rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-4 font-bold text-white">
              <div>Capability</div>
              <div className="text-gray-400">Manual Team</div>
              <div className="text-primary">ScorpioAI</div>
            </div>
            {[
              ["Availability", "9 AM - 5 PM, Mon-Fri", "24/7/365"],
              ["Response Time", "Hours or days", "< 2 seconds"],
              ["Cost", "$40k+ per employee", "Fraction of the cost"],
              ["Cart Recovery", "Rarely done manually", "Automated & instant"],
              ["Lead Qualification", "Inconsistent", "Standardized & rigorous"],
              ["Scalability", "Requires hiring", "Infinite instantly"],
              ["Data Accuracy", "Prone to human error", "100% precise syncing"],
              ["Multi-language", "Requires specific hires", "Fluent in 50+ languages"]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-3 p-4 border-b border-white/5 last:border-0 text-sm">
                <div className="font-medium text-white">{row[0]}</div>
                <div className="text-gray-400">{row[1]}</div>
                <div className="text-primary font-medium">{row[2]}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold text-white mb-6">Stop paying for unread emails and missed calls.</h2>
        <Link href="/book-demo" className="inline-block px-8 py-4 rounded-lg bg-primary text-white font-bold hover:scale-105 transition-transform glow-purple">
          See Features in Action
        </Link>
      </section>
    </div>
  );
}

