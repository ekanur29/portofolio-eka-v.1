const items = [
  {
    title: "6th Place – Student Creativity Competition",
    org: "GCC Indonesia & UNESCO APCEIU — Vertical Video Category",
    year: "2024",
  },
  {
    title: "AWS Generative AI Event",
    org: "Guinness World Records Attempt Participant",
    year: "2025",
  },
  {
    title: "Artificial Intelligence & Large Language Models (LLM) Webinar",
    org: "Adinesia",
    year: "2025",
  },
  {
    title: "Arduino & Internet of Things (IoT) Trial Class",
    org: "ITN Malang",
    year: "2025",
  },
  {
    title: "TOEIC English Language Assessment",
    org: "",
    year: "2025",
  },
  {
    title: "Generative AI Fundamentals Training",
    org: "AI Opportunity Fund Asia Pacific",
    year: "2026",
  },
  {
    title: "Career Readiness & Green Mindset Training",
    org: "",
    year: "2026",
  },
];

function Certificates() {
  return (
    <section id="certificates" className="section section--alt">
      <span className="eyebrow">Achievements &amp; Certificates</span>
      <h2 className="section-title" style={{ marginTop: 10 }}>
        Pencapaian &amp; <em>sertifikasi</em>
      </h2>

      <div className="mini-tiles" style={{ marginTop: 34 }}>
        {items.map((it) => (
          <div className="mini-tile" key={it.title}>
            <span className="eyebrow">{it.year}</span>
            <h4 style={{ marginTop: 8 }}>{it.title}</h4>
            {it.org && <p>{it.org}</p>}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;