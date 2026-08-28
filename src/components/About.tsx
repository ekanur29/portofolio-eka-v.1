function About() {
  return (
    <section id="about" className="section wrap">
      <span className="eyebrow">About Me</span>
      <h2 className="section-title" style={{ marginTop: 10 }}>
        Tentang <em>Eka</em>...
      </h2>

      <article className="project-card" style={{ marginTop: 34 }}>
        <div className="project-info">
          <p className="desc" style={{ fontSize: "0.95rem" }}>
            Saya Eka Nur Andini Fitriyani, siswa SMK Negeri 1 Cimahi jurusan Sistem
            Informasi Jaringan dan Aplikasi (SIJA) yang tertarik pada dunia teknologi
            dan pengembangan digital. Saya memiliki pengalaman dalam web development,
            UI/UX, networking, dan IoT, serta senang mengeksplorasi sisi kreatif
            melalui desain Canva dan editing video.
          </p>
          <div className="tag-cloud" style={{ marginTop: 18 }}>
            {[
              "Web Development",
              "UI/UX Design",
              "Networking",
              "IoT",
              "Canva Design",
              "Video Editing",
            ].map((t) => (
              <span className="tag-pill" key={t}>
                {t}
              </span>
            ))}
          </div>
        </div>
        <div className="project-visual">[PROFILE PHOTO]</div>
      </article>
    </section>
  );
}

export default About;
