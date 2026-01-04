import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../App.css'

// Màu chủ đạo Tết: Đỏ vàng truyền thống
const BG = 'bg-red-950' // Nền đỏ sẫm sang trọng
const ACCENT = 'text-yellow-400' // Vàng gold accent
const PRIMARY = 'bg-red-600 hover:bg-red-700' // Button đỏ Tết
const CARD = 'bg-white/5 border border-yellow-600/20 backdrop-blur'

export default function Portfolio() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const yHero = useTransform(scrollYProgress, [0, 1], [0, -100])
    const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    // Pro5 photos – untouched
    const images = ['/img/rf1.jpg','/img/aaa.png','/img/ss.jpg','/img/a.jpg','/img/image1.png','/img/image.png'].filter(Boolean)

    const [menuOpen, setMenuOpen] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (v) => console.log('Scroll:', v))
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <main className={`${BG} text-white min-h-screen font-sans overflow-hidden relative`}>
            {/* Hiệu ứng hoa mai rơi nhẹ & particle pháo hoa vàng */}
            <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
                {/* Hoa mai rơi */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-6 bg-yellow-400/60 rounded-full blur-sm"
                        initial={{ y: -100, x: Math.random() * window.innerWidth }}
                        animate={{ 
                            y: window.innerHeight + 100,
                            x: Math.random() * window.innerWidth,
                            rotate: 360
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "linear"
                        }}
                    />
                ))}
                {/* Particle vàng lấp lánh như pháo hoa */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={`spark-${i}`}
                        className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0],
                            scale: [0, 1.5, 0],
                            y: -200
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                        style={{ left: `${Math.random() * 100}%`, top: '100%' }}
                    />
                ))}
            </div>

            {/* Banner chào Tết Ất Tỵ 2026 */}
            <div className="fixed top-0 left-0 right-0 z-40 text-center py-2 bg-gradient-to-b from-red-800 to-transparent">
                <motion.p className="text-yellow-300 font-bold text-lg tracking-wider"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}>
                    🌸 Chúc Mừng Năm Mới 2026 - Xuân Ất Tỵ An Khang Thịnh Vượng 🌸
                </motion.p>
            </div>

            {/* Header */}
            <header className={`fixed top-12 left-0 w-full z-50 ${BG} border-b border-yellow-600/30`}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <motion.a href="#home" className="text-yellow-400 text-2xl font-semibold tracking-tight"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        VietTruong
                    </motion.a>

                    <motion.button className="lg:hidden flex flex-col justify-between w-8 h-6"
                        onClick={() => setMenuOpen(!menuOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <span className={`bg-yellow-400 w-8 h-[3px] rounded transition ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`bg-yellow-400 w-8 h-[3px] rounded transition ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-yellow-400 w-8 h-[3px] rounded transition ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </motion.button>

                    <motion.nav className={`fixed inset-0 ${BG} transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:bg-transparent top-12`}>
                        <motion.button className="absolute top-4 right-5 text-3xl lg:hidden" onClick={() => setMenuOpen(false)}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>×</motion.button>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-8 lg:p-0 lg:items-center">
                            {[{ t: 'Home', l: '#home' }, { t: 'About', l: '#about' }, { t: 'Skills', l: '#skills' },
                              { t: 'Projects', l: '#projects' }, { t: 'Gallery', l: '#gallery' }, { t: 'Contact', l: '#contact' }].map((m, i) => (
                                <motion.li key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <a href={m.l} onClick={() => setMenuOpen(false)} className={`text-lg ${ACCENT} hover:text-white/90`}>
                                        <span className="text-yellow-500/70 mr-1">0{i + 1}.</span>{m.t}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
            </header>

            <div className="h-28" /> {/* Khoảng trống cho banner + header */}

            {/* Hero */}
            <section id="home" ref={heroRef} className="relative overflow-hidden">
                <motion.div aria-hidden style={{ scale: scaleHero }}
                    className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-red-600/20 blur-[120px]" />

                <div className="container mx-auto px-4 pt-10 pb-20 lg:pt-20 lg:pb-28">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <p className={`${ACCENT}/80 text-sm tracking-widest uppercase`}>QC Engineer | Manual & Automation Tester</p>
                            <h1 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight">
                                Hi, I’m <span className={ACCENT}>Nguyễn Viết Trường</span>
                            </h1>
                            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed">
                                Final-year IT student aiming to become a professional <strong>QC Engineer</strong>.<br />
                                Strong in both <strong>manual testing</strong> (test design, exploratory, bug reporting) and <strong>automation</strong> with Playwright + TypeScript (POM, CI/CD).<br />
                                Ready to deliver high-quality products and continuously improve testing processes.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <motion.a href="#projects" className={`px-6 py-3.5 ${PRIMARY} text-white rounded-2xl font-semibold`}
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>View Projects</motion.a>
                                <motion.a href="#contact" className="px-6 py-3.5 border border-yellow-500/40 rounded-2xl hover:border-yellow-400 transition text-white"
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Contact Me</motion.a>
                                <motion.a href="/CV_NguyenVietTruong_QA_2025.pdf" download
                                    className="px-6 py-3.5 border border-yellow-500/40 rounded-2xl hover:border-yellow-400 transition flex items-center gap-2 text-white"
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download CV
                                </motion.a>
                            </div>
                            <motion.div className="mt-6 flex flex-wrap gap-4 text-white/60 text-sm">
                                <span>Ho Chi Minh City / Binh Duong</span>
                                <span>Expected Graduation 2026</span>
                                <span>Available Full-time Now</span>
                            </motion.div>
                        </motion.div>

                        {/* Profile Photo – full effects */}
                        <motion.div style={{ y: yHero, scale: scaleHero, opacity: opacityHero }}
                            className="lg:justify-self-end relative"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <div className={`relative w-full max-w-md aspect-[4/5] rounded-3xl ${CARD} p-2 overflow-hidden group`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/10 to-transparent z-10" />
                                <motion.img src={images[1]} alt="Nguyễn Viết Trường" className="w-full h-full object-cover rounded-2xl"
                                    whileHover={{ scale: 1.05 }} onLoad={() => setImageLoaded(true)}
                                    initial={{ opacity: 0 }} animate={{ opacity: imageLoaded ? 1 : 0 }} />
                                <motion.div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                <motion.div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20"
                                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                                    <span className="text-xs text-white/70">#profile</span>
                                    <motion.span className={`${ACCENT} text-xs`}
                                        animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
                                        scroll
                                    </motion.span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About */}
            <section id="about" className="container mx-auto px-4 py-12 lg:py-20 border-t border-yellow-600/20">
                <motion.h2 className="text-3xl font-bold mb-6 text-yellow-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    About Me
                </motion.h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div className="lg:col-span-2 space-y-5 text-white/80 text-lg leading-relaxed">
                        <p>Passionate <strong>QC Engineer</strong> with hands-on experience in both manual and automation testing from real projects (IoT platform & HRM system).</p>
                        <p>Excel at requirement analysis, test case design, exploratory testing, API validation, and building maintainable automation frameworks with Playwright + TypeScript.</p>
                        <p>Goal: Deliver reliable, high-quality software while continuously improving testing efficiency.</p>
                    </motion.div>
                    <motion.div className={`space-y-3 rounded-2xl p-5 ${CARD}`} whileHover={{ y: -5 }}>
                        <h3 className="font-semibold text-xl text-yellow-400">Quick Facts</h3>
                        <ul className="grid gap-3 text-white/70">
                            <li>• Final-year IT Student – Thu Dau Mot University</li>
                            <li>• Strong Manual + Growing Automation skills</li>
                            <li>• Available full-time immediately</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Skills */}
            <section id="skills" className="container mx-auto px-4 py-12 lg:py-20 border-t border-yellow-600/20">
                <motion.div className="flex items-center justify-between mb-6">
                    <h2 className="text-3xl font-bold text-yellow-400">Skills</h2>
                    <span className="text-sm text-white/70">Manual First • Automation Smart</span>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <SkillCard title="Methodologies" items={[
                        'STLC • SDLC',
                        'Agile/Scrum • Waterfall',
                        'Risk-Based Testing'
                    ]} />

                    <SkillCard title="Testing Tools & Management" items={[
                        'Postman • TestRail',
                        'Jira • GitLab • Confluence'
                    ]} />

                    <SkillCard title="Testing Types" items={[
                        'Functional • Regression • Integration',
                        'System • UAT • Smoke • Usability',
                        'Basic Performance (K6) • Security (OWASP, XSS/CSRF)'
                    ]} />

                    <SkillCard title="Test Design & Documentation" items={[
                        'Test Plan • Test Case • Test Scenario',
                        'Test Summary Report • User Guide'
                    ]} />

                    <SkillCard title="API & Database Testing" items={[
                        'REST API Testing with Postman',
                        'SQL Queries (JOIN, aggregate)',
                        'End-to-end data validation'
                    ]} />

                    <SkillCard title="Automation & CI/CD" items={[
                        'Playwright + TypeScript (Strong)',
                        'Page Object Model • Data-Driven',
                        'GitLab CI/CD • Basic Jenkins',
                        'Basic Cypress & K6'
                    ]} />
                </div>
            </section>

            {/* Projects */}
            <section id="projects" className="container mx-auto px-4 py-12 lg:py-20 border-t border-yellow-600/20">
                <motion.h2 className="text-3xl font-bold mb-8 text-yellow-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    Projects & Experience
                </motion.h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.article className={`rounded-2xl p-6 ${CARD}`} whileHover={{ y: -8 }}>
                        <h3 className="text-2xl font-bold text-yellow-400">Oryza Metadata Cloud</h3>
                        <p className="text-white/60 mt-1">IoT Real-time Monitoring Platform</p>
                        <ul className="mt-5 space-y-3 text-white/80">
                            <li>• Designed manual test cases for Web & API modules</li>
                            <li>• API testing with Postman → found functional defects</li>
                            <li>• Developed Playwright automation scripts for regression</li>
                            <li>• Integrated automated tests into GitLab CI/CD</li>
                        </ul>
                    </motion.article>

                    <motion.article className={`rounded-2xl p-6 ${CARD}`} whileHover={{ y: -8 }}>
                        <h3 className="text-2xl font-bold text-yellow-400">XCorp HRM App</h3>
                        <p className="text-white/60 mt-1">Internal Workflow Management</p>
                        <ul className="mt-5 space-y-3 text-white/80">
                            <li>• Smoke testing after each deployment</li>
                            <li>• Created test cases & logged bugs in Jira</li>
                            <li>• Manual testing for Leave, OKR, Task flows</li>
                            <li>• Built Playwright + POM automation for core modules</li>
                        </ul>
                    </motion.article>
                </div>
            </section>

            {/* Gallery */}
            <section id="gallery" className="container mx-auto px-4 py-12 lg:py-20 border-t border-yellow-600/20">
                <motion.h2 className="text-3xl font-bold mb-6 text-yellow-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Gallery</motion.h2>
                <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ delay: i * 0.1 }} className={`group overflow-hidden rounded-2xl aspect-[4/5] ${CARD}`}
                            whileHover={{ y: -8, scale: 1.02 }}>
                            <motion.img src={src} alt={`Gallery ${i+1}`} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-red-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Contact */}
            <section id="contact" className="container mx-auto px-4 py-12 lg:py-20 border-t border-yellow-600/20">
                <motion.h2 className="text-3xl font-bold mb-6 text-yellow-400" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Get In Touch</motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-5 text-white/70 text-lg">
                        <p>Open to <strong>QC Engineer / Tester</strong> opportunities in HCMC & Binh Duong.</p>
                        <ul className="space-y-3">
                            <li>Email: <a href="mailto:nguyenviettruong1808@gmail.com" className="text-yellow-400 hover:underline">nguyenviettruong1808@gmail.com</a></li>
                            <li>Phone: <a href="tel:+84399890382" className="text-yellow-400 hover:underline">+84 399 890 382</a></li>
                            <li>Portfolio: <a href="https://portfolio-nguyenviettruong.onrender.com" className="text-yellow-400 hover:underline">portfolio-nguyenviettruong.onrender.com</a></li>
                        </ul>
                    </div>
                    <motion.form className={`rounded-2xl p-5 ${CARD} grid gap-4`}>
                        <input className="w-full rounded-xl bg-transparent border border-yellow-600/20 px-4 py-3 focus:border-yellow-400 outline-none transition text-white placeholder-white/50" placeholder="Your name" />
                        <input type="email" className="w-full rounded-xl bg-transparent border border-yellow-600/20 px-4 py-3 focus:border-yellow-400 outline-none transition text-white placeholder-white/50" placeholder="Your email" />
                        <textarea rows={4} className="w-full rounded-xl bg-transparent border border-yellow-600/20 px-4 py-3 focus:border-yellow-400 outline-none transition resize-none text-white placeholder-white/50" placeholder="Message..." />
                        <motion.button type="button" className={`w-full py-3 ${PRIMARY} text-white rounded-xl font-semibold hover:opacity-90`}
                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Send Message</motion.button>
                    </motion.form>
                </div>
            </section>

            {/* Footer */}
            <motion.footer className="border-t border-yellow-600/20 py-8 text-center text-white/60 text-sm">
                © 2026 Nguyễn Viết Trường — QC Engineer. Chúc mừng năm mới Ất Tỵ rực rỡ! 🌸🐍 Built with Tailwind + Framer Motion
            </motion.footer>
        </main>
    )
}

function SkillCard({ title, items }) {
    return (
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`rounded-2xl p-5 ${CARD} hover:bg-white/10 transition-colors duration-300`} whileHover={{ y: -5, scale: 1.02 }}>
            <h3 className="font-semibold text-xl mb-3 text-yellow-400">{title}</h3>
            <ul className="space-y-2 text-white/80">
                {items.map((t, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                        • {t}
                    </motion.li>
                ))}
            </ul>
        </motion.article>
    )
}