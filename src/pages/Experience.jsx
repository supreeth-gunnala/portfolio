export default function Experience() {
  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">Experience</h1>
        <p className="page-subtitle">
          Hands-on internships spanning machine learning research and full-stack software development.
        </p>
      </div>

      {/* TIH – Research Internship */}
      <article className="card mb-2">
        <span className="milestone-type">Research Internship</span>
        <h2 className="milestone-title">Technology Innovation Hub (TIH), ISI Kolkata</h2>
        <p className="milestone-org">
          <strong>Machine Learning Research Intern</strong> &bull; <span>May 2026 &ndash; July 2026</span>
        </p>
        <p style={{ lineHeight: '1.7' }}>
          Conducted machine learning and deep learning research activities. Implemented neural architectures in PyTorch,
          conducted extensive data analysis using NumPy and Pandas, optimized experimental workflows, and synthesized
          findings into technical documentation and formal research presentations.
        </p>
        <div className="tag-list mt-2">
          <span className="tag">Python</span>
          <span className="tag">PyTorch</span>
          <span className="tag">NumPy</span>
          <span className="tag">Pandas</span>
          <span className="tag">Scikit-learn</span>
          <span className="tag">SQL</span>
        </div>
      </article>

      {/* NullClass – Web Development Internship */}
      <article className="card">
        <span className="milestone-type">Industry Internship</span>
        <h2 className="milestone-title">NullClass</h2>
        <p className="milestone-org">
          <strong>Full-Stack Web Development Intern</strong> &bull; <span>Oct 2025 &ndash; Jan 2026</span>
        </p>
        <p style={{ lineHeight: '1.7' }}>
          Engineered a full-stack Django web application. Implemented user authentication and access controls,
          designed relational database schemas and models, and integrated dynamic front-end templates with robust
          back-end business logic. Employed professional Git/GitHub workflows for version control and issue tracking.
        </p>
        <div className="tag-list mt-2">
          <span className="tag">Python</span>
          <span className="tag">Django</span>
          <span className="tag">HTML5</span>
          <span className="tag">CSS3</span>
          <span className="tag">JavaScript</span>
          <span className="tag">SQLite</span>
          <span className="tag">Git & GitHub</span>
        </div>
      </article>
    </section>
  );
}
