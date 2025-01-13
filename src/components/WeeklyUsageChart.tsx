import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { day: 'Mon', peak: 4500, offPeak: 2300 },
  { day: 'Tue', peak: 5200, offPeak: 2100 },
  { day: 'Wed', peak: 4800, offPeak: 2400 },
  { day: 'Thu', peak: 5100, offPeak: 2200 },
  { day: 'Fri', peak: 4900, offPeak: 2000 },
  { day: 'Sat', peak: 3500, offPeak: 1800 },
  { day: 'Sun', peak: 3200, offPeak: 1600 },
];

export default function WeeklyUsageChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="peak" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="offPeak" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}