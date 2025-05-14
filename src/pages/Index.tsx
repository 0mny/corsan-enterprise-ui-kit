
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import MetricCard from '@/components/home/MetricCard';
import ViolationCard from '@/components/home/ViolationCard';
import Button from '@/components/common/Button';
import { PlusCircle } from 'lucide-react';
import { violations, escalations } from '@/mock/data';

const Index = () => {
  const [selectedViolationType, setSelectedViolationType] = useState<string>("All Violation Types");
  
  const violationTypes = ["All Violation Types", "AI Content", "Restricted Site", "Clipboard Match", "Anomalous Behavior"];
  
  return (
    <MainLayout>
      <Header 
        title="Overview" 
        action={
          <Button 
            leftIcon={<PlusCircle size={16} />}
            size="sm"
          >
            Declare Violation
          </Button>
        }
      />
      
      <div className="px-6 pb-6">
        {/* Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <MetricCard 
            title="Violations Today" 
            change={12} 
          />
          <MetricCard 
            title="Average Response Time" 
            change={-6} 
          />
          <MetricCard 
            title="AI Sites Visited" 
            change={8} 
          />
        </div>
        
        {/* Violations Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <h2 className="text-lg font-medium">Active Violations</h2>
              <div className="ml-2 bg-muted/50 text-muted-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                {violations.investigating.length + violations.monitoring.length + violations.confirmed.length}
              </div>
            </div>
            
            <div className="flex items-center">
              <select
                value={selectedViolationType}
                onChange={(e) => setSelectedViolationType(e.target.value)}
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              >
                {violationTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Investigating Column */}
            <div>
              <div className="flex items-center mb-3">
                <div className="h-2 w-2 rounded-full bg-status-investigating mr-2"></div>
                <h3 className="font-medium text-sm">Investigating</h3>
                <div className="ml-2 bg-muted/50 text-muted-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {violations.investigating.length}
                </div>
              </div>
              
              <div className="space-y-3">
                {violations.investigating.slice(0, 3).map((violation) => (
                  <ViolationCard
                    key={violation.id}
                    id={violation.id}
                    domain={violation.domain}
                    project={violation.project}
                    violationType={violation.violationType}
                    riskLevel={violation.riskLevel}
                    timeAgo={violation.timeAgo}
                    status={violation.status}
                  />
                ))}
              </div>
            </div>
            
            {/* Monitoring Column */}
            <div>
              <div className="flex items-center mb-3">
                <div className="h-2 w-2 rounded-full bg-status-monitoring mr-2"></div>
                <h3 className="font-medium text-sm">Monitoring</h3>
                <div className="ml-2 bg-muted/50 text-muted-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {violations.monitoring.length}
                </div>
              </div>
              
              <div className="space-y-3">
                {violations.monitoring.slice(0, 3).map((violation) => (
                  <ViolationCard
                    key={violation.id}
                    id={violation.id}
                    domain={violation.domain}
                    project={violation.project}
                    violationType={violation.violationType}
                    riskLevel={violation.riskLevel}
                    timeAgo={violation.timeAgo}
                    status={violation.status}
                  />
                ))}
              </div>
            </div>
            
            {/* Confirmed Column */}
            <div>
              <div className="flex items-center mb-3">
                <div className="h-2 w-2 rounded-full bg-status-confirmed mr-2"></div>
                <h3 className="font-medium text-sm">Confirmed</h3>
                <div className="ml-2 bg-muted/50 text-muted-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {violations.confirmed.length}
                </div>
              </div>
              
              <div className="space-y-3">
                {violations.confirmed.slice(0, 3).map((violation) => (
                  <ViolationCard
                    key={violation.id}
                    id={violation.id}
                    domain={violation.domain}
                    project={violation.project}
                    violationType={violation.violationType}
                    riskLevel={violation.riskLevel}
                    timeAgo={violation.timeAgo}
                    status={violation.status}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Escalations Section */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <h2 className="text-lg font-medium">Active Escalations</h2>
              <div className="ml-2 bg-muted/50 text-muted-foreground rounded-full px-2 py-0.5 text-xs font-medium">
                {escalations.reduce((acc, curr) => acc + curr.violations.length, 0)}
              </div>
            </div>
          </div>
          
          {escalations.map((escalation, i) => (
            <div key={i} className="mb-6">
              <div className="flex items-center mb-3">
                <h3 className="font-medium text-sm">{escalation.team}</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {escalation.violations.map((violation) => (
                  <ViolationCard
                    key={violation.id}
                    id={violation.id}
                    domain={violation.domain}
                    project={violation.project}
                    violationType={violation.violationType}
                    riskLevel={violation.riskLevel}
                    timeAgo={violation.timeAgo}
                    status={violation.status}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Index;
