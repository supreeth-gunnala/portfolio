import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects.js';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="container fade-in pt-2 pb-2">
        <h2>Project Not Found</h2>
        <p>The requested project does not exist.</p>
        <Link to="/projects" className="btn-primary mt-2">
          &larr; Back to Projects
        </Link>
      </section>
    );
  }

  return (
    <section className="container fade-in pt-2 pb-2">
      <Link to="/projects" className="back-link mb-2">
        &larr; Back to all projects
      </Link>

      <div className="project-detail-header mb-2">
        <h1 className="page-title">{project.title}</h1>
        <p className="page-subtitle">{project.tagline}</p>
        <div className="tag-list mt-2">
          {project.tech.map((t, idx) => (
            <span key={idx} className="tag">{t}</span>
          ))}
        </div>
      </div>

      {/* Special Layout for AI Image Dehazing */}
      {project.id === 'dehazing' ? (
        <div className="project-sections">
          {/* Note on Research vs Implementation */}
          <div className="info-box mb-2">
            <strong>Important Clarification:</strong> The research paper and the GitHub
            repository represent two distinct projects exploring single-image dehazing through different architectures.
            The research paper conducts a controlled comparison of <strong>U-Net vs. CA-U-Net</strong> on the RESIDE-6K dataset,
            while the GitHub implementation builds an interactive Streamlit application powered by <strong>AOD-Net and Enhanced DehazeNet</strong>.
          </div>

          {/* Research Paper Section */}
          <article className="card mb-2">
            <h2 className="section-title">1. Research Paper</h2>
            <h3 className="paper-title">{project.research.paperTitle}</h3>

            <div className="detail-group">
              <h4>Problem & Motivation</h4>
              <p>
                Haze and fog atmospheric particles scatter light, reducing contrast, washing out colors,
                and obscuring fine details in outdoor imagery. This degrades perceptual quality and compromises
                downstream computer vision systems (e.g., autonomous driving and surveillance). The study investigated
                whether incorporating channel attention into standard convolutional architectures yields meaningful
                performance gains in single-image dehazing.
              </p>
            </div>

            <div className="detail-group">
              <h4>Model Architectures Compared</h4>
              <p>{project.research.architecture}</p>
              <ul>
                <li><strong>Baseline U-Net:</strong> 4-level symmetric encoder-decoder with double convolution blocks (3&times;3 conv, BatchNorm, ReLU), max-pooling downsampling, bilinear upsampling, skip connections, and a final 1&times;1 convolution with sigmoid activation. Channels: 64 &rarr; 128 &rarr; 256 &rarr; 512 &rarr; 1024.</li>
                <li><strong>CA-U-Net:</strong> Identical four-level U-Net backbone enhanced with Squeeze-and-Excitation (SE) channel attention blocks placed after each double-conv stage to adaptively recalibrate feature map channel responses.</li>
              </ul>
            </div>

            <div className="detail-group">
              <h4>Dataset & Experimental Setup</h4>
              <p>{project.research.dataset}</p>
            </div>

            <div className="detail-group">
              <h4>Quantitative Results (RESIDE-6K Test Set)</h4>
              <div className="table-container">
                <table className="results-table">
                  <thead>
                    <tr>
                      <th>Architecture</th>
                      <th>Parameters</th>
                      <th>PSNR (dB)</th>
                      <th>SSIM</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.research.results.map((row, idx) => (
                      <tr key={idx}>
                        <td><strong>{row.model}</strong></td>
                        <td>{row.params}</td>
                        <td>{row.psnr}</td>
                        <td>{row.ssim}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="table-caption mt-2">
                <strong>Finding:</strong> Channel attention delivers a modest improvement in PSNR (+0.124 dB)
                with closely comparable SSIM (-0.0015) while adding 0.22 M parameters over the baseline.
              </p>
            </div>
          </article>

          {/* GitHub Implementation Section */}
          <article className="card mb-2">
            <h2 className="section-title">2. GitHub Implementation & Streamlit Application</h2>
            <p>{project.implementation.description}</p>

            <div className="detail-group">
              <h4>Key Architecture & Features</h4>
              <ul>
                <li><strong>AOD-Net & Enhanced DehazeNet:</strong> Implemented deep models with multi-scale feature extraction and SE attention mechanisms.</li>
                <li><strong>Streamlit Web App:</strong> Clean web UI allowing users to upload hazy images, select between dehazing models, visually compare input and restored outputs side by side, and download results.</li>
                <li><strong>Frameworks:</strong> PyTorch for model inference, OpenCV & NumPy for image pre/post-processing, Streamlit for application delivery.</li>
              </ul>
            </div>

            <div className="card-actions mt-2">
              <a
                href={project.implementation.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                View GitHub Repository &rarr;
              </a>
            </div>
          </article>
        </div>
      ) : (
        /* Standard Layout for Other Projects */
        <div className="project-sections">
          <article className="card mb-2">
            <h2 className="section-title">Overview</h2>
            <p>{project.description}</p>

            {project.id === 'movie-booking' && (
              <div className="detail-group">
                <h4>Verified Implemented Features</h4>
                <ul>
                  <li>User registration, login, and logout using Django authentication</li>
                  <li>Movie catalog displaying posters, ratings, genres, languages, and durations</li>
                  <li>Real-time search across movie titles and descriptions</li>
                  <li>Multi-criteria filtering by genre and language</li>
                  <li>Dedicated movie detail pages with embedded YouTube trailer playback</li>
                  <li>Interactive 10&times;10 seat-selection grid with live seat availability</li>
                  <li>Booking creation, confirmation, and receipt generation</li>
                  <li>Personal booking history and booking cancellation workflows</li>
                  <li>Comprehensive admin dashboard for movies, genres, languages, and bookings</li>
                  <li>Responsive layout optimized for mobile, tablet, and desktop viewports</li>
                </ul>
              </div>
            )}

            {project.id === 'git-explorer' && (
              <div className="detail-group">
                <h4>Verified Implemented Features</h4>
                <ul>
                  <li>Search GitHub developer profiles by username via GitHub REST API</li>
                  <li>Profile overview: avatar, bio, follower/following counts, and public repositories</li>
                  <li>Repository explorer with real-time search, language filtering, and sorting</li>
                  <li>Statistical overview: aggregate stars, forks, repository counts, and top languages</li>
                  <li>Interactive Chart.js visualizations for language distribution and repository stars</li>
                  <li>Live stream of recent public GitHub activities and repository summaries</li>
                  <li>Followers and following list exploration</li>
                  <li>Side-by-side comparison mode to contrast metrics between two developers</li>
                  <li>Theme persistence (dark and light mode) and fully responsive interface</li>
                </ul>
              </div>
            )}

            {project.future && (
              <div className="detail-group future-section">
                <h4>Possible Future Enhancements</h4>
                <p className="text-muted">
                  The following items represent potential future improvements and are not yet implemented:
                </p>
                <ul>
                  {project.future.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="card-actions mt-2">
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  View GitHub Repository &rarr;
                </a>
              )}
            </div>
          </article>
        </div>
      )}
    </section>
  );
}
