import React from 'react';
import Sidebar from '../components/Sidebar';
import EnergyConsumptionChart from '../components/EnergyConsumptionChart';
import PowerDistributionChart from '../components/PowerDistributionChart';
import PowerChart from '../components/PowerChart';
import VoltageFrequencyChart from '../components/VoltageFrequencyChart';
import WeeklyUsageChart from '../components/WeeklyUsageChart';
import CostAnalysisChart from '../components/CostAnalysisChart';
import AlarmsTable from '../components/AlarmsTable';
import GaugeChart from '../components/GaugeChart';
import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Energy Consumption */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Energy Consumption</h2>
              <EnergyConsumptionChart />
            </div>

            {/* Power Distribution */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Power Distribution</h2>
              <PowerDistributionChart />
            </div>

            {/* Current and Power */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Current and Power</h2>
              <PowerChart />
            </div>

            {/* Voltage and Frequency */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Voltage and Frequency</h2>
              <VoltageFrequencyChart />
            </div>

            {/* Weekly Usage */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Weekly Usage</h2>
              <WeeklyUsageChart />
            </div>

            {/* Cost Analysis */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Cost Analysis</h2>
              <CostAnalysisChart />
            </div>

            {/* Real-time Metrics */}
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-full lg:col-span-2">
              <h2 className="text-lg font-semibold mb-4">Real-time Metrics</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <GaugeChart value={230} label="Voltage" unit="V" color="purple" />
                <GaugeChart value={15.2} label="Current" unit="A" color="red" />
                <GaugeChart value={3.5} label="Power" unit="kW" color="purple" />
                <GaugeChart value={60} label="Frequency" unit="Hz" color="red" />
              </div>
            </div>

            {/* Alarms */}
            <div className="bg-white p-6 rounded-lg shadow-sm col-span-full">
              <h2 className="text-lg font-semibold mb-4">Recent Alarms</h2>
              <AlarmsTable />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}