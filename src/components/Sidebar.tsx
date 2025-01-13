import React from 'react';
import {
  Home,
  BarChart2,
  Settings,
  AlertTriangle,
  Users,
  Calendar,
  FileText,
  HelpCircle,
  Bell,
  Building2
} from 'lucide-react';

const menuItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Building2, label: 'Facilities' },
  { icon: BarChart2, label: 'Analytics' },
  { icon: AlertTriangle, label: 'Alerts' },
  { icon: Users, label: 'Users' },
  { icon: Calendar, label: 'Schedule' },
  { icon: FileText, label: 'Reports' },
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

export default function Sidebar() {
  return (
    <div className="bg-gray-900 text-gray-300 w-64 min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Bell className="w-6 h-6 text-blue-400" />
          <span className="text-xl font-bold text-white">SmartMonitor</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <a
                href="#"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                  item.active
                    ? 'bg-blue-600 text-white'
                    : 'hover:bg-gray-800'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
            <span className="text-sm font-medium">JD</span>
          </div>
          <div>
            <div className="text-sm font-medium text-white">John Doe</div>
            <div className="text-xs text-gray-400">Administrator</div>
          </div>
        </div>
      </div>
    </div>
  );
}