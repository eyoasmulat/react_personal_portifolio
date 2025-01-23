export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Dessalegn Mulat</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color animated-text">Full Stack</span>{" "}
            <br />
            <span className="animated-text move-text">Developer</span>
          </h1>
          <p className="hero--section-description">
            
            <h2>Software Engineer</h2>
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/dvphoto.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}


