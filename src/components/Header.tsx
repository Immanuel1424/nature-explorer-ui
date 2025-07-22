import React from 'react';
import { Leaf, TreePine, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: <TreePine className="h-4 w-4" /> },
    { id: 'explorer', label: 'Ecosystem Explorer', icon: <Leaf className="h-4 w-4" /> },
    { id: 'about', label: 'About', icon: <Github className="h-4 w-4" /> }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-organic">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
            <div className="p-2 bg-gradient-forest rounded-lg shadow-leaf group-hover:shadow-deep transition-all duration-300">
              <TreePine className="h-8 w-8 text-primary-foreground animate-sway" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-forest bg-clip-text text-transparent">
                EcoFilesystem
              </h1>
              <p className="text-sm text-muted-foreground">
                Nature's Digital Hierarchy
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                size="sm"
                className={`
                  transition-all duration-300 gap-2
                  ${currentPage === item.id 
                    ? 'bg-gradient-canopy text-primary-foreground shadow-leaf' 
                    : 'hover:bg-accent/50 hover:shadow-organic'
                  }
                `}
                onClick={() => onNavigate(item.id)}
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};