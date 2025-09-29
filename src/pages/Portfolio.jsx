import { useState, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../App.css';

// ===== THEME TOKENS (Tailwind) =====
const BG = 'bg-[#0b0f17]'
const CARD = 'bg-white/5 border border-white/10 backdrop-blur'
const TEXT_MUTED = 'text-white/70'

export default function Portfolio() {
  // Parallax for hero/profile
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const yHero = useTransform(scrollYProgress, [0, 1], [0, -80])
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.08])

  // Replace with your image URLs (1–3 images)
  const images = [
    '../../public/img/rf1.jpg',
    '../../public/img/image.png',
    '../../public/img/ss.jpg',
    '../../public/img/DienKinh -- 2024 - TDMU.jpg'
  ].filter(Boolean)

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className={`${BG} text-white min-h-screen font-sans`}> 
      {/* ===== Header ===== */}
      <header className={`fixed top-0 left-0 w-full z-50 ${BG} border-b border-white/10`}> 
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="text-primary text-2xl font-semibold tracking-tight">VietTruong</a>

          <button
            className="lg:hidden flex flex-col justify-between items-center w-8 h-6"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
          >
            <span className={`bg-primary w-8 h-[3px] rounded transition ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`bg-primary w-8 h-[3px] rounded transition ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`bg-primary w-8 h-[3px] rounded transition ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
          </button>

          <nav className={`fixed inset-0 ${BG} text-white transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:bg-transparent`}>
            <button className="absolute top-4 right-5 text-3xl lg:hidden" onClick={() => setMenuOpen(false)} aria-label="Close">×</button>
            <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-8 lg:p-0 lg:items-center">
              {[{t:'Home',l:'#home'},{t:'About',l:'#about'},{t:'Skills',l:'#skills'},{t:'Gallery',l:'#gallery'},{t:'Contact',l:'#contact'}].map((m,i)=>(
                <li key={i}>
                  <a href={m.l} onClick={() => setMenuOpen(false)} className="text-lg text-primary hover:text-white/90">
                    <span className="text-primary/70 mr-1">0{i+1}.</span>{m.t}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-16" />

      {/* ===== Hero / Intro ===== */}
      <section id="home" ref={heroRef} className="relative overflow-hidden">
        {/* Glow background */}
        <motion.div
          aria-hidden
          style={{ scale: scaleHero }}
          className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-primary/10 blur-[120px]"
        />

        <div className="container mx-auto px-4 pt-10 pb-20 lg:pt-20 lg:pb-28">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary/80 text-sm tracking-widest uppercase">Software Tester • QA / Automation</p>
              <h1 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight">
                Xin chào, mình là <span className="text-primary">Nguyễn Viết Trường</span>
              </h1>
              <p className="mt-4 text-lg text-white/80 max-w-xl">
                Final-year IT @ TDMU • Thực tập sinh tại Oryza Systems. Tập trung Manual/API Testing, Playwright, k6 và CI/CD (GitLab, Jenkins). Mục tiêu: trở thành QA Automation Engineer.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#about" className="px-5 py-3 rounded-2xl bg-primary text-dark font-semibold hover:opacity-90">Giới thiệu</a>
                <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-primary">Liên hệ</a>
                <a href="/VietTruong_QA_CV.pdf" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-primary">Tải CV</a>
              </div>
              <div className="mt-6 flex items-center gap-4 text-white/60 text-sm">
                <span>📍 Bình Dương / TP.HCM</span>
                <span>🎓 Dự kiến tốt nghiệp 2026</span>
              </div>
            </div>

            {/* Profile image with parallax */}
            <motion.div style={{ y: yHero }} className="lg:justify-self-end">
              <div className={`relative w-full max-w-md aspect-[4/5] rounded-3xl ${CARD} p-2 overflow-hidden`}> 
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
                <img src={images[0]} alt="Profile" className="w-full h-full object-cover rounded-2xl" />
                <motion.div 
                  className="absolute bottom-3 left-3 right-3 flex items-center justify-between"
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                >
                  <span className="text-xs ${TEXT_MUTED}">#profile</span>
                  <span className="text-xs text-white/80">scroll ↕</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div 
            className="lg:col-span-2 space-y-4 text-white/80"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p>
              Mình theo đuổi lộ trình <span className="text-white">QA/Automation</span>, chú trọng risk-based testing, viết Test Plan/Test Case/Test Summary rõ ràng và tích hợp automation trong pipeline để tăng tốc regression.
            </p>
            <p>
              Đã thực chiến tại <span className="text-white">Oryza Metadata Cloud</span>: kiểm thử API (Postman), viết test cases, E2E Playwright cho flows chính, tích hợp CI/CD GitLab; đối soát dữ liệu dashboards.
            </p>
            <p>
              Mình yêu thích quy trình tối giản nhưng hiệu quả: đo lường, phản hồi nhanh, và luôn học hỏi.
            </p>
          </motion.div>
          <motion.div 
            className={`space-y-3 rounded-2xl p-5 ${CARD}`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-semibold text-xl">Thông tin nhanh</h3>
            <ul className="grid grid-cols-1 gap-2 ${TEXT_MUTED}">
              <li>• Trường: TDMU (CNTT)</li>
              <li>• Internship: Oryza Systems</li>
              <li>• Quan tâm: Playwright, k6, Jenkins, GitLab CI</li>
              <li>• Sở trường: Test Case, API Testing, E2E, CI/CD</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ===== Skills ===== */}
      <section id="skills" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Skills</h2>
          <span className="text-sm ${TEXT_MUTED}">ISTQB mindset • Shift-left • Metrics</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <SkillCard 
            title="Testing Fundamentals"
            items={['Functional • Regression • Smoke', 'Test design: BVA, EP, Decision Table', 'Bug report & lifecycle']}
          />
          <SkillCard 
            title="Automation & Tools"
            items={['Playwright (TS/JS/Python)', 'Postman • REST Assured (basic)', 'k6 (load testing)', 'GitLab CI • Jenkins']}
          />
          <SkillCard 
            title="Tech & Data"
            items={['JavaScript/TypeScript', 'SQL (JOIN, aggregate)', 'Git • Docker (cơ bản)', 'Linux CLI • YAML/JSON']}
          />
        </div>
      </section>

      {/* ===== Gallery (1–3 images) with modern scroll reveal ===== */}
      <section id="gallery" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Profile Gallery</h2>
        <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
          {Array.from({ length: Math.max(1, images.length || 3) }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`group overflow-hidden rounded-2xl aspect-[4/5] ${CARD}`}
            >
              {images[i] ? (
                <>
                  <img src={images[i]} alt={`Profile ${i+1}`} className="w-full h-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition" />
                </>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className={`text-sm ${TEXT_MUTED}`}>Drop image {i+1}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Contact ===== */}
      <section id="contact" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div 
            className="space-y-3 ${TEXT_MUTED}"
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <p>Luôn sẵn sàng trao đổi về cơ hội intern/fresher QA/Tester tại TP.HCM/Bình Dương.</p>
            <ul className="space-y-2">
              <li>📧 Email: <a className="text-primary hover:underline" href="mailto:viettruong@example.com">viettruong@example.com</a></li>
              <li>📱 Phone: <a className="text-primary hover:underline" href="tel:+84000000000">+84 000 000 000</a></li>
              <li>💼 LinkedIn/GitHub: cập nhật sau</li>
            </ul>
          </motion.div>

          <motion.form 
            className={`rounded-2xl p-5 ${CARD} grid grid-cols-1 gap-4`}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <div>
              <label className="block text-sm mb-1">Tên</label>
              <input className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-2 outline-none focus:border-primary" placeholder="Tên của bạn" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-2 outline-none focus:border-primary" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Nội dung</label>
              <textarea rows={4} className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-2 outline-none focus:border-primary" placeholder="Mình có thể hỗ trợ gì?" />
            </div>
            <button type="button" className="w-full px-5 py-3 rounded-2xl bg-primary text-dark font-semibold hover:opacity-90">Gửi nhanh</button>
          </motion.form>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} VietTruong — QA/Software Tester. Built with ❤️ & Tailwind.
      </footer>
    </main>
  )
}

// ===== Reusable SkillCard (kept inside same file as requested) =====
function SkillCard({ title, items }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className={`rounded-2xl p-5 ${CARD}`}
    >
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="space-y-2 text-white/80">
        {items.map((t, i) => (
          <li key={i}>• {t}</li>
        ))}
      </ul>
      <div className="mt-4 flex flex-wrap gap-2">
        {items.slice(0, 4).map((t, i) => (
          <span key={i} className="px-2 py-1 rounded-full text-xs border border-white/15 text-white/80">{t.split(' ')[0]}</span>
        ))}
      </div>
    </motion.article>
  )
}
