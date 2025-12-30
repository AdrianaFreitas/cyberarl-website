
import { IntelligenceItem } from './types';

// Intelligence reports data for the landing page
export const INTELLIGENCE_DATA: IntelligenceItem[] = [
  {
    id: 'report-1',
    category: 'AI',
    title: 'Adversarial Machine Learning in Fintech',
    description: 'Analysis of evasion techniques targeting fraud detection models in European digital banking.',
    date: 'OCT 12, 2025',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'report-2',
    category: 'SECURITY',
    title: 'Post-Quantum Cryptography Readiness',
    description: 'A framework for NIS2 compliance in the transition to quantum-resistant encryption standards.',
    date: 'SEP 28, 2025',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'report-3',
    category: 'THREAT-INTEL',
    title: 'LLM Prompt Injection Trends',
    description: 'Cataloging emerging patterns of indirect prompt injection in autonomous enterprise AI agents.',
    date: 'AUG 15, 2025',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'
  }
];

export const BUSINESS_UNITS = [
  {
    id: 'grants',
    title: 'Competitive Research Grants',
    type: 'Core Star',
    description: 'EU / Horizon Europe, National Agencies, and Philanthropic Foundations focusing on Cluster 3 priorities.',
    icon: 'Target'
  },
  {
    id: 'dataspace',
    title: 'AIdefence_ Dataspace',
    type: 'Emerging Star',
    description: 'Data sharing platform for AI-driven crime analysis and forensics. Trusted, privacy-conscious real-time intelligence.',
    icon: 'Database'
  },
  {
    id: 'training',
    title: 'Training & Education',
    type: 'Future Cash Cow',
    description: 'Executive programs, summer schools, and professional certificates (CRA, NIS2, EU AI Act).',
    icon: 'GraduationCap'
  },
  {
    id: 'advisory',
    title: 'Contract Research & Advisory',
    type: 'Niche Star',
    description: 'Specialized expertise for LEAs, regulators, and corporate security teams on AI-related risks.',
    icon: 'ShieldAlert'
  },
  {
    id: 'ecosystem',
    title: 'Thought Leadership',
    type: 'Niche Cash Cow',
    description: 'Ecosystem building, conferences, policy papers, and European AI-crime networks.',
    icon: 'Users'
  }
];

export const RESEARCH_PRIORITIES = [
  {
    id: 'adversarial',
    area: 'Adversarial AI & ML',
    concern: '69% of CISOs cite as top concern',
    role: 'Attack signatures, crafted inputs, and evasion techniques.'
  },
  {
    id: 'poisoning',
    area: 'Data Poisoning',
    concern: '50% expect GenAI data loss',
    role: 'Indicators of compromised training sets and mitigation playbooks.'
  },
  {
    id: 'theft',
    area: 'Model Theft',
    concern: 'Millions in R&D at risk',
    role: 'Tracking reverse engineering indicators and IP protection.'
  },
  {
    id: 'injection',
    area: 'Prompt Injection',
    concern: 'Unpredictable GenAI behavior',
    role: 'Cataloging malicious prompt patterns and defensive guardrails.'
  },
  {
    id: 'runtime',
    area: 'AI Runtime Security',
    concern: '#1 challenge in enterprise AI',
    role: 'Runtime monitoring and AI agent behavior patterns.'
  },
  {
    id: 'supplychain',
    area: 'AI Supply Chain',
    concern: 'Top budget priority 2025',
    role: 'Aggregating threats from libraries and untrusted vendors.'
  },
  {
    id: 'deepfake',
    area: 'Deepfake & Synthetic Media',
    concern: '$25.6M fraud cases reported',
    role: 'Detection data, behavioral markers, and verification techniques.'
  }
];

export const UPCOMING_EVENTS = [
  {
    date: 'MARCH 3-5, 2026',
    location: 'BARCELONA',
    title: 'Tech Summit & Researchers Sync-Up',
    description: 'Uniting science, industry, and law enforcement.'
  },
  {
    date: 'MAY 13-15, 2026',
    location: 'THE HAGUE',
    title: 'Cyber Security Global Forum',
    description: 'Strategy alignment for international resilience.'
  },
  {
    date: 'NOV, 2026',
    location: 'BARCELONA',
    title: 'Talent Arena Cybersecurity Track',
    description: 'Special engagement at MWC Mobile World Congress.'
  }
];
