import React from 'react';
import { DashboardLayout } from '@/components/dashboard/DashboardLayout';

export function DashboardOverview() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your AI agents.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Total Conversations</div>
            <div className="text-3xl font-bold text-white">12,453</div>
            <div className="text-green-400 text-sm mt-2">+12.5% from last month</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Active Agents</div>
            <div className="text-3xl font-bold text-white">8</div>
            <div className="text-green-400 text-sm mt-2">+2 new this week</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Leads Generated</div>
            <div className="text-3xl font-bold text-white">1,234</div>
            <div className="text-green-400 text-sm mt-2">+8.3% from last month</div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="text-gray-400 text-sm mb-2">Response Rate</div>
            <div className="text-3xl font-bold text-white">94.2%</div>
            <div className="text-green-400 text-sm mt-2">+2.1% from last month</div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">JD</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">New lead from John Doe</p>
                <p className="text-gray-400 text-sm">Sales Agent • 2 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <span className="text-green-400 font-bold">✓</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">Support ticket resolved</p>
                <p className="text-gray-400 text-sm">Support Agent • 15 minutes ago</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                <span className="text-blue-400 font-bold">+</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium">New integration connected</p>
                <p className="text-gray-400 text-sm">Slack • 1 hour ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
