import React, { useEffect } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { GlassCard } from '@/components/ui/GlassCard';
import { ShoppingCart, Calendar, Code2, Building, Heart, GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';
import { Link } from 'wouter';

export default function Solutions() {
  useEffect(() => {
    document.title = "ScorpioAI | Solutions";
  }, []);

  const solutions = [
    {
      icon: <ShoppingCart size={40} />,
      title: "E-commerce",
      desc: "Stop leaking revenue from abandoned carts and unanswered DMs.",
      benefits: ["Automated cart recovery via WhatsApp", "Instant product recommendations", "24/7 order tracking support"],
      color: "purple"
    },
    {
      icon: <Calendar size={40} />,
      title: "Service Businesses",
      desc: "Fill your calendar without lifting a finger.",
      benefits: ["Instant lead response", "Automated qualification", "Direct calendar booking"],
      color: "blue"
    },
    {
      icon: <Code2 size={40} />,
      title: "SaaS Companies",
      desc: "Scale your sales motion without hiring more SDRs.",
      benefits: ["In-app feature education", "Churn prevention outreach", "Automated demo booking"],
      color: "purple"
    },
    {
      icon: <Building size={40} />,
      title: "Agencies",
      desc: "White-label AI agents for your clients.",
      benefits: ["New revenue streams", "Automated client reporting", "Zero fulfillment cost"],
      color: "blue"
    },
    {
      icon: <Heart size={40} />,
      title: "Healthcare",
      desc: "Patient scheduling and triage on autopilot.",
      benefits: ["HIPAA compliant routing", "Appointment reminders", "Intake form automation"],
      color: "purple"
    },
    {
      icon: <MapPin size={40} />,
      title: "Local Businesses",
      desc: "Dominate local SEO and Google Business messages.",
      benefits: ["Google Maps chat automation", "Review collection", "Service quoting"],
      color: "blue"
    }
  ];

  return (
    <div className="pt-24 min-h-screen pb-20">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Built for Every<br/>Business Model</h1>
        <p className="text-xl text-gray-400 font-light leading-relaxed">ScorpioAI adapts to your specific industry logic, terminology, and revenue model out of the box.</p>
      </section>

      <SectionWrapper variant="grid" className="pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <GlassCard key={i} className="p-8 md:p-10 flex flex-col md:flex-row gap-8 items-start" neonBorder={sol.color === 'purple'}>
              <div className={`w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center bg-white/5 ${sol.color === 'purple' ? 'text-primary' : 'text-secondary'}`}>
                {sol.icon}
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">{sol.title}</h3>
                <p className="text-lg text-gray-400 mb-6">{sol.desc}</p>
                <ul className="space-y-3 mb-8">
                  {sol.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className={sol.color === 'purple' ? 'text-primary' : 'text-secondary'} size={20} />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo" className={`inline-block px-6 py-2 rounded-lg font-medium border ${sol.color === 'purple' ? 'border-primary/50 text-primary hover:bg-primary hover:text-white' : 'border-secondary/50 text-secondary hover:bg-secondary hover:text-black'} transition-colors`}>
                  See Use Case
                </Link>
              </div>
            </GlassCard>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
