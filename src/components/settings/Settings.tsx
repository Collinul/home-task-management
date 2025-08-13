import React from 'react';
import { motion } from 'framer-motion';

export const Settings: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-pink-50 pb-20">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Settings ⚙️
          </h1>
          <p className="text-gray-600">
            Customize your TaskLove experience
          </p>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 text-center"
        >
          <div className="text-6xl mb-4">🚀</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">
            More Features Coming Soon!
          </h2>
          <p className="text-gray-600 mb-6">
            We're working on exciting new features like:
          </p>
          
          <div className="space-y-3 text-left max-w-sm mx-auto">
            <div className="flex items-center space-x-3">
              <span className="text-lg">🌙</span>
              <span className="text-gray-700">Dark/Light theme toggle</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">🔔</span>
              <span className="text-gray-700">Gentle reminders</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">📊</span>
              <span className="text-gray-700">Custom goal settings</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">💑</span>
              <span className="text-gray-700">Sharing with partners</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-lg">📤</span>
              <span className="text-gray-700">Export your data</span>
            </div>
          </div>
        </motion.div>

        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">💝</span>
            About TaskLove
          </h3>
          
          <div className="space-y-3 text-gray-600">
            <p>
              TaskLove was created as a thoughtful birthday gift to help make household 
              management more joyful and rewarding.
            </p>
            <p>
              Version 1.0 • Built with React, TypeScript, and lots of love 💕
            </p>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <span className="mr-2">⚡</span>
            Quick Actions
          </h3>
          
          <div className="space-y-3">
            <button 
              onClick={() => {
                if (window.confirm('This will clear all your task data. Are you sure?')) {
                  localStorage.clear();
                  window.location.reload();
                }
              }}
              className="w-full p-3 text-left border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Reset Data</div>
                  <div className="text-sm text-gray-600">Clear all tasks and start fresh</div>
                </div>
                <span className="text-red-500">🗑️</span>
              </div>
            </button>
            
            <div className="p-3 text-left border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium text-gray-900">Install as App</div>
                  <div className="text-sm text-gray-600">Add TaskLove to your home screen</div>
                </div>
                <span className="text-blue-500">📱</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};