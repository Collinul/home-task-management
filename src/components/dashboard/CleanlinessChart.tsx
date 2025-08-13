import React from 'react';
import { XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ChartData } from '../../utils/analytics';

interface CleanlinessChartProps {
  data: ChartData[];
}

export const CleanlinessChart: React.FC<CleanlinessChartProps> = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
        <span className="mr-2">📈</span>
        7-Day Progress
      </h3>
      
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Bar 
              dataKey="completed" 
              fill="#F97316"
              radius={[4, 4, 0, 0]}
              name="Completed Tasks"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-7 gap-1">
        {data.map((day, index) => (
          <div key={index} className="text-center">
            <div className="text-xs text-gray-500 mb-1">{day.name}</div>
            <div className="text-sm font-semibold text-gray-700">
              {day.total > 0 ? `${day.completed}/${day.total}` : '0'}
            </div>
            <div className={`text-xs font-medium mt-1 ${
              day.score >= 80 ? 'text-green-600' :
              day.score >= 60 ? 'text-yellow-600' :
              day.score >= 40 ? 'text-orange-600' : 'text-red-600'
            }`}>
              {day.total > 0 ? `${day.score}%` : '✨'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};