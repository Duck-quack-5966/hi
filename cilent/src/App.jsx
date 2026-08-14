import React, { useEffect, useState } from 'react';
import { 
  LayoutDashboard, Home, BarChart3, Users, FolderKanban, Settings, 
  Search, Bell, Plus, Eye, UserCheck, CheckCircle2, Activity, MoreHorizontal 
} from 'lucide-react';

export default function App() {
  const [metrics, setMetrics] = useState({
    totalViews: "...",
    activeUsers: "...",
    taskCompletion: "...",
    systemStatus: "..."
  });
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('/api/metrics')
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Error fetching metrics:", err));

    fetch('/api/activities')
      .then((res) => res.json())
      .then((data) => setActivities(data))
      .catch((err) => console.error("Error fetching activities:", err));
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="h-16 flex items-center px-6 border-b border-slate-100 gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold">
              <LayoutDashboard className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg text-slate-900">Control Hub</span>
          </div>

          <nav className="p-4 space-y-1">
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg bg-blue-50 text-blue-600">
              <Home className="w-4 h-4" /> Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <BarChart3 className="w-4 h-4" /> Analytics
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <Users className="w-4 h-4" /> Users
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <FolderKanban className="w-4 h-4" /> Projects
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <Settings className="w-4 h-4" /> Settings
            </a>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-100 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold text-sm">
            DQ
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">Duck Quack</p>
            <p class="text-xs text-slate-500 truncate">admin@example.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        {/* Top Bar */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-9 pr-4 py-1.5 text-sm rounded-lg border border-slate-200 focus:outline-none focus:border-blue-500 bg-slate-50"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-500 hover:bg-slate-100 rounded-lg relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-blue-600 rounded-full"></span>
            </button>
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm transition-colors flex items-center gap-2">
              <Plus className="w-4 h-4" /> New Action
            </button>
          </div>
        </header>

        {/* Dashboard Body */}
        <main className="p-8 space-y-8 flex-1 overflow-y-auto">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
            <p className="text-slate-500 text-sm mt-1">Here is what is happening with your project today.</p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Total Views</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{metrics.totalViews}</h3>
                <span className="text-xs font-semibold text-emerald-600 mt-2 inline-block">↑ 12% vs last month</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Active Users</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{metrics.activeUsers}</h3>
                <span className="text-xs font-semibold text-emerald-600 mt-2 inline-block">↑ 8% vs last month</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Tasks Completed</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{metrics.taskCompletion}</h3>
                <span className="text-xs font-semibold text-blue-600 mt-2 inline-block">On track</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">System Status</p>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">{metrics.systemStatus}</h3>
                <span className="text-xs font-semibold text-emerald-600 mt-2 inline-block">All systems operational</span>
              </div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Activity className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Activities Table */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-base font-semibold text-slate-900">Recent Activities</h2>
              <button className="text-sm text-blue-600 font-medium hover:underline">View all</button>
            </div>

            <div className="overflow-x-auto">
              <table class="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-xs uppercase font-medium border-b border-slate-100">
                    <th className="py-3 px-6">Item</th>
                    <th className="py-3 px-6">Category</th>
                    <th className="py-3 px-6">Status</th>
                    <th className="py-3 px-6">Date</th>
                    <th className="py-3 px-6 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {activities.map((act) => (
                    <tr key={act.id} className="hover:bg-slate-50/50">
                      <td className="py-4 px-6 font-medium text-slate-900">{act.item}</td>
                      <td className="py-4 px-6 text-slate-500">{act.category}</td>
                      <td className="py-4 px-6">
                        <span className={`px-2.5 py-1 text-xs font-medium rounded-full ${
                          act.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                          act.status === 'In Progress' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'
                        }`}>
                          {act.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-slate-500">{act.date}</td>
                      <td className="py-4 px-6 text-right">
                        <button className="text-slate-400 hover:text-slate-600">
                          <MoreHorizontal className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
