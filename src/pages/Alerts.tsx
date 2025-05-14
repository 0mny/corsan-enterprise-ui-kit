
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import StatusBadge from '@/components/common/StatusBadge';
import Modal from '@/components/common/Modal';
import { alerts } from '@/mock/data';
import { Filter, Calendar, X, Clipboard } from 'lucide-react';

const Alerts = () => {
  const [dateFilter, setDateFilter] = useState("Last 24 hours");
  const [typeFilter, setTypeFilter] = useState("All types");
  const [subOrgFilter, setSubOrgFilter] = useState("All sub-orgs");
  const [selectedAlert, setSelectedAlert] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const dateFilterOptions = ["Last 24 hours", "Last 7 days", "Last 30 days", "Custom range"];
  const typeFilterOptions = ["All types", "AI Site Visit", "Clipboard Match", "Restricted Site Access", "Anomalous Behavior"];
  const subOrgFilterOptions = ["All sub-orgs", "Computer Science", "Engineering", "Business", "Mathematics", "Physics"];
  
  const handleRowClick = (alert: any) => {
    setSelectedAlert(alert);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <MainLayout>
      <Header title="Alerts" />
      
      <div className="px-6 pb-6">
        {/* Filters */}
        <div className="bg-app-card rounded-lg shadow-card p-4 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-4">
            <div className="flex items-center">
              <Calendar size={16} className="text-muted-foreground mr-2" />
              <select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {dateFilterOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center">
              <Filter size={16} className="text-muted-foreground mr-2" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {typeFilterOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center">
              <select
                value={subOrgFilter}
                onChange={(e) => setSubOrgFilter(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {subOrgFilterOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
            
            <Button variant="outline" size="sm" className="ml-auto">
              Reset Filters
            </Button>
          </div>
        </div>
        
        {/* Alerts Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Domain</th>
                <th>Student</th>
                <th>Project</th>
                <th>Time</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr 
                  key={alert.id} 
                  onClick={() => handleRowClick(alert)}
                  className="cursor-pointer"
                >
                  <td>{alert.type}</td>
                  <td>{alert.domain}</td>
                  <td>{alert.student}</td>
                  <td>{alert.project}</td>
                  <td>{alert.time}</td>
                  <td>
                    <StatusBadge status={alert.severity} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Alert Detail Modal */}
      {selectedAlert && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={`Alert: ${selectedAlert.type}`}
          footer={
            <>
              <Button variant="outline" onClick={closeModal}>Close</Button>
              <Button>View Timeline</Button>
            </>
          }
        >
          <div className="space-y-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-muted-foreground">ID</p>
                <p className="font-medium">{selectedAlert.id}</p>
              </div>
              <StatusBadge status={selectedAlert.severity} className="text-sm" />
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Description</p>
              <p className="text-sm">
                {selectedAlert.student} triggered a {selectedAlert.type.toLowerCase()} alert while working on {selectedAlert.project}. 
                The alert was triggered when accessing {selectedAlert.domain}.
              </p>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground">Risk Score</p>
              <div className="h-2 w-full bg-muted rounded-full mt-2 overflow-hidden">
                <div 
                  className={`h-full ${
                    selectedAlert.severity === 'critical' ? 'bg-status-critical w-[90%]' :
                    selectedAlert.severity === 'major' ? 'bg-status-major w-[70%]' :
                    selectedAlert.severity === 'medium' ? 'bg-status-medium w-[50%]' :
                    'bg-status-low w-[20%]'
                  }`}
                ></div>
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-muted-foreground">Low</span>
                <span className="text-xs text-muted-foreground">High</span>
              </div>
            </div>
            
            {selectedAlert.type === 'Clipboard Match' && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">Clipboard Content</p>
                <div className="mt-2 p-3 bg-muted/30 rounded-md text-sm font-mono relative">
                  <button className="absolute top-2 right-2 p-1 rounded-md hover:bg-background">
                    <Clipboard size={14} />
                  </button>
                  <p className="pr-6">
                    {selectedAlert.severity === 'critical' 
                      ? 'api_8f268ad687dc44eeb3e9f9464de61cf1' 
                      : selectedAlert.severity === 'major'
                      ? 'SELECT * FROM students WHERE grade > 90'
                      : 'user@example.com'}
                  </p>
                </div>
              </div>
            )}
            
            <div className="pt-4 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Detected at</p>
                  <p className="font-medium">{selectedAlert.time}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted-foreground">Student</p>
                  <p className="font-medium">{selectedAlert.student}</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </MainLayout>
  );
};

export default Alerts;
