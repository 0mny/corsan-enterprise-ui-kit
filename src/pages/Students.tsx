
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';
import StatusBadge from '@/components/common/StatusBadge';
import Modal from '@/components/common/Modal';
import { students } from '@/mock/data';
import { BarChart2, Activity, Calendar, List } from 'lucide-react';

const Students = () => {
  const [selectedStudent, setSelectedStudent] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleRowClick = (student: any) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const getStatusColor = (riskLevel: string) => {
    switch (riskLevel) {
      case 'critical': return 'status-critical';
      case 'major': return 'status-major';
      case 'medium': return 'status-medium';
      case 'low': return 'status-low';
      default: return 'status-low';
    }
  };
  
  // Mock data for student details
  const mockVisitedSites = [
    { domain: "google.com", visits: 28 },
    { domain: "university.edu", visits: 23 },
    { domain: "github.com", visits: 17 },
    { domain: "stackoverflow.com", visits: 12 },
    { domain: "chatgpt.com", visits: 6 }
  ];
  
  const mockProjects = [
    { name: "final_essay.docx", lastModified: "2h ago" },
    { name: "research_paper.docx", lastModified: "Yesterday" },
    { name: "cs_hw4.gdoc", lastModified: "3d ago" },
    { name: "project_plan.pdf", lastModified: "1w ago" }
  ];
  
  const mockViolations = [
    { type: "AI Content Detection", date: "May 12, 2025", risk: "medium" },
    { type: "Restricted Site Access", date: "May 10, 2025", risk: "critical" },
    { type: "Clipboard Pattern Match", date: "May 5, 2025", risk: "major" }
  ];
  
  return (
    <MainLayout>
      <Header title="Students" />
      
      <div className="px-6 pb-6">
        <div className="bg-app-card rounded-lg shadow-card p-4 mb-6">
          <div className="flex items-center justify-between">
            <div className="relative w-64">
              <input
                type="text"
                placeholder="Search students..."
                className="h-9 w-full pl-3 pr-4 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-primary"
              />
            </div>
            
            <div className="flex items-center space-x-3">
              <select
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                defaultValue="all-suborgs"
              >
                <option value="all-suborgs">All Sub-Orgs</option>
                <option value="computer-science">Computer Science</option>
                <option value="business">Business</option>
                <option value="engineering">Engineering</option>
                <option value="mathematics">Mathematics</option>
              </select>
              
              <select
                className="h-9 rounded-md border border-input bg-background px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                defaultValue="all-risk"
              >
                <option value="all-risk">All Risk Levels</option>
                <option value="critical">Critical</option>
                <option value="major">Major</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              
              <Button variant="outline" size="sm">
                Reset
              </Button>
            </div>
          </div>
        </div>
        
        {/* Students Table */}
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Sub-Org</th>
                <th>Last Active</th>
                <th>Projects</th>
                <th>Violations</th>
                <th>Risk Level</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr 
                  key={student.id} 
                  onClick={() => handleRowClick(student)}
                  className="cursor-pointer"
                >
                  <td>{student.name}</td>
                  <td>{student.subOrg}</td>
                  <td>{student.lastActive}</td>
                  <td>{student.projects}</td>
                  <td>{student.violations}</td>
                  <td>
                    <StatusBadge status={student.riskLevel as any} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Student Detail Modal */}
      {selectedStudent && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedStudent.name}
          size="lg"
          footer={
            <>
              <Button variant="outline" onClick={closeModal}>Close</Button>
              <Button>Export Report</Button>
            </>
          }
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-sm text-muted-foreground">Student ID</p>
                <p className="font-medium">STU-{selectedStudent.id}</p>
              </div>
              <div className="flex items-center">
                <p className="text-sm text-muted-foreground mr-2">Risk Level:</p>
                <StatusBadge status={selectedStudent.riskLevel as any} className="text-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Timeline Section */}
              <div className="md:col-span-2">
                <div className="flex items-center mb-3">
                  <Activity size={18} className="text-muted-foreground mr-2" />
                  <h3 className="text-base font-medium">Activity Timeline</h3>
                </div>
                
                <div className="space-y-4 pl-4 border-l border-border">
                  <div className="relative">
                    <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-status-monitoring border-2 border-white"></div>
                    <div>
                      <p className="text-sm font-medium">Accessed clipboard pattern</p>
                      <p className="text-xs text-muted-foreground">Today, 10:15 AM</p>
                      <p className="text-sm mt-1">Copied content matching SQL Query pattern</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-status-investigating border-2 border-white"></div>
                    <div>
                      <p className="text-sm font-medium">Visited restricted site</p>
                      <p className="text-xs text-muted-foreground">Today, 9:23 AM</p>
                      <p className="text-sm mt-1">Visited chatgpt.com while working on final_essay.docx</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-status-confirmed border-2 border-white"></div>
                    <div>
                      <p className="text-sm font-medium">Created new project</p>
                      <p className="text-xs text-muted-foreground">Yesterday, 3:45 PM</p>
                      <p className="text-sm mt-1">Created research_paper.docx</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-status-monitoring border-2 border-white"></div>
                    <div>
                      <p className="text-sm font-medium">Accessed restricted content</p>
                      <p className="text-xs text-muted-foreground">May 12, 2025, 1:12 PM</p>
                      <p className="text-sm mt-1">Content matching AI-generated pattern detected</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Stats Section */}
              <div>
                {/* Most Visited Sites */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <BarChart2 size={18} className="text-muted-foreground mr-2" />
                    <h3 className="text-base font-medium">Most Visited Sites</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {mockVisitedSites.map((site, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{site.domain}</span>
                        <span className="text-sm text-muted-foreground">{site.visits} visits</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Recent Projects */}
                <div className="mb-6">
                  <div className="flex items-center mb-3">
                    <List size={18} className="text-muted-foreground mr-2" />
                    <h3 className="text-base font-medium">Recent Projects</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {mockProjects.map((project, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{project.name}</span>
                        <span className="text-sm text-muted-foreground">{project.lastModified}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Top Violations */}
                <div>
                  <div className="flex items-center mb-3">
                    <Calendar size={18} className="text-muted-foreground mr-2" />
                    <h3 className="text-base font-medium">Recent Violations</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {mockViolations.map((violation, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{violation.type}</span>
                        <div className="flex items-center">
                          <span className="text-xs text-muted-foreground mr-2">{violation.date}</span>
                          <StatusBadge status={violation.risk as any} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </MainLayout>
  );
};

export default Students;
