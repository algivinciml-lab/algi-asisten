import { useState } from "react";

/* ================= KONFIGURASI (ganti sesuai kebutuhan) ================= */
const LINKS = {
  inviteMain: "https://discord.com/oauth2/authorize?client_id=1536240480181031054", // link invite bot
  inviteAlt1: "https://discord.com/oauth2/authorize?client_id=1536240480181031054", // boleh diganti link invite lain
  inviteAlt2: "https://discord.com/oauth2/authorize?client_id=1536240480181031054", // boleh diganti link invite lain
  server: "https://discord.gg/zCH2WXz4h", // link server Discord (tombol JOIN NOW)
  whatsapp: "https://wa.me/6281252340475",
  instagram: "https://instagram.com/zfalgiz_?vrfl=MTJ0aGNkcWRicWR2MQ%3D%3D",
  discord: "https://discord.gg/zCH2WXz4h",
};
// Kalau punya file logo, taruh di folder /public lalu isi mis. "/logo.png"
const LOGO_SRC = "/logo.png";

/* ================= IKON (inline SVG, tanpa library) ================= */
const DiscordIcon = ({ size = 22 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.317 4.37a19.79 19.79 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .078-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .079.009c.12.1.246.198.373.293a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.419-2.157 2.419z" />
  </svg>
);

const Svg = ({ children, size = 26 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const SparkIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z" fill="currentColor" />
    <path d="M19 16l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2z" fill="currentColor" stroke="none" />
  </Svg>
);
const ShieldIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
  </Svg>
);
const RocketIcon = (p) => (
  <Svg {...p}>
    <path d="M5 15c-1 1-1.5 4-1.5 4s3-.5 4-1.5M14 4c3-1 6-1 6-1s0 3-1 6l-6 6-4-4 5-7z" fill="currentColor" fillOpacity=".25" />
    <circle cx="15" cy="9" r="1.4" />
    <path d="M9 12l-3-.5 2-3 3.5-.5M12 15l.5 3 3-2 .5-3.5" />
  </Svg>
);
const UsersIcon = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3" fill="currentColor" fillOpacity=".3" />
    <circle cx="17" cy="9" r="2.4" fill="currentColor" fillOpacity=".3" />
    <path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M15.5 14.2c3 0 5.5 1.6 5.5 4.3" />
  </Svg>
);
const HashIcon = (p) => (
  <Svg {...p}>
    <path d="M5 9h15M4 15h15M10 4L8 20M16 4l-2 16" strokeWidth="2.4" />
  </Svg>
);
const CalendarIcon = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
    <path d="M3.5 10h17M8 3v4M16 3v4" />
    <path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01" strokeWidth="2.6" />
  </Svg>
);
const InfinityIcon = (p) => (
  <Svg {...p}>
    <path
      d="M12 12c-1.5-2.5-3-4-5-4a4 4 0 100 8c2 0 3.5-1.500 5-4zm0 0c1.500 2.500 3 4 5 4a4 4 0 100-8c-2 0-3.500 1.500-5 4z"
      strokeWidth="2.4"
    />
  </Svg>
);
const ChatIcon = (p) => (
  <Svg {...p}>
    <path d="M4 5h16v11H9l-5 4V5z" fill="currentColor" fillOpacity=".25" />
    <path d="M8 9h8M8 12h5" />
  </Svg>
);
const LockIcon = (p) => (
  <Svg {...p}>
    <rect x="5" y="11" width="14" height="9" rx="2" fill="currentColor" fillOpacity=".25" />
    <path d="M8 11V8a4 4 0 018 0v3" />
  </Svg>
);
const CheckShieldIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l8 3v6c0 4.500-3.200 8-8 9-4.800-1-8-4.500-8-9V6l8-3z" fill="currentColor" fillOpacity=".2" />
    <path d="M8.500 12l2.500 2.500 4.500-5" strokeWidth="2.4" />
  </Svg>
);
const WarnIcon = (p) => (
  <Svg {...p}>
    <path d="M12 3l10 18H2L12 3z" />
    <path d="M12 10v5M12 18h.01" strokeWidth="2.4" />
  </Svg>
);
const UserIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="8" r="4" fill="currentColor" />
    <path d="M4 21c0-4.500 3.500-7 8-7s8 2.500 8 7z" fill="currentColor" />
  </Svg>
);
const CrownIcon = (p) => (
  <Svg {...p}>
    <path d="M3 8l4.500 4L12 5l4.500 7L21 8l-2 11H5L3 8z" fill="currentColor" fillOpacity=".85" />
  </Svg>
);
const WhatsAppIcon = (p) => (
  <Svg {...p}>
    <path d="M4 20l1.200-4A8 8 0 1112 20a8 8 0 01-3.800-1L4 20z" />
    <path d="M9 9c0 3 3 6 6 6l1-1.500-2-1-1 .8c-1-.4-1.800-1.200-2.200-2.200l.8-1-1-2L9 9z" fill="currentColor" stroke="none" />
  </Svg>
);
const InstagramIcon = (p) => (
  <Svg {...p}>
    <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
  </Svg>
);

/* ================= LOGO ================= */
function Logo({ size = 120 }) {
  if (LOGO_SRC) {
    return <img src={LOGO_SRC} alt="Logo Algi Asisten" width={size} height={size} className="logo-img" />;
  }
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-label="Logo Algi Asisten" role="img">
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6d4aff" />
          <stop offset="1" stopColor="#e0a53a" />
        </linearGradient>
      </defs>
      <path d="M50 12L18 84h14l6-14h24l6 14h14L50 12zm0 24l9 21H41l9-21z" fill="none" stroke="#12122b" strokeWidth="6" strokeLinejoin="round" />
      <path d="M40 66c6-2 8-8 12-14s8-8 12-8" stroke="url(#lg)" strokeWidth="3.500" fill="none" strokeLinecap="round" />
      <circle cx="64" cy="44" r="3" fill="#e0a53a" />
      <circle cx="52" cy="52" r="3" fill="#6d4aff" />
      <circle cx="42" cy="66" r="3" fill="#6d4aff" />
    </svg>
  );
}

/* ================= DEKORASI SIRKUIT ================= */
function Circuit({ className }) {
  return (
    <svg className={`circuit ${className}`} viewBox="0 0 400 400" fill="none" aria-hidden="true">
      <path d="M0 60h90l30 30h60l40 40" stroke="#f59e0b" strokeWidth="2" />
      <path d="M0 20h120l30 30h90l30 30" stroke="#3b82f6" strokeWidth="1.600" />
      <path d="M20 120v90l30 30v80" stroke="#3b82f6" strokeWidth="1.600" />
      <path d="M60 100v140l40 40h60" stroke="#3b82f6" strokeWidth="1.600" />
      <path d="M100 140h90l40 40" stroke="#6366f1" strokeWidth="1.600" />
      <g fill="#3b82f6">
        <circle cx="270" cy="80" r="4" />
        <circle cx="240" cy="130" r="4" />
        <circle cx="50" cy="240" r="4" />
        <circle cx="20" cy="210" r="4" />
        <circle cx="160" cy="280" r="4" />
        <circle cx="230" cy="180" r="4" />
      </g>
      <circle cx="180" cy="130" r="4" fill="#f59e0b" />
    </svg>
  );
}

/* ================= DATA ================= */
const FEATURES = [
  { icon: SparkIcon, title: "AI POWERED", desc: "Ditenagai oleh AI canggih" },
  { icon: ShieldIcon, title: "AMAN & TERPERCAYA", desc: "Keamanan data terjamin" },
  { icon: RocketIcon, title: "RESPONS CEPAT", desc: "Respon instan & akurat" },
  { icon: UsersIcon, title: "MUDAH DIGUNAKAN", desc: "Simpel dan praktis" },
];

const GUIDES = [
  {
    color: "green",
    icon: HashIcon,
    title: "GUNAKAN #",
    sub: "Untuk berbicara dengan Bot",
    desc: "Awali setiap perintah atau pertanyaan kamu dengan tanda pagar (#) agar bot dapat merespon.",
    tag: "Contoh: #halo, #bantu, #info",
  },
  {
    color: "blue",
    icon: ShieldIcon,
    title: "VERIFIKASI IDENTITAS",
    sub: "Password user = Algi user",
    desc: "Lakukan verifikasi identitas untuk menggunakan bot dengan mengirim password melalui DM bot.",
    tag: "Password: Algi user",
  },
  {
    color: "purple",
    icon: CalendarIcon,
    title: "JADWAL FITUR",
    sub: "Fitur penjadwalan pada bot",
    desc: "Gunakan fitur jadwal untuk mengatur pengingat atau penjadwalan otomatis sesuai kebutuhanmu.",
    tag: "Contoh: #jadwal 20:00 belajar",
  },
  {
    color: "orange",
    icon: InfinityIcon,
    title: "BATASAN TOKEN",
    sub: "Sistem penggunaan token",
    desc: "User biasa memiliki 10 token chat per hari, sementara owner menikmati akses tanpa batas.",
    tag: "User: 10 chat/day  Owner: Unlimited",
  },
];

const STEPS = [
  { icon: ChatIcon, color: "purple", title: "1. Kirim DM ke Bot", desc: "Buka DM dengan Algi Asisten dan kirim password verifikasi." },
  { icon: LockIcon, color: "blue", title: "2. Masukkan Password", desc: "Ketik password: Algi user untuk verifikasi identitas." },
  { icon: CheckShieldIcon, color: "green", title: "3. Verifikasi Berhasil", desc: "Jika berhasil, bot akan memberi konfirmasi verifikasi berhasil." },
  { icon: RocketIcon, color: "red", title: "4. Siap Digunakan", desc: "Kamu sekarang bisa menggunakan semua fitur sesuai hak aksesmu." },
];

const NOTES = [
  "Jangan bagikan password kamu ke siapapun.",
  "Penyalahgunaan dapat menyebabkan akses dibatasi.",
  "Hubungi owner jika mengalami masalah verifikasi.",
];

/* ================= KOMPONEN ================= */
function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="nav-wrap">
      <nav className="nav">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-logo">
            <Logo size={38} />
          </span>
          <span>ALGI ASISTEN</span>
        </a>

        <ul className={`nav-links ${open ? "open" : ""}`}>
          <li><a href="#home" onClick={close}>HOME</a></li>
          <li><a href="#fitur" onClick={close}>FITUR</a></li>
          <li><a href="#invite" onClick={close}>INVITE</a></li>
          <li><a href="#contact" onClick={close}>CONTACT</a></li>
          <li className="only-mobile">
            <a className="btn-join" href={LINKS.server} target="_blank" rel="noopener noreferrer" onClick={close}>
              <DiscordIcon size={20} /> JOIN NOW
            </a>
          </li>
        </ul>

        <a className="btn-join hide-mobile" href={LINKS.server} target="_blank" rel="noopener noreferrer">
          <DiscordIcon size={20} /> JOIN NOW
        </a>

        <button
          className="burger"
          aria-label="Buka menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <Circuit className="circuit-left" />
      <Circuit className="circuit-right" />

      <div className="logo-ring">
        <div className="logo-circle">
          {LOGO_SRC ? (
            <img className="hero-logo-img" src={LOGO_SRC} alt="Logo Algi Asisten" />
          ) : (
            <>
              <Logo size={150} />
              <strong className="logo-text">ALGI ASISTEN</strong>
            </>
          )}
        </div>
      </div>

      <p className="hero-desc">
        <span className="hl">Algi Asisten</span> adalah bot Discord yang di lengkapi oleh mesin AI, di rancang untuk
        memudahkan segala urusan user di dalam server.
      </p>

      <div className="divider"><SparkIcon size={16} /></div>

      <h2 className="invite-title" id="invite">INVITE ALGI ASISTEN TO YOUR SERVER</h2>
      <div className="invite-buttons">
        <a className="btn-invite purple" href={LINKS.inviteMain} target="_blank" rel="noopener noreferrer"><DiscordIcon /> INVITE</a>
        <a className="btn-invite blue" href={LINKS.inviteAlt1} target="_blank" rel="noopener noreferrer"><DiscordIcon /> INVITE</a>
        <a className="btn-invite red" href={LINKS.inviteAlt2} target="_blank" rel="noopener noreferrer"><DiscordIcon /> INVITE</a>
      </div>

      <ul className="feature-bar">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <li key={title}>
            <span className="feature-icon"><Icon size={24} /></span>
            <span>
              <strong>{title}</strong>
              <small>{desc}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Guide() {
  return (
    <section className="guide" id="fitur">
      <p className="eyebrow">PANDUAN FITUR</p>
      <h2 className="guide-title">
        <i className="spark">✦</i>
        <span className="g">HOW </span><span className="b">TO USE </span><span className="r">BOT</span>
        <i className="spark">✦</i>
      </h2>
      <p className="guide-sub">
        Semua yang kamu perlu tahu untuk menggunakan Algi Asisten dengan mudah dan maksimal di Discord.
      </p>

      <div className="cards">
        {GUIDES.map(({ icon: Icon, color, title, sub, desc, tag }) => (
          <article key={title} className={`card ${color}`}>
            <span className="card-icon"><Icon size={32} /></span>
            <h3>{title}</h3>
            <p className="card-sub">{sub}</p>
            <p className="card-desc">{desc}</p>
            <span className="card-tag">{tag}</span>
          </article>
        ))}
      </div>

      <div className="panel steps-panel">
        <h3 className="panel-title blue-text">CARA VERIFIKASI</h3>
        <div className="steps">
          {STEPS.map(({ icon: Icon, color, title, desc }, i) => (
            <div className="step-wrap" key={title}>
              <div className="step">
                <span className={`step-icon ${color}`}><Icon size={26} /></span>
                <div>
                  <strong>{title}</strong>
                  <small>{desc}</small>
                </div>
              </div>
              {i < STEPS.length - 1 && <span className="arrow">→</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="panel info-panel">
        <div className="info-left">
          <span className="warn"><WarnIcon size={44} /></span>
          <div>
            <h3 className="orange-text">INFORMASI PENTING</h3>
            <ul>
              {NOTES.map((n) => <li key={n}>{n}</li>)}
            </ul>
          </div>
        </div>
        <div className="info-right">
          <h4>HAK AKSES</h4>
          <div className="access-grid">
            <div className="access">
              <span className="access-icon blue-text"><UserIcon size={40} /></span>
              <div>
                <strong className="blue-text">USER BIASA</strong>
                <b>10 Token Chat / Hari</b>
                <small>Akses fitur standar</small>
              </div>
            </div>
            <div className="access">
              <span className="access-icon purple-text"><CrownIcon size={40} /></span>
              <div>
                <strong className="purple-text">OWNER</strong>
                <b>Unlimited Token</b>
                <small>Akses semua fitur</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>TERHUBUNG DENGAN KAMI</p>
      <div className="socials">
        <a className="social wa" href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><WhatsAppIcon size={30} /></a>
        <a className="social ig" href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><InstagramIcon size={30} /></a>
        <a className="social dc" href={LINKS.discord} target="_blank" rel="noopener noreferrer" aria-label="Discord"><DiscordIcon size={30} /></a>
      </div>
      <small>© {new Date().getFullYear()} Algi Asisten. All rights reserved.</small>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Guide />
      </main>
      <Footer />
    </>
  );
}