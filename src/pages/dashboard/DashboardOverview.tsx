import React, { useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import {
  Activity,
  BarChart3,
  Bot,
  CheckCircle2,
  CreditCard,
  Key,
  MessageSquare,
  Plug2,
  Plus,
  Settings,
  Users,
  Users2,
  Workflow,
} from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

type DashboardSection =
  | 'overview'
  | 'agents'
  | 'leads'
  | 'conversations'
  | 'analytics'
  | 'workflows'
  | 'integrations'
  | 'api-keys'
  | 'billing'
  | 'settings'
  | 'team'
  | 'support';

interface DashboardPageProps {
  section: DashboardSection;
}

const sectionCopy: Record<DashboardSection, { title: string; description: string }> = {
  overview: {
    title: 'Dashboard Overview',
    description: "Welcome back! Here's what's happening with your AI agents.",
  },
  agents: {
    title: 'AI Agents',
    description: 'Create, monitor, and tune the agents working across your business.',
  },
  leads: {
    title: 'Leads',
    description: 'Track new prospects, qualification status, and follow-up ownership.',
  },
  conversations: {
    title: 'Conversations',
    description: 'Review customer conversations and hand off live opportunities.',
  },
  analytics: {
    title: 'Analytics',
    description: 'Measure agent performance, response rates, and conversion trends.',
  },
  workflows: {
    title: 'Workflows',
    description: 'Automate routing, enrichment, alerts, and sales operations.',
  },
  integrations: {
    title: 'Integrations',
    description: 'Connect ScorpioAI with the apps your team already uses.',
  },
  'api-keys': {
    title: 'API Keys',
    description: 'Manage developer credentials and production access.',
  },
  billing: {
    title: 'Billing',
    description: 'View plan usage, invoices, and payment details.',
  },
  settings: {
    title: 'Settings',
    description: 'Configure workspace profile, security, and notification defaults.',
  },
  team: {
    title: 'Team',
    description: 'Invite teammates and manage roles across your workspace.',
  },
  support: {
    title: 'Support',
    description: 'Open tickets, review help resources, and contact the ScorpioAI team.',
  },
};

function StatCard({
  label,
  value,
  trend,
}: {
  label: string;
  value: string;
  trend: string;
}) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/5 p-6">
      <div className="text-sm text-gray-400">{label}</div>
      <div className="mt-2 text-3xl font-bold text-white">{value}</div>
      <div className="mt-2 text-sm text-green-400">{trend}</div>
    </div>
  );
}

function Panel({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-white/5 p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary">
          <Icon size={20} />
        </div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function OverviewContent() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Total Conversations" value="12,453" trend="+12.5% from last month" />
        <StatCard label="Active Agents" value="8" trend="+2 new this week" />
        <StatCard label="Leads Generated" value="1,234" trend="+8.3% from last month" />
        <StatCard label="Response Rate" value="94.2%" trend="+2.1% from last month" />
      </div>

      <Panel icon={Activity} title="Recent Activity">
        <div className="space-y-4">
          {[
            ['JD', 'New lead from John Doe', 'Sales Agent - 2 minutes ago', 'bg-primary/20 text-primary'],
            ['OK', 'Support ticket resolved', 'Support Agent - 15 minutes ago', 'bg-green-500/20 text-green-400'],
            ['IN', 'New integration connected', 'Slack - 1 hour ago', 'bg-blue-500/20 text-blue-400'],
          ].map(([initials, title, meta, className]) => (
            <div key={title} className="flex items-center gap-4 rounded-lg bg-white/5 p-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${className}`}>
                <span className="text-sm font-bold">{initials}</span>
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium text-white">{title}</p>
                <p className="text-sm text-gray-400">{meta}</p>
              </div>
            </div>
          ))}
        </div>
      </Panel>
    </div>
  );
}

function AgentsContent() {
  const agents = [
    ['Sales Agent', 'Lead qualification and booking', 'Active', '1,984 conversations'],
    ['Support Agent', 'Tier-one customer support', 'Active', '728 conversations'],
    ['Onboarding Agent', 'New customer activation', 'Draft', 'Ready to train'],
  ];

  return (
    <Panel icon={Bot} title="Agent Fleet">
      <div className="grid gap-4 lg:grid-cols-3">
        {agents.map(([name, purpose, status, metric]) => (
          <div key={name} className="rounded-lg border border-white/10 bg-black/30 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-semibold text-white">{name}</h3>
                <p className="mt-1 text-sm text-gray-400">{purpose}</p>
              </div>
              <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs font-medium text-primary">{status}</span>
            </div>
            <p className="mt-5 text-sm text-gray-300">{metric}</p>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function LeadsContent() {
  const leads = [
    ['Olivia Martin', 'Enterprise plan', 'Qualified', '$18,000'],
    ['Marcus Chen', 'Support automation', 'New', '$6,400'],
    ['Priya Shah', 'Workflow rollout', 'Contacted', '$11,200'],
  ];

  return (
    <Panel icon={Users} title="Lead Pipeline">
      <div className="overflow-hidden rounded-lg border border-white/10">
        {leads.map(([name, interest, stage, value]) => (
          <div key={name} className="grid grid-cols-2 gap-4 border-b border-white/10 p-4 last:border-b-0 md:grid-cols-4">
            <span className="font-medium text-white">{name}</span>
            <span className="text-gray-400">{interest}</span>
            <span className="text-primary">{stage}</span>
            <span className="text-right text-gray-300">{value}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function ConversationsContent() {
  return (
    <Panel icon={MessageSquare} title="Conversation Queue">
      <div className="space-y-3">
        {['Pricing question escalated to sales', 'Refund policy answered automatically', 'Demo request waiting for owner'].map((item) => (
          <div key={item} className="flex items-center justify-between rounded-lg bg-black/30 p-4">
            <span className="text-white">{item}</span>
            <button className="rounded-lg border border-white/10 px-3 py-2 text-sm text-gray-300 hover:bg-white/10 hover:text-white">
              Open
            </button>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function AnalyticsContent() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <StatCard label="Conversion Rate" value="18.7%" trend="+3.4% this week" />
      <StatCard label="Avg. Response Time" value="4.8s" trend="-1.2s this week" />
      <StatCard label="CSAT" value="96%" trend="+4.0% this month" />
      <div className="rounded-lg border border-white/10 bg-white/5 p-6 lg:col-span-3">
        <div className="mb-4 flex items-center gap-3 text-white">
          <BarChart3 className="text-primary" size={22} />
          <h2 className="text-xl font-bold">Weekly Performance</h2>
        </div>
        <div className="grid h-56 grid-cols-7 items-end gap-3">
          {[46, 58, 51, 73, 64, 86, 78].map((height, index) => (
            <div key={index} className="flex h-full items-end rounded-t-lg bg-white/5">
              <div className="w-full rounded-t-lg bg-primary" style={{ height: `${height}%` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SimpleListContent({
  icon,
  title,
  items,
}: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) {
  return (
    <Panel icon={icon} title={title}>
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 rounded-lg bg-black/30 p-4 text-gray-300">
            <CheckCircle2 size={18} className="shrink-0 text-green-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function SettingsContent() {
  return (
    <Panel icon={Settings} title="Workspace Settings">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-300">Workspace name</span>
          <input className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-primary" defaultValue="ScorpioAI Workspace" />
        </label>
        <label className="space-y-2">
          <span className="text-sm font-medium text-gray-300">Default timezone</span>
          <input className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-white outline-none focus:ring-2 focus:ring-primary" defaultValue="America/Chicago" />
        </label>
      </div>
    </Panel>
  );
}

function SectionContent({ section }: DashboardPageProps) {
  switch (section) {
    case 'overview':
      return <OverviewContent />;
    case 'agents':
      return <AgentsContent />;
    case 'leads':
      return <LeadsContent />;
    case 'conversations':
      return <ConversationsContent />;
    case 'analytics':
      return <AnalyticsContent />;
    case 'workflows':
      return <SimpleListContent icon={Workflow} title="Active Workflows" items={['Route enterprise leads to sales', 'Create CRM contact after qualification', 'Send Slack alert on urgent support ticket', 'Follow up after missed demo']} />;
    case 'integrations':
      return <SimpleListContent icon={Plug2} title="Connected Apps" items={['Slack connected', 'HubSpot connected', 'Google Calendar connected', 'Zendesk available']} />;
    case 'api-keys':
      return <SimpleListContent icon={Key} title="API Key Access" items={['Production key active', 'Development key active', 'Last rotation 14 days ago', 'Webhook signing enabled']} />;
    case 'billing':
      return <SimpleListContent icon={CreditCard} title="Billing Summary" items={['Growth plan active', '82% of monthly conversations used', 'Next invoice scheduled', 'Visa ending in 4242']} />;
    case 'settings':
      return <SettingsContent />;
    case 'team':
      return <SimpleListContent icon={Users2} title="Team Members" items={['Ava has admin access', 'Liam owns sales agents', 'Noah manages integrations', 'Invite link expires in 6 days']} />;
    case 'support':
      return <SimpleListContent icon={MessageSquare} title="Support Center" items={['Priority support included', 'One open ticket', 'Knowledge base available', 'Book onboarding office hours']} />;
    default:
      return <OverviewContent />;
  }
}

export function DashboardPage({ section }: DashboardPageProps) {
  const [, setLocation] = useLocation();
  const copy = sectionCopy[section];
  const isAuthenticated = Boolean(localStorage.getItem('auth_token'));

  useEffect(() => {
    if (!isAuthenticated) {
      setLocation('/login');
      return;
    }

    document.title = `ScorpioAI | ${copy.title}`;
  }, [copy.title, isAuthenticated, setLocation]);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-white">{copy.title}</h1>
            <p className="mt-2 text-gray-400">{copy.description}</p>
          </div>
          {section === 'agents' && (
            <Link
              href="/dashboard/agents"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/90"
            >
              <Plus size={16} />
              New Agent
            </Link>
          )}
        </div>

        <SectionContent section={section} />
      </div>
    </DashboardLayout>
  );
}

export const DashboardOverview = DashboardPage;
