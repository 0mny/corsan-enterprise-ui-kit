
import React from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MetricCardProps {
  title: string;
  change: number;
  className?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, change, className }) => {
  const isPositive = change > 0;
  const isNegative = change < 0;
  const absoluteChange = Math.abs(change);
  
  const getChangeColor = () => {
    if (title.includes('Time') || title.includes('Response')) {
      // For time metrics, negative is good
      return isNegative ? 'text-status-low' : 'text-status-critical';
    }
    
    if (title.includes('Violations')) {
      // For violations, negative is good
      return isNegative ? 'text-status-low' : 'text-status-critical';
    }
    
    // For all other metrics, positive is good
    return isPositive ? 'text-status-critical' : 'text-status-low';
  };

  return (
    <div className={cn('rounded-md p-5 bg-app-card shadow-card', className)}>
      <h3 className="text-sm font-medium text-muted-foreground mb-2">{title}</h3>
      <div className="flex items-center">
        {isPositive ? (
          <ArrowUp size={18} className={getChangeColor()} />
        ) : (
          <ArrowDown size={18} className={getChangeColor()} />
        )}
        <span className={cn('ml-1 text-lg font-semibold', getChangeColor())}>
          {isPositive ? '+' : ''}{absoluteChange}%
        </span>
      </div>
    </div>
  );
};

export default MetricCard;
