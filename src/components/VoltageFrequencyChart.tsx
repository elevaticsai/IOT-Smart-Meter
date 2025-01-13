import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

const data = Array.from({ length: 24 }, (_, i) => ({
  time: `${i}:00`,
  voltage: 220 + Math.random() * 20,
  frequency: 58 + Math.random() * 4
}));

export default function VoltageFrequencyChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Line yAxisId="left" type="monotone" dataKey="voltage" stroke="#2196f3" />
          <Line yAxisId="right" type="monotone" dataKey="frequency" stroke="#4caf50" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}