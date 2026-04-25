import './App.css'

function App() {
  return (
    <>
      <header className="navbar">
        <h2>Colin Pontell</h2>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h1>Colin Pontell</h1>
        <p>Designing accessible and user-focused digital experiences.</p>
        <a href="#projects" className="btn">View Projects</a>
      </section>

      <section id="about" className="section">
        <h2>About Me</h2>
        <p>
          I am a Digital Media student at UCF focused on web development,
          accessibility, UI/UX design, and interactive media.
        </p>

        <h3>Skills</h3>
        <p>HTML, CSS, JavaScript, React, PHP, UI Design</p>
      </section>

      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="cards">
          <div className="card">
            <h3>SafeBites</h3>
            <p>Restaurant app that helps users identify allergens and dietary-friendly menu items.</p>
          </div>

          <div className="card">
            <h3>Exercise Tracker</h3>
            <p>React app used to track workouts, reps, and progress.</p>
          </div>

          <div className="card">
            <h3>ProjTrack</h3>
            <p>Project management web app created with Bubble.io.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Email: pontellc@gmail.com</p>
        <p>GitHub: github.com/pontellc</p>
      </section>

      <footer className="footer">
        <p>© 2026 Colin Pontell</p>
      </footer>
    </>
  )
}

export default App