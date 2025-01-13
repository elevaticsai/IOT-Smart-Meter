import React from 'react';
import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const data = Array.from({ length: 12 }, (_, i) => ({
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][i],
  cost: 1000 + Math.random() * 500,
  efficiency: 75 + Math.random() * 15,
}));

export default function CostAnalysisChart() {
  return (
    <div className="h-[200px]">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="cost" fill="#8884d8" name="Cost ($)" />
          <Line yAxisId="right" type="monotone" dataKey="efficiency" stroke="#ff7300" name="Efficiency (%)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}