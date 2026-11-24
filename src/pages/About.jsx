export default function About() {
  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">About Me</h1>
        <p className="page-subtitle">
          Undergraduate student, researcher, and software builder passionate about computer science and AI.
        </p>
      </div>

      <div className="card mb-2">
        <p style={{ fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
          I’m a curious, enthusiastic, and ambitious technology explorer.
          I love learning, experimenting with emerging tools, and turning ideas into real-world applications.
          My passion for software engineering drives me to bridge deep learning research with functional, full-stack product development.
        </p>
      </div>

      <div className="card mb-2">
        <h2 className="section-title" style={{ marginTop: 0 }}>Education</h2>
        <p style={{ margin: '0 0 0.5rem 0' }}>
          <strong>B.Tech in Computer Science & Engineering</strong>
        </p>
        <p className="text-muted" style={{ margin: 0 }}>
          Vellore Institute of Technology (VIT) &bull; 2024 &ndash; 2028
        </p>
      </div>

      <div className="card mb-2">
        <h2 className="section-title" style={{ marginTop: 0 }}>Technical Journey</h2>
        <p style={{ lineHeight: '1.7', margin: 0 }}>
          I started programming during the summer after Class 12, first learning C and Python.
          That sparked a fascination with how software can solve complex challenges, which led me to delve
          into machine learning, deep learning research, web frameworks, and full-stack engineering throughout my undergraduate studies.
        </p>
      </div>

      <div className="card">
        <h2 className="section-title" style={{ marginTop: 0 }}>Values & Approach</h2>
        <ul style={{ paddingLeft: '1.25rem', margin: 0 }}>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Continuous Learning:</strong> Constantly staying abreast of emerging developments in artificial intelligence and web architectures.
          </li>
          <li style={{ marginBottom: '0.5rem' }}>
            <strong>Building Pragmatic Solutions:</strong> Translating concepts and algorithms into solid, usable applications.
          </li>
          <li>
            <strong>Exploration & Experimentation:</strong> Testing boundaries, comparing model paradigms, and experimenting beyond course curricula.
          </li>
        </ul>
      </div>
    </section>
  );
}
