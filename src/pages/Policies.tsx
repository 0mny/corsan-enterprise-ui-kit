
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import StatusBadge from '@/components/common/StatusBadge';
import { 
  restrictedDomains, 
  clipboardPatterns, 
  behaviorThresholds 
} from '@/mock/data';
import { Plus, Globe, ClipboardCopy, Workflow } from 'lucide-react';

const Policies = () => {
  const [activeTab, setActiveTab] = useState('restricted-sites');
  const [modalType, setModalType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [thresholds, setThresholds] = useState(behaviorThresholds);
  
  const openModal = (type: string) => {
    setModalType(type);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setModalType(null);
  };
  
  const handleThresholdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setThresholds({
      ...thresholds,
      [name]: parseInt(value)
    });
  };
  
  return (
    <MainLayout>
      <Header 
        title="Policies" 
        action={
          <Button 
            leftIcon={<Plus size={16} />}
            size="sm"
            onClick={() => openModal(activeTab === 'restricted-sites' ? 'add-domain' : activeTab === 'clipboard-patterns' ? 'add-pattern' : 'edit-thresholds')}
          >
            Add {activeTab === 'restricted-sites' ? 'Domain' : activeTab === 'clipboard-patterns' ? 'Pattern' : 'Threshold'}
          </Button>
        }
      />
      
      <div className="px-6 pb-6">
        <div className="bg-app-card rounded-lg shadow-card mb-6">
          <div className="flex border-b border-border">
            <button
              className={`px-6 py-3 text-sm font-medium flex items-center ${
                activeTab === 'restricted-sites' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('restricted-sites')}
            >
              <Globe size={16} className="mr-2" />
              Restricted Sites
            </button>
            
            <button
              className={`px-6 py-3 text-sm font-medium flex items-center ${
                activeTab === 'clipboard-patterns' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('clipboard-patterns')}
            >
              <ClipboardCopy size={16} className="mr-2" />
              Clipboard Patterns
            </button>
            
            <button
              className={`px-6 py-3 text-sm font-medium flex items-center ${
                activeTab === 'behavior-thresholds' 
                  ? 'border-b-2 border-primary text-primary' 
                  : 'text-muted-foreground'
              }`}
              onClick={() => setActiveTab('behavior-thresholds')}
            >
              <Workflow size={16} className="mr-2" />
              Behavior Thresholds
            </button>
          </div>
        </div>
        
        <div className="bg-app-card rounded-lg shadow-card overflow-hidden">
          {activeTab === 'restricted-sites' && (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Domain</th>
                    <th>Action</th>
                    <th>Severity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {restrictedDomains.map((domain) => (
                    <tr key={domain.id}>
                      <td>{domain.domain}</td>
                      <td>
                        <div className="flex items-center">
                          <span className={`h-2 w-2 rounded-full ${domain.action === 'block' ? 'bg-status-critical' : 'bg-status-medium'} mr-2`}></span>
                          <span className="capitalize">{domain.action}</span>
                        </div>
                      </td>
                      <td>
                        <StatusBadge status={domain.severity as any} />
                      </td>
                      <td>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'clipboard-patterns' && (
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>Pattern Name</th>
                    <th>Regex</th>
                    <th>Severity</th>
                    <th>Example Match</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {clipboardPatterns.map((pattern) => (
                    <tr key={pattern.id}>
                      <td>{pattern.name}</td>
                      <td>
                        <code className="text-xs bg-muted/30 px-2 py-1 rounded">{pattern.regex}</code>
                      </td>
                      <td>
                        <StatusBadge status={pattern.severity as any} />
                      </td>
                      <td>
                        <code className="text-xs bg-muted/30 px-2 py-1 rounded">{pattern.example}</code>
                      </td>
                      <td>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'behavior-thresholds' && (
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="max-ai-visits">
                      Maximum AI Site Visits per Hour
                    </label>
                    <input
                      id="max-ai-visits"
                      type="number"
                      name="maxAIVisitsPerHour"
                      value={thresholds.maxAIVisitsPerHour}
                      onChange={handleThresholdChange}
                      className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      min="1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Students exceeding this limit will trigger an alert.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="paste-flood">
                      Paste Flood Threshold (per minute)
                    </label>
                    <input
                      id="paste-flood"
                      type="number"
                      name="pasteFloodThreshold"
                      value={thresholds.pasteFloodThreshold}
                      onChange={handleThresholdChange}
                      className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      min="1"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Number of paste operations per minute that triggers an alert.
                    </p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="anomaly-percentage">
                      Anomaly Percentage
                    </label>
                    <input
                      id="anomaly-percentage"
                      type="number"
                      name="anomalyPercentage"
                      value={thresholds.anomalyPercentage}
                      onChange={handleThresholdChange}
                      className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      min="1"
                      max="100"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Deviation percentage from baseline behavior that triggers an alert.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <Button variant="outline" className="mr-2">Reset to Default</Button>
                <Button onClick={() => openModal('edit-thresholds')}>Save Changes</Button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Modals */}
      {modalType === 'add-domain' && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Add Restricted Domain"
          footer={
            <>
              <Button variant="outline" onClick={closeModal}>Cancel</Button>
              <Button>Add Domain</Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="domain">
                Domain
              </label>
              <input
                id="domain"
                type="text"
                placeholder="example.com"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Action
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input type="radio" name="action" value="block" className="mr-2" defaultChecked />
                  <span>Block</span>
                </label>
                <label className="flex items-center">
                  <input type="radio" name="action" value="alert" className="mr-2" />
                  <span>Alert</span>
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Severity
              </label>
              <select className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="critical">Critical</option>
                <option value="major">Major</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
          </div>
        </Modal>
      )}
      
      {modalType === 'add-pattern' && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Add Clipboard Pattern"
          footer={
            <>
              <Button variant="outline" onClick={closeModal}>Cancel</Button>
              <Button>Add Pattern</Button>
            </>
          }
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="pattern-name">
                Pattern Name
              </label>
              <input
                id="pattern-name"
                type="text"
                placeholder="e.g. API Key"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="regex">
                Regex Pattern
              </label>
              <input
                id="regex"
                type="text"
                placeholder="e.g. ^(api|key)_[a-zA-Z0-9]{32}$"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">
                Severity
              </label>
              <select className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary">
                <option value="critical">Critical</option>
                <option value="major">Major</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="example">
                Example Match
              </label>
              <input
                id="example"
                type="text"
                placeholder="e.g. api_8f268ad687dc44eeb3e9f9464de61cf1"
                className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>
        </Modal>
      )}
      
      {modalType === 'edit-thresholds' && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title="Save Behavior Thresholds"
          footer={
            <>
              <Button variant="outline" onClick={closeModal}>Cancel</Button>
              <Button onClick={closeModal}>Save Changes</Button>
            </>
          }
        >
          <div>
            <p className="mb-4">Are you sure you want to save the following threshold settings?</p>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-sm">Maximum AI Site Visits per Hour:</span>
                <span className="text-sm font-medium">{thresholds.maxAIVisitsPerHour}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Paste Flood Threshold (per minute):</span>
                <span className="text-sm font-medium">{thresholds.pasteFloodThreshold}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Anomaly Percentage:</span>
                <span className="text-sm font-medium">{thresholds.anomalyPercentage}%</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground">
              These settings will be applied immediately and will affect all monitoring systems.
            </p>
          </div>
        </Modal>
      )}
    </MainLayout>
  );
};

export default Policies;
