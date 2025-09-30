import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../App.css';

// ===== THEME TOKENS (Tailwind) =====
const BG = 'bg-[#0b0f17]'
const CARD = 'bg-white/5 border border-white/10 backdrop-blur'
const TEXT_MUTED = 'text-white/70'

export default function Portfolio() {
    // Parallax for hero/profile
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ 
        target: heroRef, 
        offset: ['start start', 'end start'] 
    })
    const yHero = useTransform(scrollYProgress, [0, 1], [0, -100])
    const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    // Replace with your image URLs
    const images = [
        '/img/rf1.jpg',
        '/img/aaa.png',
        '/img/ss.jpg',
        '/img/a.jpg',
        '/img/image1.png',
        '/img/image.png',
    ].filter(Boolean)

    const [menuOpen, setMenuOpen] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    // Debug scroll progress
    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            console.log("Scroll progress:", latest)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <main className={`${BG} text-white min-h-screen font-sans overflow-hidden`}>
            {/* ===== Header ===== */}
            <header className={`fixed top-0 left-0 w-full z-50 ${BG} border-b border-white/10`}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <motion.a 
                        href="#home" 
                        className="text-blue-500 text-2xl font-semibold tracking-tight"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VietTruong
                    </motion.a>

                    <motion.button
                        className="lg:hidden flex flex-col justify-between items-center w-8 h-6"
                        onClick={() => setMenuOpen(!menuOpen)} 
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className={`bg-blue-500 w-8 h-[3px] rounded transition ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`bg-blue-500 w-8 h-[3px] rounded transition ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-blue-500 w-8 h-[3px] rounded transition ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </motion.button>

                    <motion.nav 
                        className={`fixed inset-0 ${BG} text-white transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:bg-transparent`}
                        initial={false}
                        animate={menuOpen ? "open" : "closed"}
                    >
                        <motion.button 
                            className="absolute top-4 right-5 text-3xl lg:hidden" 
                            onClick={() => setMenuOpen(false)} 
                            aria-label="Close"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            ×
                        </motion.button>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-8 lg:p-0 lg:items-center">
                            {[{ t: 'Home', l: '#home' }, { t: 'About', l: '#about' }, { t: 'Skills', l: '#skills' }, { t: 'Gallery', l: '#gallery' }, { t: 'Contact', l: '#contact' }].map((m, i) => (
                                <motion.li 
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <a 
                                        href={m.l} 
                                        onClick={() => setMenuOpen(false)} 
                                        className="text-lg text-blue-500 hover:text-white/90 transition-colors duration-200"
                                    >
                                        <span className="text-blue-400/70 mr-1">0{i + 1}.</span>{m.t}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
            </header>

            {/* Spacer for fixed header */}
            <div className="h-16" />

            {/* ===== Hero / Intro ===== */}
            <section id="home" ref={heroRef} className="relative overflow-hidden">
                {/* Glow background với motion */}
                <motion.div
                    aria-hidden
                    style={{ scale: scaleHero }}
                    className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-blue-500/10 blur-[120px]"
                />

                <div className="container mx-auto px-4 pt-10 pb-20 lg:pt-20 lg:pb-28">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <p className="text-blue-400/80 text-sm tracking-widest uppercase">Software Tester • QA / Automation</p>
                            <h1 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight">
                                Xin chào, mình là <span className="text-blue-500">Nguyễn Viết Trường</span>
                            </h1>
                            <p className="mt-4 text-lg text-white/80 max-w-xl">
                                Final-year IT @ TDMU • Thực tập sinh tại Oryza Systems. Tập trung Manual/API Testing, Playwright, k6 và CI/CD (GitLab, Jenkins). Mục tiêu: trở thành QC Engineer.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-3">
                                <motion.a 
                                    href="#about" 
                                    className="px-5 py-3 rounded-2xl bg-blue-500 text-white font-semibold hover:opacity-90"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Giới thiệu
                                </motion.a>
                                <motion.a 
                                    href="#contact" 
                                    className="px-5 py-3 rounded-2xl border border-white/20 hover:border-blue-500 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Liên hệ
                                </motion.a>
                                <motion.a 
                                    href="/VietTruong_QA_CV.pdf" 
                                    className="px-5 py-3 rounded-2xl border border-white/20 hover:border-blue-500 transition-colors"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Tải CV
                                </motion.a>
                            </div>
                            <motion.div 
                                className="mt-6 flex items-center gap-4 text-white/60 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                            >
                                <span>📍 Bình Dương / TP.HCM</span>
                                <span>🎓 Dự kiến tốt nghiệp 2026</span>
                            </motion.div>
                        </motion.div>

                        {/* Profile image với parallax effect */}
                        <motion.div 
                            style={{ 
                                y: yHero,
                                scale: scaleHero,
                                opacity: opacityHero
                            }} 
                            className="lg:justify-self-end relative"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <div className={`relative w-full max-w-md aspect-[4/5] rounded-3xl ${CARD} p-2 overflow-hidden group`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-10" />
                                <motion.img 
                                    src={images[0]} 
                                    alt="Profile" 
                                    className="w-full h-full object-cover rounded-2xl"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    onLoad={() => setImageLoaded(true)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                                    whileHover={{ opacity: 0.1 }}
                                />
                                <motion.div
                                    className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.2 }}
                                >
                                    <span className="text-xs text-white/70">#profile</span>
                                    <motion.span 
                                        className="text-xs text-white/80"
                                        animate={{ y: [0, -3, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
                                    >
                                        scroll ↕
                                    </motion.span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ===== About ===== */}
            <section id="about" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    About
                </motion.h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div
                        className="lg:col-span-2 space-y-4 text-white/80"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p>
                            Mình theo đuổi lộ trình <span className="text-blue-400">QA/Automation</span>, chú trọng risk-based testing, viết Test Plan/Test Case/Test Summary rõ ràng và tích hợp automation trong pipeline để tăng tốc regression.
                        </p>
                        <p>
                            Đã thực chiến tại <span className="text-blue-400">Oryza Metadata Cloud</span>: kiểm thử API (Postman), viết test cases, E2E Playwright cho flows chính, tích hợp CI/CD GitLab; đối soát dữ liệu dashboards.
                        </p>
                        <p>
                            Mình yêu thích quy trình tối giản nhưng hiệu quả: đo lường, phản hồi nhanh, và luôn học hỏi.
                        </p>
                    </motion.div>
                    <motion.div
                        className={`space-y-3 rounded-2xl p-5 ${CARD}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        whileHover={{ y: -5 }}
                    >
                        <h3 className="font-semibold text-xl">Thông tin nhanh</h3>
                        <ul className="grid grid-cols-1 gap-2 text-white/70">
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
                <motion.div 
                    className="flex items-center justify-between mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <span className="text-sm text-white/70">ISTQB mindset • Shift-left • Metrics</span>
                </motion.div>

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

            {/* ===== Gallery ===== */}
            <section id="gallery" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Profile Gallery
                </motion.h2>
                <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
                    {Array.from({ length: Math.max(1, images.length || 3) }).map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.45, delay: i * 0.1 }}
                            className={`group overflow-hidden rounded-2xl aspect-[4/5] ${CARD}`}
                            whileHover={{ y: -8, scale: 1.02 }}
                        >
                            {images[i] ? (
                                <>
                                    <motion.img 
                                        src={images[i]} 
                                        alt={`Profile ${i + 1}`} 
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                                    <motion.div 
                                        className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        initial={{ y: 10 }}
                                        whileHover={{ y: 0 }}
                                    >
                                        <span className="text-white text-sm font-medium">Image {i + 1}</span>
                                    </motion.div>
                                </>
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <span className="text-sm text-white/70">Drop image {i + 1}</span>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* ===== Contact ===== */}
            <section id="contact" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 
                    className="text-3xl font-bold mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Contact
                </motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                        className="space-y-3 text-white/70"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p>Luôn sẵn sàng trao đổi về cơ hội intern/fresher QA/Tester tại TP.HCM/Bình Dương.</p>
                        <ul className="space-y-2">
                            <li>📧 Email: <a className="text-blue-500 hover:underline" href="mailto:nguyenviettruong1808@gmail.com">nguyenviettruong1808@gmail.com</a></li>
                            <li>📱 Phone: <a className="text-blue-500 hover:underline" href="tel:+84399890382">0399890382</a></li>
                            <li>💼 LinkedIn/GitHub: cập nhật sau</li>
                        </ul>
                    </motion.div>

                    <motion.form
                        className={`rounded-2xl p-5 ${CARD} grid grid-cols-1 gap-4`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div>
                            <label className="block text-sm mb-1">Tên</label>
                            <input className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-2 outline-none focus:border-blue-500 transition-colors" placeholder="Tên của bạn" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Email</label>
                            <input type="email" className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-2 outline-none focus:border-blue-500 transition-colors" placeholder="you@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">Nội dung</label>
                            <textarea rows={4} className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-2 outline-none focus:border-blue-500 transition-colors" placeholder="Mình có thể hỗ trợ gì?" />
                        </div>
                        <motion.button 
                            type="button" 
                            className="w-full px-5 py-3 rounded-2xl bg-blue-500 text-white font-semibold hover:opacity-90"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Gửi nhanh
                        </motion.button>
                    </motion.form>
                </div>
            </section>

            {/* ===== Footer ===== */}
            <motion.footer 
                className="border-t border-white/10 py-8 text-center text-white/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                © {new Date().getFullYear()} VietTruong — QA/Software Tester. Built with ❤️ & Tailwind.
            </motion.footer>
        </main>
    )
}

// ===== Reusable SkillCard =====
function SkillCard({ title, items }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className={`rounded-2xl p-5 ${CARD} hover:bg-white/10 transition-colors duration-300`}
            whileHover={{ y: -5, scale: 1.02 }}
        >
            <h3 className="font-semibold text-xl mb-3">{title}</h3>
            <ul className="space-y-2 text-white/80">
                {items.map((t, i) => (
                    <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        • {t}
                    </motion.li>
                ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
                {items.slice(0, 4).map((t, i) => (
                    <motion.span 
                        key={i} 
                        className="px-2 py-1 rounded-full text-xs border border-white/15 text-white/80"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        transition={{ duration: 0.2 }}
                    >
                        {t.split(' ')[0]}
                    </motion.span>
                ))}
            </div>
        </motion.article>
    )
}