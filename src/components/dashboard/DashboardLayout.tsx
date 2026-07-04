import React from 'react';
import { Link, useLocation } from 'wouter';
import { Sidebar, menuItems } from './Sidebar';
import { Topbar } from './Topbar';
import { cn } from '@/lib/utils';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen bg-black">
      <Sidebar />
      <div className="lg:pl-64">
        <Topbar />
        <nav className="border-b border-white/10 px-4 py-3 lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.path === '/dashboard' ? location === item.path : location.startsWith(item.path);

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={cn(
                    'inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                    isActive ? 'bg-primary text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
        <main className="p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
