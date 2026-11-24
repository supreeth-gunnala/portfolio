export default function Skills() {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'C', 'JavaScript (ES6+)', 'SQL', 'HTML5', 'CSS3']
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        'PyTorch',
        'Django',
        'React',
        'OpenCV',
        'NumPy',
        'Pandas',
        'Scikit-learn',
        'Chart.js',
        'Streamlit'
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Git & GitHub',
        'VS Code',
        'Linux / Bash',
        'SQLite',
        'PostgreSQL',
        'REST APIs'
      ]
    },
    {
      title: 'Core Competencies & Domains',
      skills: [
        'Deep Learning & Computer Vision',
        'Full-Stack Web Development',
        'Image Dehazing & Restoration',
        'Data Analysis & Visualization',
        'Responsive UI/UX Engineering',
        'Database Modeling & Authentication'
      ]
    }
  ];

  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">Technical Skills</h1>
        <p className="page-subtitle">
          Categorized technical skills spanning artificial intelligence, full-stack development, and engineering tooling.
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="card skill-category-card">
            <h3 className="category-title">{category.title}</h3>
            <div className="skill-pills mt-2">
              {category.skills.map((skill, sIdx) => (
                <span key={sIdx} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
