import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import safebitesLogo from './assets/safebites.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!formData.email.includes('@')) {
      newErrors.email = 'Enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
  }

  return (
    <>
      <header className="navbar">
        <h2>Colin Pontell</h2>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="home" className="hero">
        <motion.div
          className="hero-card"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Colin Pontell</h1>
          <p>
            Web and Interactive Media Graduate focused on designing and implementing new concepts and ideas.
          </p>
          <a href="#projects" className="btn">View Projects</a>
        </motion.div>
      </section>

      <motion.section
        id="about"
        className="section about-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>

        <p>
          I am a graduate from the University of Central Florida with a degree in Web and Interactive Media.
          I enjoy building websites and applications that are clean and easy to use.
          I’m interested in both front-end and back-end development, especially when it comes to
          building full applications from start to finish.
        </p>

        <p>
          On the back-end side, I’ve worked with Node.js and Express to build APIs that handle things like user login, account data, and saving preferences. I’ve also used MongoDB and MySQL to store and manage data, and I like being able to tie together the front end and the database.
        </p>

        <p>
          I’ve had experience working with full-stack projects where the app is constantly sending
          and receiving data from a server. I want my projects to run smoothly behind the scenes, not just what the user sees.
        </p>

        <p>
          My goal is to keep improving as a developer and build projects that not only look good,
          but actually work well and provide real value to people.
        </p>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>React Native</span>
          <span>Node.js</span>
          <span>PHP</span>
          <span>MongoDB</span>
          <span>MySQL</span>
          <span>APIs</span>
        </div>
      </motion.section>

      <motion.section
        id="projects"
        className="section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>

        <div className="cards">
          <div className="card">
            <div className="project-image white-bg">
              <img src={safebitesLogo} alt="SafeBites Logo" className="logo-img" />
            </div>
            <h3>SafeBites</h3>
            <p>
              A restaurant menu application designed to help users view allergen
              and dietary information before ordering.
            </p>
            <a href="https://github.com/M-Carberry/SafeBites" target="_blank">View Project</a>
          </div>

          <div className="card">
            <div className="project-image">Exercise App</div>
            <h3>React Exercise App</h3>
            <p>
              A React project focused on tracking exercise information and practicing
              component-based front-end development.
            </p>
            <a href="https://github.com/pontellc/react-exercise-app" target="_blank">View Project</a>
          </div>

          <div className="card">
            <div className="project-image">Menu App</div>
            <h3>Menu App</h3>
            <p>
              A menu-based web application project that demonstrates layout,
              organization, and interactive web design skills.
            </p>
            <a href="https://github.com/pontellc/menu-app" target="_blank">View Project</a>
          </div>

          <div className="card">
            <div className="project-image">Quiz App</div>
            <h3>Quiz App React Native</h3>
            <p>
              A mobile quiz application built with React Native that includes
              questions, answer choices, and score tracking.
            </p>
            <a href="https://github.com/pontellc/quiz-app-react-native" target="_blank">View Project</a>
          </div>
        </div>
      </motion.section>

      <motion.section
        id="contact"
        className="section contact-section"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Contact</h2>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <button type="submit">Send Message</button>

          {submitted && <p className="success">Message submitted successfully!</p>}
        </form>

        <div className="contact-links">
          <p>Email: <a href="mailto:pontellc@gmail.com">pontellc@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/pontellc" target="_blank">github.com/pontellc</a></p>
        </div>
      </motion.section>

      <footer className="footer">
        <p>© 2026 Colin Pontell</p>
      </footer>
    </>
  )
}

export default App
