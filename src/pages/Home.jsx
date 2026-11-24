import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="fade-in">
      <section className="hero">
        <div className="container">
          <h1>Hi, I’m Gunnala Supreeth Reddy</h1>
          <p>Full-Stack Developer & AI Explorer</p>
          <div className="hero-actions">
            <Link to="/projects" className="btn-primary">
              View Projects &rarr;
            </Link>
            <Link to="/contact" className="btn-outline">
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      <section className="container pb-2">
        <div className="section-header mb-2 flex-center" style={{ flexDirection: 'column' }}>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Featured Work</h2>
        </div>

        <div className="project-grid">
          {/* Card 1 – AI Image Dehazing */}
          <article className="card project-card">
            <div className="project-card-header">
              <h3>AI Image Dehazing</h3>
              <p className="project-tagline">Deep Learning Image Restoration</p>
            </div>
            <div className="tag-list mb-2">
              <span className="tag">Python</span>
              <span className="tag">PyTorch</span>
              <span className="tag">Streamlit</span>
            </div>
            <p className="project-summary">
              Controlled research comparing U-Net vs. CA-U-Net on RESIDE-6K alongside a full-featured Streamlit application using AOD-Net and Enhanced DehazeNet.
            </p>
            <div className="card-actions mt-2">
              <Link to="/projects/dehazing" className="btn-primary">
                Read Details &rarr;
              </Link>
            </div>
          </article>

          {/* Card 2 – Movie Ticket Booking */}
          <article className="card project-card">
            <div className="project-card-header">
              <h3>Movie Ticket Booking System</h3>
              <p className="project-tagline">Full-Stack Cinema Management Platform</p>
            </div>
            <div className="tag-list mb-2">
              <span className="tag">Python</span>
              <span className="tag">Django</span>
              <span className="tag">JavaScript</span>
            </div>
            <p className="project-summary">
              Django-powered booking platform with real-time 10&times;10 interactive seat selection, trailer playback, authentication, and cancellation workflows.
            </p>
            <div className="card-actions mt-2">
              <Link to="/projects/movie-booking" className="btn-primary">
                Read Details &rarr;
              </Link>
            </div>
          </article>

          {/* Card 3 – Git Explorer */}
          <article className="card project-card">
            <div className="project-card-header">
              <h3>Git Explorer v2</h3>
              <p className="project-tagline">GitHub Profile & Repository Analytics</p>
            </div>
            <div className="tag-list mb-2">
              <span className="tag">React 18</span>
              <span className="tag">Chart.js</span>
              <span className="tag">GitHub API</span>
            </div>
            <p className="project-summary">
              Interactive developer dashboard featuring Chart.js visualizations, repository filtering, activity feeds, and side-by-side profile comparisons.
            </p>
            <div className="card-actions mt-2">
              <Link to="/projects/git-explorer" className="btn-primary">
                Read Details &rarr;
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
