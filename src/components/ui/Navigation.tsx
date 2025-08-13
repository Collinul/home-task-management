import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

interface NavItem {
  path: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { path: '/', label: 'Tasks', icon: '📋' },
  { path: '/dashboard', label: 'Dashboard', icon: '📊' },
  { path: '/settings', label: 'Settings', icon: '⚙️' },
];

export const Navigation: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white shadow-lg border-t border-gray-200 safe-area-inset">
      <div className="flex items-center justify-around py-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link key={item.path} to={item.path} className="flex-1">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className={`
                  flex flex-col items-center py-2 px-3 rounded-lg mx-1 transition-colors duration-200
                  ${isActive 
                    ? 'bg-orange-100 text-orange-600' 
                    : 'text-gray-600 hover:text-orange-500'
                  }
                `}
              >
                <div className="text-xl mb-1">{item.icon}</div>
                <span className="text-xs font-medium">{item.label}</span>
                
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-orange-500 rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};