export default function Achievements() {
  const achievements = [
    {
      type: 'Research & Publication',
      title: 'Does Channel Attention Help a U-Net for Single-Image Dehazing? A Controlled Comparison on RESIDE-6K',
      organization: 'Academic Research Study',
      date: '2026',
      details:
        'Conducted a rigorous controlled comparison of a 4-level U-Net vs. a Channel Attention U-Net (CA-U-Net) using Squeeze-and-Excitation blocks on the RESIDE-6K dataset, achieving 25.657 dB PSNR.'
    },
    {
      type: 'Research Internship',
      title: 'Machine Learning & Deep Learning Research Intern',
      organization: 'Technology Innovation Hub (TIH), ISI Kolkata',
      date: 'May 2026 – July 2026',
      details:
        'Conducted research into machine learning models, implemented deep architectures using PyTorch, processed research data with NumPy and Pandas, and presented research outcomes.'
    },
    {
      type: 'Industry Internship',
      title: 'Full-Stack Web Development Intern',
      organization: 'NullClass',
      date: 'Oct 2025 – Jan 2026',
      details:
        'Engineered full-stack Django applications, implemented custom authentication, built relational database schemas, integrated responsive front-end views, and collaborated via Git/GitHub.'
    },
    {
      type: 'Academic Program',
      title: 'B.Tech in Computer Science & Engineering',
      organization: 'Vellore Institute of Technology (VIT)',
      date: '2024 – 2028',
      details:
        'Undergraduate degree focusing on core computer science foundations, algorithms, data structures, artificial intelligence, and software engineering principles.'
    }
  ];

  const certifications = [
    {
      title: 'Python for Data Science, AI & Development',
      issuer: 'IBM (Coursera)'
    },
    {
      title: 'Deep Learning & Neural Network Architectures',
      issuer: 'Online Specialization'
    },
    {
      title: 'Full-Stack Web Development with Django',
      issuer: 'Professional Development Program'
    }
  ];

  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">Achievements & Certifications</h1>
        <p className="page-subtitle">
          Verified milestones across academic research, industry internships, and professional certifications.
        </p>
      </div>

      <div className="mb-2">
        <h2 className="section-title">Milestones & Experience</h2>
        <div className="timeline-grid">
          {achievements.map((item, idx) => (
            <article key={idx} className="card milestone-card">
              <span className="milestone-type">{item.type}</span>
              <h3 className="milestone-title">{item.title}</h3>
              <p className="milestone-org">
                <strong>{item.organization}</strong> &bull; <span>{item.date}</span>
              </p>
              <p className="milestone-details">{item.details}</p>
            </article>
          ))}
        </div>
      </div>

      <div>
        <h2 className="section-title">Verified Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <div key={idx} className="card cert-card">
              <h4 className="cert-title">{cert.title}</h4>
              <p className="cert-issuer">Issuing Organization: <strong>{cert.issuer}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
