import React from 'react';

const skillCategories = [
  {
    title: 'LANGUAGES',
    icon: '⚡',
    skills: ['Python', 'C++', 'Java', 'JavaScript', 'Go', 'C', 'Haskell', 'Bash']
  },
  {
    title: 'BACKEND & FRAMEWORKS',
    icon: '🚀',
    skills: ['Node.js', 'Express', 'Next.js', 'FastAPI', 'React', 'Tailwind CSS']
  },
  {
    title: 'DATABASES',
    icon: '💾',
    skills: ['PostgreSQL', 'Snowflake', 'MongoDB', 'MySQL', 'Redis', 'SQLite', 'Prisma']
  },
  {
    title: 'CLOUD & DEVOPS',
    icon: '☁️',
    skills: ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Linux', 'Git', 'Vercel', 'CI/CD']
  },
  {
    title: 'AI/ML & DATA',
    icon: '🤖',
    skills: ['TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'Scikit-learn', 'RAG', 'Agent Orchestration', 'OpenAI']
  },
  {
    title: 'TOOLS & IDES',
    icon: '🔧',
    skills: ['VS Code', 'IntelliJ', 'Postman', 'MATLAB', 'Google Analytics', 'Kafka', 'Solidity', 'Tableau', 'PowerBI']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="about" className="container" style={{ padding: '6rem 0' }}>
      <div style={{ marginBottom: '4rem', position: 'relative' }}>
        <h2 style={{ fontSize: '3.5rem', marginTop: '0.5rem' }}>The Arsenal</h2>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem'
      }}>
        {skillCategories.map((cat) => (
          <div key={cat.title} className="skill-card" style={{
            border: '1px solid var(--border-teal)',
            padding: '1.5rem',
            position: 'relative',
            backgroundColor: 'white'
          }}>
            <div className="frame-corner frame-tl" style={{ width: '15px', height: '15px' }}></div>
            <div className="frame-corner frame-br" style={{ width: '15px', height: '15px' }}></div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              marginBottom: '1.5rem',
              borderBottom: '1px solid var(--border-teal)',
              paddingBottom: '0.8rem'
            }}>
              <span style={{ fontSize: '1.2rem' }}>{cat.icon}</span>
              <h3 style={{ 
                fontSize: '0.9rem', 
                letterSpacing: '2px', 
                fontWeight: 700,
                color: 'var(--accent-teal)'
              }}>
                {cat.title}
              </h3>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '0.8rem'
            }}>
              {cat.skills.map(skill => (
                <div key={skill} style={{
                  padding: '0.6rem',
                  fontSize: '0.85rem',
                  border: '1px solid #f0f0f0',
                  textAlign: 'center',
                  fontWeight: 500,
                  transition: 'var(--transition)',
                  backgroundColor: 'var(--bg-cream)'
                }}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
