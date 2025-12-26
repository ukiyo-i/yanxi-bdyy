import { Link, useLocation } from 'react-router';
import { Home, Heart, Video, Cake } from 'lucide-react';

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/our-videos', label: 'Our Videos', icon: Video },
    { path: '/birthday-video', label: 'Birthday Video 🎂💛', icon: Cake },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="glass-effect rounded-full px-6 py-3 shadow-2xl border border-white/20">
        <div className="flex items-center gap-4">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  isActive 
                    ? 'bg-gradient-to-r from-rose-400 to-pink-400 text-white shadow-lg scale-105' 
                    : 'text-rose-400 hover:bg-rose-100/50 dark:hover:bg-rose-900/30'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium hidden md:inline">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
