"use client";

import { useState, useEffect, useRef } from "react";

const skills = {
  languages: ["C", "C++", "Java", "Python", "PHP", "JavaScript", "Dart"],
  frameworks: ["React", "Flutter", "TensorFlow", "Slim Framework"],
  databases: ["MySQL", "PostgreSQL", "SQLite"],
  tools: ["Git", "GitHub", "Docker", "Kubernetes", "Postman", "PHPUnit"],
};

const projects = [
  {
    title: "School Management System",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "Built modules for student and staff management, attendance, fee tracking, bus routing, and academic performance.",
    icon: "🏫",
    color: "#4f46e5",
  },
  {
    title: "Online Laptop Store",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "Implemented role-based access for Admin, Staff, Customer, and Courier with order processing and dashboards.",
    icon: "💻",
    color: "#0891b2",
  },
  {
    title: "Cycle Rental System",
    tech: ["React", "Node.js", "Express", "PostgreSQL"],
    description:
      "Built a smart rental platform with QR-based rentals, real-time tracking, and dynamic cost calculation.",
    icon: "🚲",
    color: "#059669",
  },
];

const experience = [
  {
    role: "Software Developer Intern",
    company: "Linways Technologies Pvt. Ltd.",
    color: "#4f46e5",
    points: [
      "Developed web applications using PHP, Vue.js, Slim Framework and MySQL.",
      "Designed and tested REST APIs using Postman.",
      "Implemented unit testing using PHPUnit.",
    ],
  },
  {
    role: "Cyber Security Intern",
    company: "Avodha Edutech",
    color: "#0891b2",
    points: [
      "Gained hands-on experience with Burp Suite.",
      "Assisted in identifying and analyzing security issues.",
    ],
  },
];

const achievements = [
  { text: "Smart India Hackathon (SIH) 2025 Grand Finalist", icon: "🏆" },
  { text: "2nd Prize – Syntax Scrimmage National Coding Competition", icon: "🥈" },
  { text: "3rd Position – IT Game, Inceptra 2025", icon: "🥉" },
];

const certs = [
  "Advanced AI Program Workshop — Techyspot",
  "Database Administration Workshop — Inspired",
  "Core Python Programming & Data Science",
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible] as const;
}

function FadeIn({ children, delay = 0, className = "", style = {} }: {
  children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties;
}) {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      ...style,
    }}>
      {children}
    </div>
  );
}

export default function Home() {
  const [active, setActive] = useState("about");
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText("deninthomas1@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#f8f7f4", color: "#1a1a2e", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #f8f7f4;
          --bg2: #f0ede8;
          --surface: #ffffff;
          --border: #e5e0d8;
          --text: #1a1a2e;
          --text2: #4a4a6a;
          --text3: #8a8aaa;
          --indigo: #4f46e5;
          --amber: #d97706;
          --teal: #0891b2;
          --green: #059669;
        }

        body { background: var(--bg); }

        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: var(--bg2); }
        ::-webkit-scrollbar-thumb { background: #c8c4bc; border-radius: 4px; }

        .mono { font-family: 'JetBrains Mono', monospace; }
        .display { font-family: 'Playfair Display', serif; }
        .sans { font-family: 'Outfit', sans-serif; }

        .nav-link {
          cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text3);
          transition: color 0.2s;
          padding: 6px 2px;
          border-bottom: 2px solid transparent;
          text-decoration: none;
        }
        .nav-link:hover { color: var(--text); }
        .nav-link.active { color: var(--indigo); border-bottom-color: var(--indigo); }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 10px 18px;
          border: 1.5px solid var(--border);
          color: var(--text2);
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
          background: var(--surface);
          cursor: pointer;
        }
        .btn:hover { border-color: var(--indigo); color: var(--indigo); background: #eff0ff; }
        .btn.primary { background: var(--indigo); color: white; border-color: var(--indigo); }
        .btn.primary:hover { background: #4338ca; border-color: #4338ca; }

        .card {
          background: var(--surface);
          border: 1.5px solid var(--border);
          border-radius: 16px;
          padding: 28px;
          transition: border-color 0.25s, box-shadow 0.25s, transform 0.25s;
        }
        .card:hover {
          border-color: #c8c4e8;
          box-shadow: 0 8px 32px rgba(79,70,229,0.08);
          transform: translateY(-3px);
        }

        .skill-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 5px 12px;
          border: 1.5px solid var(--border);
          color: var(--text2);
          border-radius: 6px;
          background: var(--surface);
          transition: all 0.2s;
          cursor: default;
          white-space: nowrap;
        }
        .skill-chip:hover { border-color: var(--indigo); color: var(--indigo); background: #eff0ff; }

        .tag {
          display: inline-block;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.04em;
          padding: 3px 8px;
          border-radius: 4px;
          color: var(--text2);
          background: var(--bg2);
          border: 1px solid var(--border);
          margin: 2px;
        }

        .section-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--indigo);
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 6px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: 40px;
          font-weight: 700;
          color: var(--text);
          line-height: 1.1;
        }

        .divider {
          width: 48px;
          height: 3px;
          border-radius: 2px;
          background: var(--indigo);
          margin: 14px 0 28px;
        }

        .grid2 { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        @media (max-width: 680px) {
          .grid2 { grid-template-columns: 1fr; }
          .hero-name { font-size: 52px !important; }
          nav .nav-links { gap: 16px !important; }
        }

        .hero-name {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 8vw, 92px);
          font-weight: 700;
          line-height: 0.95;
          color: var(--text);
          letter-spacing: -0.02em;
        }

        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 20px;
          background: #eff0ff;
          color: var(--indigo);
          border: 1px solid #c7d2fe;
        }
        .badge::before { content: ''; width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .hero-accent {
          display: inline-block;
          color: var(--indigo);
          position: relative;
        }
        .hero-accent::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--indigo);
          opacity: 0.25;
          border-radius: 2px;
        }

        .exp-card {
          background: var(--surface);
          border: 1.5px solid var(--border);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.25s;
          position: relative;
          overflow: hidden;
        }
        .exp-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 4px;
          border-radius: 2px 0 0 2px;
        }
        .exp-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.07); transform: translateY(-2px); }

        .ach-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
          padding: 18px 20px;
          border-radius: 12px;
          background: var(--surface);
          border: 1.5px solid var(--border);
          transition: all 0.2s;
        }
        .ach-item:hover { border-color: #c7d2fe; background: #fafafe; }

        .cert-item {
          display: flex;
          gap: 14px;
          align-items: flex-start;
          padding: 14px 18px;
          border-radius: 10px;
          transition: background 0.2s;
        }
        .cert-item:hover { background: var(--bg2); }
      `}</style>

      {/* Nav */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(248,247,244,0.9)", backdropFilter: "blur(16px)",
        borderBottom: "1px solid var(--border)", padding: "0 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        height: 60,
      }}>
        <span className="mono" style={{ fontSize: 14, fontWeight: 500, color: "var(--indigo)", letterSpacing: "0.1em" }}>DT.</span>
        <div className="nav-links" style={{ display: "flex", gap: 28 }}>
          {["about", "experience", "projects", "contact"].map(s => (
            <a key={s} className={`nav-link ${active === s ? "active" : ""}`}
              onClick={() => { setActive(s); document.getElementById(s)?.scrollIntoView({ behavior: "smooth" }); }}>
              {s}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        padding: "80px 48px 60px", position: "relative", overflow: "hidden",
      }}>
        {/* Decorative blobs */}
        <div style={{ position: "absolute", top: "10%", right: "5%", width: 420, height: 420, borderRadius: "50%", background: "radial-gradient(circle, #e0e7ff 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "15%", left: "-5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, #fef3c7 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ maxWidth: 860, position: "relative", zIndex: 1 }}>
          <div style={{ opacity: 0, animation: "fadeUp 0.7s ease 0.1s forwards" }}>
            <span className="badge">Available for opportunities</span>
          </div>

          <h1 className="hero-name" style={{ marginTop: 24, opacity: 0, animation: "fadeUp 0.8s ease 0.2s forwards" }}>
            Denin<br /><span className="hero-accent">Thomas</span>
          </h1>

          <p style={{
            marginTop: 20, fontSize: 14, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--text3)", fontFamily: "'JetBrains Mono', monospace",
            opacity: 0, animation: "fadeUp 0.8s ease 0.3s forwards",
          }}>
            MCA Student &nbsp;·&nbsp; Software Developer &nbsp;·&nbsp; AI Enthusiast
          </p>

          <p style={{
            marginTop: 18, maxWidth: 520, fontSize: 17, lineHeight: 1.85,
            color: "var(--text2)",
            opacity: 0, animation: "fadeUp 0.8s ease 0.4s forwards",
          }}>
            Building intelligent systems at the intersection of software engineering and artificial intelligence. Based in Kerala, India.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 36, opacity: 0, animation: "fadeUp 0.8s ease 0.5s forwards" }}>
            <a href="https://github.com/denin-thomas" target="_blank" className="btn primary">↗ GitHub</a>
            <a href="https://linkedin.com/in/denin-thomas" target="_blank" className="btn">LinkedIn</a>
            <button onClick={copy} className="btn">{copied ? "✓ Copied!" : "Copy Email"}</button>
          </div>
        </div>
      </section>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 40px" }}>

        {/* About */}
        <section id="about" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <FadeIn>
            <div className="section-label">01 — About</div>
            <h2 className="section-title">About Me</h2>
            <div className="divider" />
            <p style={{ fontSize: 17, lineHeight: 1.9, color: "var(--text2)", maxWidth: 680 }}>
              Enthusiastic Master's student in Computer Applications with a strong foundation in software development.
              Passionate about Artificial Intelligence, Deep Learning, and NLP. Experienced in web and mobile
              application development with hands-on industry experience as a Software Developer Intern.
            </p>
          </FadeIn>

          {/* Skills */}
          <FadeIn delay={80} style={{ marginTop: 52 }}>
            <div style={{
              background: "var(--surface)", border: "1.5px solid var(--border)",
              borderRadius: 16, padding: "28px 32px",
            }}>
              <h3 className="mono" style={{ fontSize: 11, color: "var(--indigo)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: 24 }}>
                Technical Stack
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                {Object.entries(skills).map(([cat, items]) => (
                  <div key={cat} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <span className="mono" style={{
                      fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em",
                      textTransform: "uppercase", minWidth: 88, paddingTop: 6,
                    }}>{cat}</span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {items.map(s => <span key={s} className="skill-chip">{s}</span>)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Experience */}
        <section id="experience" style={{ paddingTop: 40, paddingBottom: 80 }}>
          <FadeIn>
            <div className="section-label">02 — Experience</div>
            <h2 className="section-title">Experience</h2>
            <div className="divider" />
          </FadeIn>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {experience.map((exp, i) => (
              <FadeIn key={exp.role} delay={i * 100}>
                <div className="exp-card" style={{ ["--accent" as string]: exp.color }}>
                  <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: exp.color, borderRadius: "2px 0 0 2px" }} />
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 8 }}>
                    <div>
                      <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text)" }}>{exp.role}</h3>
                      <p className="mono" style={{ fontSize: 11, color: exp.color, letterSpacing: "0.06em", marginTop: 4 }}>{exp.company}</p>
                    </div>
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginTop: 18 }}>
                    {exp.points.map((p, j) => (
                      <li key={j} style={{ display: "flex", gap: 12, fontSize: 15, color: "var(--text2)", lineHeight: 1.65 }}>
                        <span style={{ flexShrink: 0, color: exp.color, fontSize: 16, lineHeight: 1.65 }}>→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" style={{ paddingTop: 40, paddingBottom: 80 }}>
          <FadeIn>
            <div className="section-label">03 — Work</div>
            <h2 className="section-title">Projects</h2>
            <div className="divider" />
          </FadeIn>
          <div className="grid2">
            {projects.map((p, i) => (
              <FadeIn key={p.title} delay={i * 80}>
                <div className="card" style={{ height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
                    <span style={{ fontSize: 32 }}>{p.icon}</span>
                    <span className="mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em" }}>0{i + 1}</span>
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 600, color: "var(--text)", marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.75, marginBottom: 18 }}>{p.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                    {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Achievements + Certs */}
        <section style={{ paddingTop: 40, paddingBottom: 80 }}>
          <div className="grid2" style={{ alignItems: "start" }}>
            <FadeIn>
              <div className="section-label">04 — Wins</div>
              <h2 className="section-title">Achievements</h2>
              <div className="divider" />
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {achievements.map((a, i) => (
                  <div key={i} className="ach-item">
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{a.icon}</span>
                    <p style={{ fontSize: 15, color: "var(--text2)", lineHeight: 1.6 }}>{a.text}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div className="section-label">05 — Learning</div>
              <h2 className="section-title">Certifications</h2>
              <div className="divider" />
              <div style={{ background: "var(--surface)", border: "1.5px solid var(--border)", borderRadius: 14, overflow: "hidden" }}>
                {certs.map((c, i) => (
                  <div key={i} className="cert-item" style={{ borderBottom: i < certs.length - 1 ? "1px solid var(--border)" : "none" }}>
                    <span style={{ color: "var(--indigo)", fontSize: 14, flexShrink: 0, paddingTop: 2 }}>◆</span>
                    <p style={{ fontSize: 14, color: "var(--text2)", lineHeight: 1.6 }}>{c}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" style={{ paddingTop: 40, paddingBottom: 100 }}>
          <FadeIn>
            <div className="section-label">06 — Say hello</div>
            <h2 className="section-title">Contact</h2>
            <div className="divider" />
            <div style={{
              background: "var(--surface)", border: "1.5px solid var(--border)",
              borderRadius: 20, padding: "40px",
            }}>
              <p style={{ fontSize: 18, color: "var(--text2)", lineHeight: 1.8, marginBottom: 32, maxWidth: 480 }}>
                Open to internships, projects, and collaborations. Let's build something meaningful together.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  { label: "Email", content: <button onClick={copy} className="btn primary">{copied ? "✓ Copied!" : "deninthomas1@gmail.com"}</button> },
                  { label: "Phone", content: <span className="mono" style={{ fontSize: 14, color: "var(--text)", background: "var(--bg2)", padding: "8px 14px", borderRadius: 8, border: "1.5px solid var(--border)" }}>+91 8606664019</span> },
                  {
                    label: "Links", content: (
                      <div style={{ display: "flex", gap: 10 }}>
                        <a href="https://github.com/denin-thomas" target="_blank" className="btn">GitHub ↗</a>
                        <a href="https://linkedin.com/in/denin-thomas" target="_blank" className="btn">LinkedIn ↗</a>
                      </div>
                    )
                  },
                ].map(({ label, content }) => (
                  <div key={label} style={{ display: "flex", gap: 20, alignItems: "center", flexWrap: "wrap" }}>
                    <span className="mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.1em", textTransform: "uppercase", width: 52, flexShrink: 0 }}>{label}</span>
                    {content}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>

      </div>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid var(--border)", padding: "24px 48px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        background: "var(--surface)",
      }}>
        <span className="mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.12em" }}>DENIN THOMAS © 2025</span>
        <span className="mono" style={{ fontSize: 10, color: "var(--text3)", letterSpacing: "0.08em" }}>KERALA, INDIA</span>
      </footer>
    </div>
  );
}