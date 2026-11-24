export default function Contact() {
  return (
    <section className="container fade-in pt-2 pb-2">
      <div className="section-header mb-2">
        <h1 className="page-title">Contact</h1>
        <p className="page-subtitle">
          Feel free to reach out for collaborations, discussions on software engineering, or AI research opportunities.
        </p>
      </div>

      <div className="contact-card card">
        <div className="contact-method mb-2">
          <span className="contact-label">Professional Email</span>
          <a
            href="mailto:supreethreddygunnala66@gmail.com"
            className="contact-value"
          >
            supreethreddygunnala66@gmail.com
          </a>
        </div>

        <div className="contact-method mb-2">
          <span className="contact-label">GitHub Profile</span>
          <a
            href="https://github.com/supreeth-gunnala"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            github.com/supreeth-gunnala
          </a>
        </div>

        <div className="contact-method">
          <span className="contact-label">LinkedIn Profile</span>
          <a
            href="https://www.linkedin.com/in/gunnala-supreeth-reddy"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-value"
          >
            linkedin.com/in/gunnala-supreeth-reddy
          </a>
        </div>
      </div>
    </section>
  );
}
