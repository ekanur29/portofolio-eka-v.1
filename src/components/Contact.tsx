"use client";

const links = [
  {
    label: "Email",
    value: "mailto:ekanurandini29@gmail.com",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "https://github.com/ekanur29",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "https://linkedin.com/in/eka-nur-andini-fitriyani",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect width="4" height="12" x="2" y="9"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "https://instagram.com/dini_o04",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </svg>
    ),
  },
];

function Contact() {
  return (
    <section id="contact" className="section wrap">
      <span className="eyebrow">Contact</span>
      <h2 className="section-title" style={{ marginTop: 10 }}>
        Mari <em>terhubung</em>
      </h2>
      <div className="tags-panel" style={{ marginTop: 34 }}>
        <h3>Hubungi Saya</h3>
        <p style={{ marginBottom: 24, opacity: 0.85 }}>
          Silakan hubungi saya melalui salah satu kanal berikut.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.value}
              target="_blank"
              rel="noopener noreferrer"
              title={l.label}
              aria-label={l.label}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                padding: "10px 18px",
                borderRadius: "50px",
                backgroundColor: "var(--cream, #f7eee1)",
                color: "var(--ink, #2c2a21)",
                border: "1px solid var(--line, rgba(44, 42, 33, 0.15))",
                fontWeight: 600,
                fontSize: "0.9rem",
                textDecoration: "none",
                transition: "all 0.25s ease",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--olive, #57623f)";
                e.currentTarget.style.color = "#ffffff";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow = "0 6px 16px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--cream, #f7eee1)";
                e.currentTarget.style.color = "var(--ink, #2c2a21)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)";
              }}
            >
              <span style={{ display: "flex", alignItems: "center" }}>{l.icon}</span>
              <span>{l.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;