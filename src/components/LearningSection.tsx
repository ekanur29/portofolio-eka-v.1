const highlightSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Laravel",
  "Figma",
  "Canva",
  "Cisco Packet Tracer",
  "Arduino",
];

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Laravel",
      "React JS",
      "MySQL",
      "Tailwind CSS",
      "Git & GitHub",
    ],
  },
  {
    title: "UI/UX & Design",
    skills: [
      "Figma",
      "Canva",
      "UI Design",
      "Basic UX Design",
      "Visual Design",
      "Presentation Design",
    ],
  },
  {
    title: "Video Editing",
    skills: [
      "Basic Video Editing",
      "Cutting & Trimming",
      "Text & Subtitle",
      "Transitions",
      "Basic Color Adjustment",
    ],
  },
  {
    title: "Networking & Server",
    skills: [
      "Basic Networking",
      "Cisco Packet Tracer",
      "VLAN",
      "Ubuntu/Linux",
      "Apache",
      "DNS",
      "Basic Server Configuration",
    ],
  },
  {
    title: "IoT",
    skills: ["Arduino", "ESP32", "Sensors", "LCD I2C", "Basic IoT Prototyping"],
  },
];

function SkillsSection() {
  return (
    <section id="learning" className="section section--alt">
      <span className="eyebrow">Skills</span>
      <h2 className="section-title" style={{ marginTop: 10 }}>
        Kemampuan <em>technical &amp; creative</em>
      </h2>

      <div className="learning-grid">
        <div className="duo-card">
          <div className="duo-tile">
            <span className="tile-label">Technical</span>
          </div>
          <div className="duo-tile">
            <span className="tile-label">Creative</span>
          </div>
        </div>

        <div className="tags-panel">
          <h3>Ringkasan</h3>
          <p>
            Kombinasi kemampuan technical dan creative yang terus saya
            kembangkan selama menempuh pendidikan di SIJA.
          </p>
          <div className="tag-cloud">
            {highlightSkills.map((s) => (
              <span className="tag-pill" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="mini-tiles">
          {skillCategories.map((cat) => (
            <div className="mini-tile" key={cat.title}>
              <h4>{cat.title}</h4>
              <div className="tag-cloud">
                {cat.skills.map((s) => (
                  <span className="tag-pill" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
