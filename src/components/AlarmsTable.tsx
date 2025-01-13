import React from 'react';

export default function AlarmsTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left p-4">Created time</th>
            <th className="text-left p-4">Type</th>
            <th className="text-left p-4">Severity</th>
            <th className="text-left p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 text-gray-500" colSpan={4}>No alarms found</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}