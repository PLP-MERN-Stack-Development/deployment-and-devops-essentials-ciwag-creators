export default function Home() {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to BioVerse Academy</h1>
          <p className="lead">
            Learn biology step by step with clear lessons, visuals, and practical examples.
          </p>
          <a href="#getting-started" className="cta-btn">Start Learning</a>

          {/* Floating icons */}
          <div className="hero-icons">
            <span className="icon dna">🧬</span>
            <span className="icon leaf">🍃</span>
            <span className="icon microscope">🔬</span>
            <span className="icon atom">⚛️</span>
          </div>
        </div>
      </section>

      {/* Main content cards */}
      <div className="container" id="getting-started">
        <div className="card">
          <h2>Getting Started</h2>
          <p>
            Explore simple lessons, fun experiments, and visual explanations to master biology.
          </p>
        </div>

        <div className="card">
          <h2>About BioVerse</h2>
          <p>
            BioVerse Academy is a platform for biology enthusiasts to learn and share knowledge. Build your skills with interactive lessons and practical examples.
          </p>
        </div>
      </div>
    </div>
  );
}
