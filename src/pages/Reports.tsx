
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import { reports } from '@/mock/data';
import { 
  BarChart2, 
  LineChart, 
  PieChart, 
  Download, 
  FileText, 
  Calendar 
} from 'lucide-react';

// Import components from recharts
import {
  BarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Reports = () => {
  // Sample data for charts
  const violationsByWeek = [
    { week: 'W1', violations: 12 },
    { week: 'W2', violations: 19 },
    { week: 'W3', violations: 15 },
    { week: 'W4', violations: 27 },
    { week: 'W5', violations: 24 },
    { week: 'W6', violations: 32 },
  ];
  
  const clipboardTriggersByType = [
    { type: 'API Key', count: 23 },
    { type: 'SQL Query', count: 17 },
    { type: 'Credit Card', count: 5 },
    { type: 'Password', count: 12 },
    { type: 'Email', count: 8 },
  ];
  
  const riskDistribution = [
    { name: 'Critical', value: 15 },
    { name: 'Major', value: 25 },
    { name: 'Medium', value: 45 },
    { name: 'Low', value: 15 },
  ];
  
  const COLORS = ['#FF4E4E', '#FF9800', '#FFB800', '#00C48C'];
  
  return (
    <MainLayout>
      <Header title="Reports" />
      
      <div className="px-6 pb-6">
        {/* Charts Section */}
        <div className="mb-6">
          <h2 className="text-lg font-medium mb-4">Analytics Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Violations by Week */}
            <div className="bg-app-card rounded-lg shadow-card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium flex items-center">
                  <LineChart size={18} className="text-muted-foreground mr-2" />
                  Violations by Week
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsLineChart
                    data={violationsByWeek}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="violations" stroke="#0096FE" activeDot={{ r: 8 }} />
                  </RechartsLineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Clipboard Triggers by Type */}
            <div className="bg-app-card rounded-lg shadow-card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium flex items-center">
                  <BarChart2 size={18} className="text-muted-foreground mr-2" />
                  Clipboard Triggers by Type
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={clipboardTriggersByType}
                    margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#0096FE" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Risk Level Distribution */}
            <div className="bg-app-card rounded-lg shadow-card p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium flex items-center">
                  <PieChart size={18} className="text-muted-foreground mr-2" />
                  Risk Level Distribution
                </h3>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={riskDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {riskDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
        
        {/* Reports Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium">Saved Reports</h2>
            
            <Button 
              leftIcon={<FileText size={16} />}
              size="sm"
            >
              Create New Report
            </Button>
          </div>
          
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Type</th>
                  <th>Date Range</th>
                  <th>Format</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reports.map((report) => (
                  <tr key={report.id}>
                    <td>{report.name}</td>
                    <td>{report.type}</td>
                    <td className="flex items-center">
                      <Calendar size={14} className="mr-2 text-muted-foreground" />
                      {report.dateRange}
                    </td>
                    <td>{report.format}</td>
                    <td>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        leftIcon={<Download size={14} />}
                      >
                        Download
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Reports;
