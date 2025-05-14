
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Bell, 
  Users, 
  FileText, 
  BarChart2, 
  Settings 
} from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Overview' },
  { path: '/alerts', icon: Bell, label: 'Alerts' },
  { path: '/students', icon: Users, label: 'Students' },
  { path: '/policies', icon: FileText, label: 'Policies' },
  { path: '/reports', icon: BarChart2, label: 'Reports' },
  { path: '/settings', icon: Settings, label: 'Settings' },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="h-screen w-60 border-r border-sidebar-border flex flex-col bg-sidebar">
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center">
          <div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-sm">
            C
          </div>
          <span className="ml-2 font-bold text-lg text-sidebar-foreground">Corsan</span>
        </div>
      </div>
      
      <nav className="flex-1 py-6">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-3 py-2 rounded-md text-sm transition-colors ${
                    isActive
                      ? 'bg-sidebar-active text-sidebar-active-foreground font-medium'
                      : 'text-sidebar-foreground hover:bg-sidebar-active/50'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center text-sm text-sidebar-foreground">
          <div className="h-6 w-6 bg-gray-200 rounded-md flex items-center justify-center text-xs font-medium">
            A
          </div>
          <div className="ml-2">
            <div className="font-medium">Admin User</div>
            <div className="text-xs text-muted-foreground">admin@corsan.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
