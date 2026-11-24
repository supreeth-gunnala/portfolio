import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

export default function Projects() {
  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">Projects</h1>
        <p className="page-subtitle">
          A showcase of deep learning research, full-stack web applications, and developer tools.
        </p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="card project-card">
            <div className="project-card-header">
              <h3>{project.title}</h3>
              <p className="project-tagline">{project.tagline}</p>
            </div>

            <div className="tag-list mb-2">
              {project.tech.map((t, idx) => (
                <span key={idx} className="tag">{t}</span>
              ))}
            </div>

            <p className="project-summary">
              {project.id === 'dehazing'
                ? project.implementation.description
                : project.description}
            </p>

            <div className="card-actions mt-2">
              <Link to={`/projects/${project.id}`} className="btn-primary">
                View Details &rarr;
              </Link>
              {project.id === 'dehazing' && project.implementation?.repo && (
                <a
                  href={project.implementation.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GitHub
                </a>
              )}
              {project.id !== 'dehazing' && project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
