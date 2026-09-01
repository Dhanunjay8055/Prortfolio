import './App.css';

function App() {
  return (
    <div className="App">

      <section className="introduce" id="home">

        <div className="title">
          Hi, I'm Yadla Dhanunjay
        </div>

        <div className="role">
          Aspiring Java Full Stack Developer
        </div>

        {/* View Projects */}
        <a href="#projects" className="work">
          ./ view_projects
        </a>

        {/* Resume Download */}
        <a
          href="/files/YadlaDhananjay.pdf"
          download
          className="resume-btn"
        >
          Resume
        </a>

      </section>


      {/* Projects Section */}
      <section id="projects" className="projects">

        <h1>My Projects</h1>

        <p>Your projects will go here.</p>

      </section>
      <section id="contact" className="contact">

  {/* LEFT SIDE */}
  <div className="contact-left">

    <h1>
      LET'S <br />
      <span>BUILD.</span>
    </h1>

    {/* GitHub */}
    <a
      href="https://github.com/dhananjay"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="icon">⌘</div>

      <div>
        <small>GITHUB</small>
        <h3>@dhananjay</h3>
      </div>

      <span className="arrow">→</span>
    </a>


    {/* LinkedIn */}
    <a
      href="https://www.linkedin.com/in/dhananjay"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="icon">in</div>

      <div>
        <small>LINKEDIN</small>
        <h3>in/dhananjay</h3>
      </div>

      <span className="arrow">→</span>
    </a>


    {/* Email */}
    <a
      href="mailto:your-email@gmail.com"
      className="contact-card"
    >
      <div className="icon">✉</div>

      <div>
        <small>EMAIL</small>
        <h3>your-email@gmail.com</h3>
      </div>

      <span className="arrow">→</span>
    </a>


    {/* Twitter / X */}
    <a
      href="https://x.com/dhananjay"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card"
    >
      <div className="icon">𝕏</div>

      <div>
        <small>TWITTER / X</small>
        <h3>@dhananjay</h3>
      </div>

      <span className="arrow">→</span>
    </a>

  </div>


  {/* RIGHT SIDE - CONTACT FORM */}
  <div className="contact-right">

    <form>

      <label>Your Name</label>

      <input
        type="text"
        placeholder='String name = "..."'
        required
      />


      <label> Your Email</label>

      <input
        type="email"
        placeholder='String email = "..."'
        required
      />


      <label>Message</label>

      <textarea
        placeholder={'String message = """\n  Hello Dhananjay...\n""";'}
        required
      ></textarea>


      <button type="submit">
        ✈ execute( sendMessage )
      </button>

    </form>

  </div>

</section>

    </div>
  );
}

export default App;