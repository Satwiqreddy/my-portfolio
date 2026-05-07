import React from 'react';

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, subtitle, description, tech, image }) => {
  return (
    <div className="project-card" style={{
      position: 'relative',
      padding: '2rem',
      backgroundColor: 'white',
      border: '1px solid var(--border-teal)',
      transition: 'var(--transition)',
      cursor: 'pointer'
    }}>
      <div className="frame-corner frame-tl" style={{ width: '20px', height: '20px' }}></div>
      <div className="frame-corner frame-tr" style={{ width: '20px', height: '20px' }}></div>
      <div className="frame-corner frame-bl" style={{ width: '20px', height: '20px' }}></div>
      <div className="frame-corner frame-br" style={{ width: '20px', height: '20px' }}></div>
      
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        backgroundColor: '#f0f0f0',
        marginBottom: '2rem',
        overflow: 'hidden'
      }}>
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition)' }} 
        />
      </div>
      
      <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{title}</h3>
      <p style={{ 
        fontFamily: 'var(--font-sans)', 
        fontSize: '0.8rem', 
        textTransform: 'uppercase', 
        letterSpacing: '2px',
        color: 'var(--accent-teal)',
        marginBottom: '1.5rem',
        fontWeight: 600
      }}>
        {subtitle}
      </p>
      
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem' }}>
        {description}
      </p>
      
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        {tech.map(t => (
          <span key={t} style={{
            padding: '0.3rem 0.8rem',
            fontSize: '0.7rem',
            backgroundColor: 'var(--bg-teal-light)',
            color: 'var(--accent-teal)',
            fontWeight: 600,
            letterSpacing: '1px'
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
