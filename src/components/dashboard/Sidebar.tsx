import React from 'react';
import { Link, useLocation } from 'wouter';
import { 
  LayoutDashboard, 
  Bot, 
  Users, 
  MessageSquare, 
  BarChart3, 
  Workflow, 
  Plug2, 
  Key, 
  CreditCard, 
  Settings, 
  Users2, 
  HelpCircle,
  LogOut
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const menuItems = [
  { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
  { icon: Bot, label: 'AI Agents', path: '/dashboard/agents' },
  { icon: Users, label: 'Leads', path: '/dashboard/leads' },
  { icon: MessageSquare, label: 'Conversations', path: '/dashboard/conversations' },
  { icon: BarChart3, label: 'Analytics', path: '/dashboard/analytics' },
  { icon: Workflow, label: 'Workflows', path: '/dashboard/workflows' },
  { icon: Plug2, label: 'Integrations', path: '/dashboard/integrations' },
  { icon: Key, label: 'API Keys', path: '/dashboard/api-keys' },
  { icon: CreditCard, label: 'Billing', path: '/dashboard/billing' },
  { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  { icon: Users2, label: 'Team', path: '/dashboard/team' },
  { icon: HelpCircle, label: 'Support', path: '/dashboard/support' },
];

export function Sidebar() {
  const [location, setLocation] = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_company');
    setLocation('/login');
  };

  return (
    <aside className="fixed left-0 top-0 z-50 h-screen w-64 bg-black border-r border-white/10 hidden lg:block">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center border-b border-white/10 px-6">
          <Link href="/" className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#A855F7" />
              <path d="M2 23L16 30L30 23V9L16 16L2 9V23Z" fill="#A855F7" fillOpacity="0.5" />
            </svg>
            <span className="font-bold text-lg text-white">ScorpioAI</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1 px-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.path === '/dashboard' ? location === item.path : location.startsWith(item.path);
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={cn(
                      'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                      isActive
                        ? 'bg-primary text-white'
                        : 'text-gray-400 hover:bg-white/5 hover:text-white'
                    )}
                  >
                    <Icon size={18} />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout */}
        <div className="border-t border-white/10 p-3">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
