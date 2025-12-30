
export interface IntelligenceItem {
  id: string;
  category: 'AI' | 'SECURITY' | 'THREAT-INTEL';
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
