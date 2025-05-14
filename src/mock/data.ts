
// Mock data for Corsan application

// Students
export const students = [
  { id: 1, name: "Alex Johnson", subOrg: "Computer Science", lastActive: "2h ago", projects: 8, violations: 2, riskLevel: "low" },
  { id: 2, name: "Sarah Miller", subOrg: "Business", lastActive: "5m ago", projects: 5, violations: 0, riskLevel: "low" },
  { id: 3, name: "David Chen", subOrg: "Computer Science", lastActive: "1h ago", projects: 12, violations: 5, riskLevel: "medium" },
  { id: 4, name: "Emma Wilson", subOrg: "Physics", lastActive: "3d ago", projects: 3, violations: 1, riskLevel: "low" },
  { id: 5, name: "Michael Brown", subOrg: "Engineering", lastActive: "10m ago", projects: 7, violations: 3, riskLevel: "medium" },
  { id: 6, name: "Jessica Lee", subOrg: "Mathematics", lastActive: "2h ago", projects: 4, violations: 0, riskLevel: "low" },
  { id: 7, name: "James Wilson", subOrg: "English", lastActive: "30m ago", projects: 9, violations: 7, riskLevel: "critical" },
  { id: 8, name: "Emily Davis", subOrg: "Biology", lastActive: "1d ago", projects: 5, violations: 2, riskLevel: "low" },
  { id: 9, name: "Ryan Martinez", subOrg: "Chemistry", lastActive: "15m ago", projects: 6, violations: 4, riskLevel: "medium" },
  { id: 10, name: "Olivia Garcia", subOrg: "Computer Science", lastActive: "5h ago", projects: 10, violations: 8, riskLevel: "critical" },
  { id: 11, name: "Ethan Robinson", subOrg: "Physics", lastActive: "2d ago", projects: 4, violations: 1, riskLevel: "low" },
  { id: 12, name: "Sophia Mitchell", subOrg: "Engineering", lastActive: "1h ago", projects: 8, violations: 3, riskLevel: "medium" },
  { id: 13, name: "Daniel Walker", subOrg: "Mathematics", lastActive: "4h ago", projects: 7, violations: 5, riskLevel: "major" },
  { id: 14, name: "Ava Thompson", subOrg: "English", lastActive: "45m ago", projects: 3, violations: 0, riskLevel: "low" },
  { id: 15, name: "Logan White", subOrg: "Computer Science", lastActive: "20m ago", projects: 11, violations: 6, riskLevel: "major" },
  { id: 16, name: "Isabella Martin", subOrg: "Business", lastActive: "3h ago", projects: 5, violations: 2, riskLevel: "medium" },
  { id: 17, name: "Lucas Scott", subOrg: "Engineering", lastActive: "1d ago", projects: 9, violations: 4, riskLevel: "medium" },
  { id: 18, name: "Mia Harris", subOrg: "Biology", lastActive: "2h ago", projects: 6, violations: 1, riskLevel: "low" },
  { id: 19, name: "Jackson Clark", subOrg: "Chemistry", lastActive: "30m ago", projects: 7, violations: 5, riskLevel: "major" },
  { id: 20, name: "Charlotte Young", subOrg: "Physics", lastActive: "5h ago", projects: 4, violations: 2, riskLevel: "medium" },
  { id: 21, name: "Benjamin King", subOrg: "Mathematics", lastActive: "1h ago", projects: 8, violations: 3, riskLevel: "medium" },
  { id: 22, name: "Amelia Wright", subOrg: "Computer Science", lastActive: "15m ago", projects: 10, violations: 7, riskLevel: "critical" },
  { id: 23, name: "Henry Lopez", subOrg: "English", lastActive: "2d ago", projects: 3, violations: 0, riskLevel: "low" },
  { id: 24, name: "Harper Adams", subOrg: "Business", lastActive: "4h ago", projects: 5, violations: 1, riskLevel: "low" },
  { id: 25, name: "Sebastian Hill", subOrg: "Engineering", lastActive: "50m ago", projects: 7, violations: 4, riskLevel: "medium" },
  { id: 26, name: "Evelyn Baker", subOrg: "Biology", lastActive: "3h ago", projects: 6, violations: 2, riskLevel: "medium" },
  { id: 27, name: "Owen Nelson", subOrg: "Chemistry", lastActive: "1d ago", projects: 9, violations: 6, riskLevel: "major" },
  { id: 28, name: "Abigail Carter", subOrg: "Physics", lastActive: "2h ago", projects: 4, violations: 1, riskLevel: "low" },
  { id: 29, name: "Carter Mitchell", subOrg: "Mathematics", lastActive: "25m ago", projects: 8, violations: 5, riskLevel: "major" },
  { id: 30, name: "Ella Perez", subOrg: "Computer Science", lastActive: "5h ago", projects: 11, violations: 9, riskLevel: "critical" }
];

// Restricted domains
export const restrictedDomains = [
  { id: 1, domain: "chatgpt.com", action: "block", severity: "critical" },
  { id: 2, domain: "essaywriter.ai", action: "block", severity: "critical" },
  { id: 3, domain: "cheatanswers.com", action: "block", severity: "critical" },
  { id: 4, domain: "homeworkhelper.co", action: "alert", severity: "major" },
  { id: 5, domain: "quizlet.com", action: "alert", severity: "medium" },
  { id: 6, domain: "coursehero.com", action: "alert", severity: "major" },
  { id: 7, domain: "chegg.com", action: "alert", severity: "major" },
  { id: 8, domain: "github.com/solutions", action: "alert", severity: "medium" },
  { id: 9, domain: "assignmenthelp.net", action: "block", severity: "critical" },
  { id: 10, domain: "papermill.com", action: "block", severity: "critical" },
  { id: 11, domain: "essaybot.com", action: "block", severity: "critical" },
  { id: 12, domain: "gradebooster.org", action: "alert", severity: "major" }
];

// Clipboard patterns
export const clipboardPatterns = [
  { id: 1, name: "API Key", regex: "^(api|key)_[a-zA-Z0-9]{32}$", severity: "critical", example: "api_8f268ad687dc44eeb3e9f9464de61cf1" },
  { id: 2, name: "SQL Query", regex: "SELECT\\s+.+\\s+FROM\\s+.+", severity: "major", example: "SELECT * FROM students WHERE grade > 90" },
  { id: 3, name: "Credit Card Number", regex: "\\d{4}[\\s-]\\d{4}[\\s-]\\d{4}[\\s-]\\d{4}", severity: "critical", example: "4111-1111-1111-1111" },
  { id: 4, name: "Email Address", regex: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", severity: "medium", example: "student@university.edu" },
  { id: 5, name: "Social Security Number", regex: "\\d{3}-\\d{2}-\\d{4}", severity: "critical", example: "123-45-6789" },
  { id: 6, name: "Password", regex: "password[:|=]\\s*['\"]?[^'\">\\s]+['\"]?", severity: "critical", example: "password: 'secureP@ss123!'" },
  { id: 7, name: "AWS Access Key", regex: "AKIA[0-9A-Z]{16}", severity: "critical", example: "AKIAIOSFODNN7EXAMPLE" },
  { id: 8, name: "Code Block", regex: "```[\\s\\S]*```", severity: "medium", example: "```function example() { return true; }```" },
  { id: 9, name: "JWT Token", regex: "eyJ[a-zA-Z0-9_-]+\\.[a-zA-Z0-9_-]+\\.[a-zA-Z0-9_-]+", severity: "major", example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." },
  { id: 10, name: "GitHub Token", regex: "github_[a-zA-Z0-9_]{32,}", severity: "critical", example: "github_pat_11AABB33CCDDEE44FFGGHH" },
  { id: 11, name: "IP Address", regex: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b", severity: "medium", example: "192.168.1.1" },
  { id: 12, name: "Large Text Block", regex: "[\\s\\S]{1000,}", severity: "medium", example: "[Large block of text over 1000 characters]" },
  { id: 13, name: "URL with Token", regex: "https?://[^\\s/$.?#].[^\\s]*[?&]token=[^\\s&]+", severity: "major", example: "https://api.example.com/data?token=abcdef12345" },
  { id: 14, name: "Base64 Encoded Data", regex: "data:[^;]+;base64,[a-zA-Z0-9+/]+={0,2}", severity: "medium", example: "data:image/png;base64,iVBORw0KGgoAAAA..." },
  { id: 15, name: "Phone Number", regex: "\\(\\d{3}\\)\\s*\\d{3}[-.\\s]\\d{4}", severity: "medium", example: "(123) 456-7890" }
];

// Projects
export const projects = [
  "final_essay.docx",
  "cs_hw4.gdoc",
  "project_plan.pdf",
  "thesis_draft.docx",
  "lab_report.pdf",
  "presentation.pptx",
  "research_paper.docx",
  "assignment3.gdoc",
  "midterm_study_notes.pdf",
  "code_project.zip",
  "data_analysis.xlsx",
  "team_project.gdoc",
  "literature_review.docx",
  "capstone_proposal.pdf",
  "quiz_answers.txt"
];

// Generate violations
export const generateViolations = (count: number, status: 'investigating' | 'monitoring' | 'confirmed' | 'closed') => {
  const violationTypes = [
    "AI Content Detection",
    "Restricted Site Access",
    "Clipboard Pattern Match",
    "Anomalous Behavior",
    "Suspicious Activity",
    "Unauthorized Access",
    "Data Exfiltration",
    "Policy Violation"
  ];
  
  const domains = [
    "chatgpt.com",
    "essaywriter.ai",
    "quizlet.com",
    "chegg.com",
    "coursehero.com",
    "homeworkhelper.co",
    "github.com/solutions",
    "assignmenthelp.net"
  ];
  
  const timeAgo = [
    "5m ago",
    "15m ago", 
    "30m ago",
    "45m ago",
    "1h ago",
    "1h 30m ago",
    "2h ago",
    "3h ago",
    "5h ago"
  ];
  
  const riskLevels: Array<'critical' | 'major' | 'medium' | 'low'> = ['critical', 'major', 'medium', 'low'];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `VIO-${1000 + i}`,
    domain: domains[Math.floor(Math.random() * domains.length)],
    project: projects[Math.floor(Math.random() * projects.length)],
    violationType: violationTypes[Math.floor(Math.random() * violationTypes.length)],
    riskLevel: riskLevels[Math.floor(Math.random() * riskLevels.length)],
    timeAgo: timeAgo[Math.floor(Math.random() * timeAgo.length)],
    status
  }));
};

// Generated violations
export const violations = {
  investigating: generateViolations(8, 'investigating'),
  monitoring: generateViolations(7, 'monitoring'),
  confirmed: generateViolations(5, 'confirmed'),
  closed: generateViolations(5, 'closed')
};

// Escalations
export const escalations = [
  {
    team: "Engineering",
    violations: generateViolations(3, 'investigating').map(v => ({
      ...v,
      assignedTo: "Sam Lee"
    }))
  },
  {
    team: "IT Security",
    violations: generateViolations(2, 'monitoring').map(v => ({
      ...v,
      assignedTo: "Jordan Kim"
    }))
  }
];

// Alerts
export const generateAlerts = (count: number) => {
  const alertTypes = [
    "AI Site Visit",
    "Clipboard Match",
    "Restricted Site Access",
    "Anomalous Behavior",
    "Policy Violation",
    "Suspicious Activity"
  ];
  
  const domains = [
    "chatgpt.com",
    "essaywriter.ai",
    "quizlet.com",
    "chegg.com",
    "coursehero.com",
    "homeworkhelper.co",
    "github.com/solutions",
    "assignmenthelp.net"
  ];
  
  const times = [
    "Just now",
    "2m ago",
    "5m ago",
    "10m ago",
    "15m ago", 
    "30m ago",
    "45m ago",
    "1h ago",
    "1h 30m ago",
    "2h ago",
    "3h ago",
    "5h ago",
    "Yesterday"
  ];
  
  const severities: Array<'critical' | 'major' | 'medium' | 'low'> = ['critical', 'major', 'medium', 'low'];
  
  return Array.from({ length: count }, (_, i) => {
    const studentIndex = Math.floor(Math.random() * students.length);
    return {
      id: `ALT-${2000 + i}`,
      type: alertTypes[Math.floor(Math.random() * alertTypes.length)],
      domain: domains[Math.floor(Math.random() * domains.length)],
      student: students[studentIndex].name,
      project: projects[Math.floor(Math.random() * projects.length)],
      time: times[Math.floor(Math.random() * times.length)],
      severity: severities[Math.floor(Math.random() * severities.length)]
    };
  });
};

export const alerts = generateAlerts(30);

// Reports
export const reports = [
  { id: 1, name: "Weekly Violation Summary", type: "Scheduled", dateRange: "May 7 - May 14, 2025", format: "PDF" },
  { id: 2, name: "AI Usage Analysis", type: "One-time", dateRange: "Apr 1 - May 1, 2025", format: "Excel" },
  { id: 3, name: "Student Risk Assessment", type: "Scheduled", dateRange: "May 1 - May 14, 2025", format: "PDF" },
  { id: 4, name: "Clipboard Pattern Report", type: "One-time", dateRange: "May 10 - May 14, 2025", format: "CSV" },
  { id: 5, name: "Violation Trends by Department", type: "Scheduled", dateRange: "Q1 2025", format: "PDF" },
  { id: 6, name: "High Risk Incidents", type: "Scheduled", dateRange: "Last 30 days", format: "Excel" },
  { id: 7, name: "Policy Effectiveness", type: "One-time", dateRange: "2024 vs 2025", format: "PDF" },
  { id: 8, name: "Detection Performance", type: "Scheduled", dateRange: "May 1 - May 14, 2025", format: "CSV" }
];

// Behavior Thresholds
export const behaviorThresholds = {
  maxAIVisitsPerHour: 5,
  pasteFloodThreshold: 10,
  anomalyPercentage: 15
};

// API Keys
export const apiKeys = [
  { id: 1, name: "Production API", token: "cor_prod_8f268ad687dc44eeb3e9", created: "Jan 15, 2025", expires: "Jan 15, 2026" },
  { id: 2, name: "Development Key", token: "cor_dev_f9464de61cf19d3b2a54", created: "Mar 22, 2025", expires: "Sep 22, 2025" },
  { id: 3, name: "Testing Environment", token: "cor_test_e4a77bc5211ff880943c", created: "Apr 10, 2025", expires: "Jul 10, 2025" }
];

// Compliance Settings
export const complianceSettings = {
  hashClipboardStorage: true,
  dataRetentionDays: 90,
  logIPAddresses: true,
  allowExports: true
};

// Organization Info
export const orgInfo = {
  name: "Examplia University",
  domain: "examplia.edu",
  logo: null
};
