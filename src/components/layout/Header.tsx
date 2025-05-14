
import React from 'react';
import { Bell, Search } from 'lucide-react';

interface HeaderProps {
  title: string;
  action?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, action }) => {
  return (
    <header className="page-header">
      <h1 className="page-title">{title}</h1>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="h-9 w-[200px] md:w-[300px] pl-9 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        
        <button className="p-2 relative rounded-full hover:bg-muted/50 transition-colors">
          <Bell size={18} className="text-muted-foreground" />
          <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-primary"></span>
        </button>
        
        {action}
      </div>
    </header>
  );
};

export default Header;
