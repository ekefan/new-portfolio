import React from 'react';
import { Cpu, Cloud, Eye } from 'lucide-react';
import { SkillCategory, CaseStudy, NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Experience', href: '#architecture' },
  { label: 'Tech Stack', href: '#stack' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Contact', href: '#contact' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'The Core (Engineering)',
    description: 'Engineering high-throughput APIs and robust microservices from the ground up.',
    accent: 'blue',
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    skills: [
      'Microservices', 
      'Domain Driven Design', 
      'Event Driven Architecture', 
      'Unit & Integration Testing',
      'Java (Spring Boot)', 
      'Go', 
      'Python', 
      'PostgreSQL', 
      'Kafka', 
      'Redis'
    ]
  },
  {
    title: 'The Platform (Infrastructure)',
    description: 'Building zero-drift Infrastructure as Code and secured DevSecOps environments.',
    accent: 'purple',
    icon: <Cloud className="w-8 h-8 text-purple-400" />,
    skills: ['AWS', 'GCP', 'Terraform', 'Kubernetes', 'SAST/SCA/DAST', 'GitHub Actions', 'Secured CI/CD']
  },
  {
    title: 'The Reliability (Observability)',
    description: 'Implementing distributed monitoring and tracing for 99.99% system uptime.',
    accent: 'green',
    icon: <Eye className="w-8 h-8 text-emerald-400" />,
    skills: ['OpenTelemetry', 'Jaeger', 'Prometheus', 'Grafana', 'Elasticsearch', 'Distributed Monitoring']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'telex',
    title: 'The Cost Killer (Telex)',
    headline: '70% Reduction in Production AI Spend',
    context: 'Engineered a centralized multi-LLM interface with per-tenant usage tracking and billing, adopted by 9 internal teams.',
    tech: ['Java', 'Multi-LLM Interface', 'Distributed Caching'],
    metrics: '-70% Cost, +40% Speed',
    category: 'Backend'
  },
  {
    id: 'jam-forte',
    title: 'The Reliability Engine (Jam-Forte)',
    headline: '99.99% Uptime & Blue-Green Orchestration',
    context: 'Automated infrastructure provisioning and cut release cycles from days to hours by building optimized CI/CD pipelines.',
    tech: ['Terraform', 'GitHub Actions', 'Kubernetes'],
    metrics: '99.99% Uptime, 2hr Release Cycle',
    category: 'DevOps'
  },
  {
    id: 'jaeger',
    title: 'OSS: Scaling Distributed Tracing',
    headline: 'Scaling Enterprise Trace Formats',
    context: 'Developed bi-directional trace format transformations in Go, enabling production deployments to migrate seamlessly.',
    tech: ['Go', 'OpenTelemetry', 'Jaeger API'],
    metrics: '100% Data Integrity, Zero Disruption',
    category: 'OSS'
  }
];