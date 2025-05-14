
import React from 'react';
import { cn } from '@/lib/utils';

type StatusType = 
  | 'critical' 
  | 'major' 
  | 'medium' 
  | 'low' 
  | 'investigating' 
  | 'monitoring' 
  | 'confirmed' 
  | 'closed';

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

const getStatusColors = (status: StatusType) => {
  switch (status) {
    case 'critical':
      return 'bg-status-critical/10 text-status-critical border-status-critical/20';
    case 'major':
      return 'bg-status-major/10 text-status-major border-status-major/20';
    case 'medium':
      return 'bg-status-medium/10 text-status-medium border-status-medium/20';
    case 'low':
      return 'bg-status-low/10 text-status-low border-status-low/20';
    case 'investigating':
      return 'bg-status-investigating/10 text-status-investigating border-status-investigating/20';
    case 'monitoring':
      return 'bg-status-monitoring/10 text-status-monitoring border-status-monitoring/20';
    case 'confirmed':
      return 'bg-status-confirmed/10 text-status-confirmed border-status-confirmed/20';
    case 'closed':
      return 'bg-status-closed/10 text-status-closed border-status-closed/20';
    default:
      return 'bg-gray-100 text-gray-600 border-gray-200';
  }
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className }) => {
  return (
    <span className={cn(
      'badge border text-xs font-medium', 
      getStatusColors(status),
      className
    )}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;
