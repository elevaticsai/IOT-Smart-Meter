import React from 'react';

interface GaugeChartProps {
  value: number;
  label: string;
  unit: string;
  color: string;
}

export default function GaugeChart({ value, label, unit, color }: GaugeChartProps) {
  const colorClass = {
    purple: 'text-purple-600',
    red: 'text-red-600'
  }[color];

  return (
    <div className="text-center">
      <div className={`text-2xl font-bold ${colorClass}`}>
        {value}{unit}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}