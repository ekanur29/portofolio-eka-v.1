function Education() {
  return (
    <section id="education" className="section section--alt">
      <span className="eyebrow">Education</span>
      <h2 className="section-title" style={{ marginTop: 10 }}>
        Latar belakang <em>pendidikan</em>
      </h2>

      <article className="project-card" style={{ marginTop: 34 }}>
        <div className="project-info">
          <span className="year">Student</span>
          <h3>SMK Negeri 1 Cimahi</h3>
          <p className="desc">
            Sistem Informasi Jaringan dan Aplikasi (SIJA). Selama menempuh
            pendidikan di SIJA, saya mempelajari berbagai bidang teknologi
            seperti pemrograman, pengembangan website, database, jaringan
            komputer, server, UI/UX, dan IoT.
          </p>
          <div className="stat-row">
            <div>
              <span className="num">SIJA</span>
              <span className="label">Jurusan</span>
            </div>
            <div>
              <span className="num">Aktif</span>
              <span className="label">Status</span>
            </div>
          </div>
        </div>
        <div className="project-visual">SMK Negeri 1 Cimahi</div>
      </article>
    </section>
  );
}

export default Education;
