
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import { apiKeys, complianceSettings, orgInfo } from '@/mock/data';
import { 
  Plus, 
  Download, 
  Copy, 
  Check,
  Key,
  Shield,
  Calendar
} from 'lucide-react';

const Settings = () => {
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);
  const [copyStatus, setCopyStatus] = useState<{[key: string]: boolean}>({});
  const [complianceConfig, setComplianceConfig] = useState(complianceSettings);
  
  const handleCopyToken = (token: string, id: number) => {
    navigator.clipboard.writeText(token);
    setCopyStatus({...copyStatus, [id]: true});
    
    setTimeout(() => {
      setCopyStatus({...copyStatus, [id]: false});
    }, 2000);
  };
  
  const handleToggleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setComplianceConfig({
      ...complianceConfig,
      [name]: checked
    });
  };
  
  return (
    <MainLayout>
      <Header title="Settings" />
      
      <div className="px-6 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Organization Info */}
          <div className="card">
            <h2 className="text-lg font-medium mb-4">Organization Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="org-name">
                  Organization Name
                </label>
                <input
                  id="org-name"
                  type="text"
                  defaultValue={orgInfo.name}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="email-domain">
                  Email Domain
                </label>
                <input
                  id="email-domain"
                  type="text"
                  defaultValue={orgInfo.domain}
                  className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">
                  Organization Logo
                </label>
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 bg-muted/50 rounded-md flex items-center justify-center text-muted-foreground">
                    No logo
                  </div>
                  <Button variant="outline" size="sm">Upload Logo</Button>
                </div>
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button>Save Changes</Button>
              </div>
            </div>
          </div>
          
          {/* Deployment Info */}
          <div className="card">
            <h2 className="text-lg font-medium mb-4">Deployment</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Client Installers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    leftIcon={<Download size={14} />}
                    className="justify-start"
                  >
                    Windows Installer (.exe)
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    leftIcon={<Download size={14} />}
                    className="justify-start"
                  >
                    macOS Installer (.dmg)
                  </Button>
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="text-sm font-medium mb-2">MDM Configuration</h3>
                <div className="p-3 bg-muted/30 rounded-md">
                  <p className="text-sm mb-2">For enterprise device management, use the following configuration IDs:</p>
                  <div className="flex items-center justify-between mb-1">
                    <code className="text-xs">com.corsan.policy.id</code>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-6 px-2"
                      leftIcon={<Copy size={12} />}
                    >
                      Copy
                    </Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <code className="text-xs">com.corsan.device.token</code>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-6 px-2"
                      leftIcon={<Copy size={12} />}
                    >
                      Copy
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="pt-2">
                <h3 className="text-sm font-medium mb-2">Deployment Documentation</h3>
                <Button 
                  variant="outline" 
                  size="sm"
                  leftIcon={<Download size={14} />}
                  className="w-full justify-start"
                >
                  Download Deployment Guide (PDF)
                </Button>
              </div>
            </div>
          </div>
          
          {/* API Keys */}
          <div className="card">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">API Keys</h2>
              <Button 
                size="sm"
                leftIcon={<Plus size={16} />}
                onClick={() => setIsApiKeyModalOpen(true)}
              >
                Generate New Key
              </Button>
            </div>
            
            <div className="space-y-3">
              {apiKeys.map((key) => (
                <div key={key.id} className="p-3 border border-border rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-sm font-medium">{key.name}</h3>
                      <div className="flex items-center mt-1">
                        <Calendar size={12} className="text-muted-foreground mr-1" />
                        <span className="text-xs text-muted-foreground">
                          Created: {key.created} • Expires: {key.expires}
                        </span>
                      </div>
                    </div>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="h-7 px-2 text-xs"
                      leftIcon={copyStatus[key.id] ? <Check size={12} className="text-status-low" /> : <Copy size={12} />}
                      onClick={() => handleCopyToken(key.token, key.id)}
                    >
                      {copyStatus[key.id] ? 'Copied!' : 'Copy'}
                    </Button>
                  </div>
                  <div className="flex items-center bg-muted/30 p-2 rounded text-xs font-mono">
                    <Key size={12} className="text-muted-foreground mr-2" />
                    <span className="truncate">{key.token}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Compliance */}
          <div className="card">
            <div className="flex items-center mb-4">
              <Shield size={18} className="text-muted-foreground mr-2" />
              <h2 className="text-lg font-medium">Compliance Settings</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between py-2 border-b border-border">
                <div>
                  <h3 className="text-sm font-medium">Hash Clipboard Storage</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Store only hashed versions of clipboard content for privacy.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    name="hashClipboardStorage"
                    checked={complianceConfig.hashClipboardStorage}
                    onChange={handleToggleChange}
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:ring-1 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-border">
                <div>
                  <h3 className="text-sm font-medium">Data Retention Period</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Number of days to retain monitoring data.
                  </p>
                </div>
                <select
                  className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  defaultValue={complianceConfig.dataRetentionDays}
                >
                  <option value="30">30 days</option>
                  <option value="60">60 days</option>
                  <option value="90">90 days</option>
                  <option value="180">180 days</option>
                  <option value="365">365 days</option>
                </select>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-border">
                <div>
                  <h3 className="text-sm font-medium">Log IP Addresses</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Capture IP addresses in activity logs.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    name="logIPAddresses"
                    checked={complianceConfig.logIPAddresses}
                    onChange={handleToggleChange}
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:ring-1 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="flex items-center justify-between py-2 border-b border-border">
                <div>
                  <h3 className="text-sm font-medium">Allow Report Exports</h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    Enable exporting of reports and data.
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input 
                    type="checkbox" 
                    className="sr-only peer"
                    name="allowExports"
                    checked={complianceConfig.allowExports}
                    onChange={handleToggleChange}
                  />
                  <div className="w-11 h-6 bg-muted peer-focus:ring-1 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
              
              <div className="pt-4 flex justify-end">
                <Button>Save Compliance Settings</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* API Key Modal */}
      <Modal
        isOpen={isApiKeyModalOpen}
        onClose={() => setIsApiKeyModalOpen(false)}
        title="Generate New API Key"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsApiKeyModalOpen(false)}>Cancel</Button>
            <Button>Generate Key</Button>
          </>
        }
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="key-name">
              Key Name
            </label>
            <input
              id="key-name"
              type="text"
              placeholder="e.g. Production API"
              className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Scope
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Read Violations</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" defaultChecked />
                <span className="text-sm">Read Students</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Manage Policies</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm">Export Reports</span>
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-1">
              Expiration
            </label>
            <select className="w-full h-9 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary">
              <option value="30d">30 days</option>
              <option value="90d">90 days</option>
              <option value="180d">180 days</option>
              <option value="1y">1 year</option>
              <option value="never">Never</option>
            </select>
            <p className="text-xs text-muted-foreground mt-1">
              For security, we recommend setting an expiration date.
            </p>
          </div>
        </div>
      </Modal>
    </MainLayout>
  );
};

export default Settings;
