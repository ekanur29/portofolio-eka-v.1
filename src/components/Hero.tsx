function Hero() {
  return (
    <section id="home" className="hero wrap">
      <span className="eyebrow">SIJA · SMK Negeri 1 Cimahi · Student</span>
      <h1>
        Portofolio
        <br />
        Eka Nur Andini Fitriyani
      </h1>
      <p className="hero-sub">Student · Junior Web Developer</p>

      <div className="stack-frame">
        <div className="stack-cards">
          <div className="stack-card c1">
            <span className="tag">Web Development</span>
            <div className="mini-net">
              <span style={{ height: "40%" }} />
              <span style={{ height: "70%" }} />
              <span style={{ height: "55%" }} />
              <span style={{ height: "90%" }} />
              <span style={{ height: "35%" }} />
            </div>
            <span className="big">HTML · CSS · JS</span>
          </div>

          <div className="stack-card c2">
            <span className="tag">Networking &amp; IoT</span>
            <span className="font-mono" style={{ fontSize: "0.7rem", lineHeight: 1.6 }}>
              Cisco Packet Tracer
              <br />
              Arduino · ESP32
            </span>
            <span className="big">VLAN / IoT</span>
          </div>

          <div className="stack-card c3">
            <span className="tag">Creative</span>
            <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>
              Canva · Video Editing
            </span>
            <span className="big">Design</span>
          </div>
        </div>
        <p className="ciao">Halo!</p>
      </div>
    </section>
  );
}

export default Hero;
