export default function Journey() {
  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">My Journey & Vision</h1>
        <p className="page-subtitle">
          The path from writing my first line of code to bridging deep learning with full-stack engineering.
        </p>
      </div>

      {/* Career Mission Quote */}
      <blockquote className="quote-card mb-2">
        &ldquo;My goal is to become a product-focused software engineer who turns ideas into useful real-world applications. I am particularly interested in combining full-stack development and artificial intelligence to explore new possibilities, build intelligent products and continuously grow as a technology professional.&rdquo;
      </blockquote>

      <div className="journey-timeline">
        {/* Phase 1 */}
        <article className="card mb-2">
          <span className="milestone-type">The Origin</span>
          <h3 className="section-title">Discovering Code After High School</h3>
          <p>
            My programming journey began during the summer break after completing Class 12.
            Curious about how software operates beneath the surface, I picked up C and Python.
            Learning foundational data structures and solving algorithmic challenges ignited an
            enduring passion for engineering through code.
          </p>
        </article>

        {/* Phase 2 */}
        <article className="card mb-2">
          <span className="milestone-type">Foundations</span>
          <h3 className="section-title">B.Tech at Vellore Institute of Technology</h3>
          <p>
            Joining the B.Tech program in Computer Science & Engineering (2024–2028) provided
            structured academic rigor. I dove deep into computer science principles, database design,
            and object-oriented architecture, while exploring areas outside the syllabus through
            hands-on experiments.
          </p>
        </article>

        {/* Phase 3 */}
        <article className="card mb-2">
          <span className="milestone-type">Industry & Research</span>
          <h3 className="section-title">Full-Stack Development & AI Research</h3>
          <p>
            To translate theoretical knowledge into real-world skill, I engaged in two complementary experiences:
          </p>
          <ul>
            <li>
              <strong>NullClass (Web Development Intern):</strong> Gained solid experience building full-stack
              Django applications, implementing authentication, modeling relational databases, and practicing Git workflows.
            </li>
            <li>
              <strong>TIH, ISI Kolkata (Research Intern):</strong> Immersed myself in machine learning and deep learning,
              writing PyTorch code, experimenting with neural network architectures, and evaluating models on standardized benchmarks.
            </li>
          </ul>
        </article>

        {/* Phase 4 */}
        <article className="card">
          <span className="milestone-type">The Horizon</span>
          <h3 className="section-title">Current Focus & Aspirations</h3>
          <p>
            Today, I focus on combining the precision of deep learning models with the usability of modern full-stack web applications.
            Whether it is single-image dehazing with attention mechanisms or interactive profile analytics platforms,
            I aim to engineer software that is performant, accessible, and grounded in real-world utility.
          </p>
        </article>
      </div>
    </section>
  );
}
