const projects = [
  {
    title: "Occusense",
    category: "IoT",
    desc: "Mengembangkan sistem berbasis IoT menggunakan sensor ultrasonik untuk mendeteksi keberadaan pengguna toilet, dengan output status secara real-time melalui LCD dan indikator LED (merah/hijau).",
    tech: ["ESP 8266", "LCD i2c", "Ultrasonic Sensor"],
    role: "",
    image: "/images/projek-occusense.png",
  },
  {
    title: "SIKOMI",
    category: "IoT",
    desc: "Mengembangkan sistem IoT untuk monitoring suhu dan ketinggian air kolam menggunakan sensor DS18B20 dan ultrasonik. Data ditampilkan secara real-time melalui LCD dan bot Telegram, serta dilengkapi buzzer sebagai notifikasi ketika kondisi kolam tidak normal.",
    tech: ["ESP32", "Temperature Sensor (DS18B20)", "Ultrasonic Sensor", "LCD", "Telegram Bot", "Buzzer"],
    role: "",
    image: "/images/projek-sikomi.png",
  },
  {
    title: "Networking Project",
    category: "Networking",
    desc: "Project dan praktik konfigurasi jaringan menggunakan Cisco Packet Tracer.",
    tech: ["Cisco Packet Tracer"],
    role: "VLAN, trunk, router, switch, dan basic network configuration.",
  },
  {
    title: "SijaLearn",
    category: "UI/UX Design",
    desc: "Project website pembelajaran interface menggunakan Figma.",
    tech: ["Figma"],
    role: "",
    image: "/images/projek-sijalearn.png",
  },
  {
    title: "Canva Design",
    category: "Design",
    desc: "Karya desain visual yang dibuat menggunakan Canva, seperti poster, presentation design, atau kebutuhan media sosial.",
    tech: ["Canva"],
    role: "",
  },
  {
    title: "Video Editing",
    category: "Creative",
    desc: "Project hasil editing video untuk kebutuhan dokumentasi, presentasi, atau konten.",
    tech: ["Video Editing"],
    role: "",
  },
];

function WorkSection() {
  return (
    <section id="work" className="section wrap">
      <div className="work-head">
        <span className="eyebrow">Projects</span>
        <h2 className="section-title">
          Beberapa <em>project</em> yang sudah saya kerjakan
        </h2>
      </div>

      {projects.map((p) => (
        <article className="project-card" key={p.title}>
          <div className="project-info">
            <span className="year">{p.category}</span>
            <h3>{p.title}</h3>
            <p className="desc">{p.desc}</p>
            <div className="tag-cloud" style={{ marginBottom: p.role ? 14 : 20 }}>
              {p.tech.map((t) => (
                <span className="tag-pill" key={t}>
                  {t}
                </span>
              ))}
            </div>
            {p.role && (
              <p className="desc" style={{ marginBottom: 20 }}>
                {p.role}
              </p>
            )}
          </div>
          <div className="project-visual">
            <img src={p.image} alt={p.title} />
          </div>
        </article>
      ))}
    </section>
  );
}

export default WorkSection;
