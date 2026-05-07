import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'vote-guard',
    title: 'Vote Guard (Blockchain Voting)',
    subtitle: 'Security-First Decentralized Voting',
    description: 'A sophisticated blockchain voting platform with 3-layer biometric authentication (WebAuthn + Face Liveness) and privacy-preserving homomorphic encryption.',
    tech: ['Blockchain', 'JavaScript', 'Cryptography', 'Biometrics'],
    image: '/assets/vote-guard-mockup.png'
  },
  {
    id: 'pneumonia-detection',
    title: 'Lungs Pneumonia Detection',
    subtitle: 'AI-Powered Medical Diagnostics',
    description: 'A deep learning computer vision model designed to accurately detect pneumonia from chest X-ray images with high sensitivity.',
    tech: ['Python', 'Computer Vision', 'PyTorch', 'Medical AI'],
    image: '/assets/pneumonia-mockup.png'
  },
  {
    id: 'ipl-analytics',
    title: 'IPL Analytics Dashboard',
    subtitle: 'Sports Data Visualization',
    description: 'A comprehensive data analytics dashboard for IPL match statistics, player performance, and predictive match outcomes.',
    tech: ['Tableau', 'PowerBI', 'Python', 'Data Analytics'],
    image: '/assets/ipl-mockup.png'
  },
  {
    id: 'tourism-analytics',
    title: 'World Tourism Analytics',
    subtitle: 'Global Travel Data Insights',
    description: 'An interactive analytical platform mapping global tourism trends, country-wise visitor data, and economic impact analysis.',
    tech: ['Data Science', 'PowerBI', 'Python', 'GIS'],
    image: '/assets/tourism-mockup.png'
  },
  {
    id: 'job-detection',
    title: 'Fake Job Detection',
    subtitle: 'AI-Driven Social Integrity',
    description: 'A machine learning system designed to identify and flag fraudulent job postings on social media platforms using NLP and pattern recognition.',
    tech: ['Python', 'NLP', 'Machine Learning', 'Data Science'],
    image: '/assets/job-detection-mockup.png'
  },
  {
    id: 'college-recommender',
    title: 'College Discovery Platform',
    subtitle: 'Next-Gen Educational Discovery',
    description: 'A full-stack platform featuring dynamic filtering, search, and side-by-side comparison of 75+ universities using cloud-native infrastructure.',
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Azure'],
    image: '/assets/college-mockup.png'
  },
  {
    id: 'support-agent',
    title: 'AI Support Triage Agent',
    subtitle: 'Enterprise-Grade Support Automation',
    description: 'High-accuracy AI agent triaging real tickets for HackerRank and Visa with grounded RAG and complex escalation logic.',
    tech: ['Python', 'RAG', 'AI Agents', 'OpenAI'],
    image: '/assets/triage-mockup.png'
  },
  {
    id: 'movie-recommendation',
    title: 'Smart Movie Engine',
    subtitle: 'AI-Powered Media Discovery',
    description: 'A cloud-based movie recommendation platform utilizing Azure SQL and Next.js to deliver personalized content discovery.',
    tech: ['Next.js', 'Azure SQL', 'Prisma', 'TypeScript'],
    image: '/assets/movie-mockup.png'
  }
];

const Projects: React.FC = () => {
  return (
    <section id="work" className="container" style={{ padding: '4rem 0' }}>
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Selected Projects</h2>
        <div style={{ width: '60px', height: '4px', background: 'var(--accent-teal)' }}></div>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
        gap: '3rem'
      }}>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
