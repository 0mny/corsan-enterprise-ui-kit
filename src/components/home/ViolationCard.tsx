
import React from 'react';
import StatusBadge from '../common/StatusBadge';
import { Clock } from 'lucide-react';

interface ViolationCardProps {
  id: string;
  domain: string;
  project: string;
  violationType: string;
  riskLevel: 'critical' | 'major' | 'medium' | 'low';
  timeAgo: string;
  status: 'investigating' | 'monitoring' | 'confirmed' | 'closed';
}

const ViolationCard: React.FC<ViolationCardProps> = ({
  id,
  domain,
  project,
  violationType,
  riskLevel,
  timeAgo,
  status
}) => {
  return (
    <div className="border border-border rounded-lg bg-app-card hover:shadow-card transition-shadow p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="text-xs text-muted-foreground">{id}</div>
        <div className="flex items-center text-xs text-muted-foreground">
          <Clock size={12} className="mr-1" />
          {timeAgo}
        </div>
      </div>
      
      <h3 className="font-medium mb-2 text-sm">{domain}</h3>
      <p className="text-sm text-muted-foreground mb-3 truncate">{project}</p>
      
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">{violationType}</div>
        <div className="flex space-x-2">
          <StatusBadge status={riskLevel} />
          <StatusBadge status={status} />
        </div>
      </div>
    </div>
  );
};

export default ViolationCard;
