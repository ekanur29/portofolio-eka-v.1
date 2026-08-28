const items = [
{
  title: "OSIS — Humas Sekretariat Bidang 4",
  desc: "Mengelola administrasi kegiatan, pengajuan perizinan, komunikasi dengan warga sekolah, serta membantu pelaksanaan kegiatan seperti Classmeet (PSC), MPLS, dan Pesantren Kilat.",
},

{
  title: "OSIS — Humas Divisi Kebersihan",
  desc: "Menyampaikan informasi dan jadwal kebersihan, mengelola rekap absensi serta dokumentasi, dan membantu koordinasi siswa dalam kegiatan kerja bakti.",
},
];

function Experience() {
  return (
    <section id="experience" className="section wrap">
      <span className="eyebrow">Experience &amp; Organization</span>
      <h2 className="section-title" style={{ marginTop: 10 }}>
        Pengalaman <em>organisasi</em>
      </h2>
      <div className="mini-tiles" style={{ marginTop: 34 }}>
        {items.map((it) => (
          <div className="mini-tile" key={it.title}>
            <h4>{it.title}</h4>
            <p>{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
