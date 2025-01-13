import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  current: 15 + Math.random() * 3,
  power: 2000 + Math.random() * 3000
}));

export default function PowerChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line yAxisId="left" type="monotone" dataKey="current" stroke="#ff0000" />
          <Line yAxisId="right" type="monotone" dataKey="power" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}