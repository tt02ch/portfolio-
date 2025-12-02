import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import '../App.css'

const BG = 'bg-[#0b0f17]'
const CARD = 'bg-white/5 border border-white/10 backdrop-blur'

export default function Portfolio() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    const yHero = useTransform(scrollYProgress, [0, 1], [0, -100])
    const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.1])
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])

    // ẢNH PRO5 CỦA MÀY – KHÔNG ĐỘNG VÀO
    const images = ['/img/rf1.jpg','/img/aaa.png','/img/ss.jpg','/img/a.jpg','/img/image1.png','/img/image.png'].filter(Boolean)

    const [menuOpen, setMenuOpen] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (v) => console.log("Scroll:", v))
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <main className={`${BG} text-white min-h-screen font-sans overflow-hidden`}>
            {/* Header – giữ nguyên đẹp lung linh */}
            <header className={`fixed top-0 left-0 w-full z-50 ${BG} border-b border-white/10`}>
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <motion.a href="#home" className="text-blue-500 text-2xl font-semibold tracking-tight"
                        whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>VietTruong</motion.a>

                    <motion.button className="lg:hidden flex flex-col justify-between w-8 h-6"
                        onClick={() => setMenuOpen(!menuOpen)} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <span className={`bg-blue-500 w-8 h-[3px] rounded transition ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
                        <span className={`bg-blue-500 w-8 h-[3px] rounded transition ${menuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`bg-blue-500 w-8 h-[3px] rounded transition ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
                    </motion.button>

                    <motion.nav className={`fixed inset-0 ${BG} transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'} lg:static lg:translate-x-0 lg:bg-transparent`}
                        initial={false} animate={menuOpen ? "open" : "closed"}>
                        <motion.button className="absolute top-4 right-5 text-3xl lg:hidden" onClick={() => setMenuOpen(false)}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>×</motion.button>
                        <ul className="flex flex-col lg:flex-row gap-6 lg:gap-8 p-8 lg:p-0 lg:items-center">
                            {[{ t: 'Home', l: '#home' }, { t: 'About', l: '#about' }, { t: 'Skills', l: '#skills' },
                              { t: 'Projects', l: '#projects' }, { t: 'Gallery', l: '#gallery' }, { t: 'Contact', l: '#contact' }].map((m, i) => (
                                <motion.li key={i} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <a href={m.l} onClick={() => setMenuOpen(false)} className="text-lg text-blue-500 hover:text-white/90">
                                        <span className="text-blue-400/70 mr-1">0{i + 1}.</span>{m.t}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
            </header>

            <div className="h-16" />

            {/* Hero – thiên hướng Manual + Auto cân bằng */}
            <section id="home" ref={heroRef} className="relative overflow-hidden">
                <motion.div aria-hidden style={{ scale: scaleHero }}
                    className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full bg-blue-500/10 blur-[120px]" />

                <div className="container mx-auto px-4 pt-10 pb-20 lg:pt-20 lg:pb-28">
                    <div className="grid lg:grid-cols-2 gap-10 items-center">
                        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                            <p className="text-blue-400/80 text-sm tracking-widest uppercase">Manual Tester • Automation-Ready</p>
                            <h1 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight">
                                Xin chào, mình là <span className="text-blue-500">Nguyễn Viết Trường</span>
                            </h1>
                            <p className="mt-6 text-lg lg:text-xl text-white/80 max-w-xl leading-relaxed">
                                Mình là Tester tập trung vào <strong>Manual Testing chất lượng cao</strong>: phân tích yêu cầu kỹ, viết Test Case chi tiết, khám phá bug sâu và đảm bảo trải nghiệm người dùng mượt mà.<br /><br />
                                Đồng thời đã thành thạo <strong>Playwright + TypeScript</strong> để xây dựng automation bền vững (POM), tích hợp CI/CD GitLab – giúp giảm đáng kể thời gian regression mà vẫn giữ được độ chính xác của manual.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <motion.a href="#projects" className="px-6 py-3.5 bg-blue-500 rounded-2xl font-semibold"
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Xem dự án</motion.a>
                                <motion.a href="#contact" className="px-6 py-3.5 border border-white/20 rounded-2xl hover:border-blue-500 transition"
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>Liên hệ</motion.a>
                                <motion.a href="/CV_NguyenVietTruong_QA_2025.pdf" download
                                    className="px-6 py-3.5 border border-white/20 rounded-2xl hover:border-blue-500 transition flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Tải CV
                                </motion.a>
                            </div>
                            <motion.div className="mt-6 flex flex-wrap gap-4 text-white/60 text-sm"
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                <span>Bình Dương / TP.HCM</span>
                                <span>Tốt nghiệp dự kiến 2026</span>
                                <span>Sẵn sàng full-time ngay</span>
                            </motion.div>
                        </motion.div>

                        {/* Avatar – giữ nguyên toàn bộ hiệu ứng đỉnh cao */}
                        <motion.div style={{ y: yHero, scale: scaleHero, opacity: opacityHero }}
                            className="lg:justify-self-end relative"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, type: "spring" }}
                        >
                            <div className={`relative w-full max-w-md aspect-[4/5] rounded-3xl ${CARD} p-2 overflow-hidden group`}>
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent z-10" />
                                <motion.img src={images[0]} alt="Profile" className="w-full h-full object-cover rounded-2xl"
                                    whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }}
                                    onLoad={() => setImageLoaded(true)}
                                    initial={{ opacity: 0 }} animate={{ opacity: imageLoaded ? 1 : 0 }} />
                                <motion.div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                                <motion.div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-20"
                                    initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }}>
                                    <span className="text-xs text-white/70">#profile</span>
                                    <motion.span className="text-xs text-white/80"
                                        animate={{ y: [0, -3, 0] }} transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}>
                                        scroll
                                    </motion.span>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About – cân bằng Manual + Auto */}
            <section id="about" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>About</motion.h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    <motion.div className="lg:col-span-2 space-y-5 text-white/80 text-lg leading-relaxed">
                        <p>Mình theo đuổi con đường <strong>Manual Tester chuyên sâu</strong> – chú trọng khám phá bug bằng tư duy người dùng, viết tài liệu testing rõ ràng, chuẩn ISTQB.</p>
                        <p>Đồng thời biết tận dụng <strong>automation một cách hợp lý</strong>: dùng Playwright (TypeScript) để tự động hóa các flow regression ổn định, tích hợp CI/CD GitLab, giúp team tập trung manual testing vào các tính năng mới và exploratory testing.</p>
                        <p>Quan điểm: <strong>“Manual không bao giờ chết – Automation chỉ là công cụ hỗ trợ”</strong>.</p>
                    </motion.div>
                    <motion.div className={`space-y-3 rounded-2xl p-5 ${CARD}`} whileHover={{ y: -5 }}>
                        <h3 className="font-semibold text-xl">Thông tin nhanh</h3>
                        <ul className="grid grid-cols-1 gap-3 text-white/70">
                            <li>• Sinh viên năm cuối CNTT – TDMU</li>
                            <li>• 9+ tháng kinh nghiệm thực tế Manual + Automation</li>
                            <li>• Test Case chi tiết • Bug report chuẩn • Exploratory mạnh</li>
                            <li>• Playwright + TypeScript + POM + GitLab CI/CD</li>
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Skills – cân bằng 50/50 */}
            <section id="skills" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.div className="flex items-center justify-between mb-6"
                    initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h2 className="text-3xl font-bold">Skills</h2>
                    <span className="text-sm text-white/70">Manual First • Automation Smart</span>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    <SkillCard title="Manual Testing Core" items={[
                        'Yêu cầu & Phân tích nghiệp vụ',
                        'Test Case design: BVA, EP, Decision Table',
                        'Exploratory • Session-Based Testing',
                        'Bug report rõ ràng, tái hiện 100%',
                        'UAT support & User Guide'
                    ]} />
                    <SkillCard title="Automation (Hỗ trợ)" items={[
                        'Playwright + TypeScript (Strong)',
                        'Page Object Model • Data-Driven',
                        'Tích hợp GitLab CI/CD',
                        'Regression suite tự động',
                        'k6 cơ bản (Performance)'
                    ]} />
                    <SkillCard title="Tools & Others" items={[
                        'Postman • Newman • Jira • TestRail',
                        'SQL (JOIN, subquery, aggregate)',
                        'Git • Docker cơ bản • Linux CLI',
                        'Confluence • Test Summary Report'
                    ]} />
                </div>
            </section>

            {/* Projects – nhấn mạnh Manual trước, Auto sau */}
            <section id="projects" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 className="text-3xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    Projects & Experience
                </motion.h2>
                <div className="grid lg:grid-cols-2 gap-8">
                    <motion.article className={`rounded-2xl p-6 ${CARD}`} whileHover={{ y: -8 }}>
                        <h3 className="text-2xl font-bold text-blue-400">Oryza Metadata Cloud</h3>
                        <p className="text-white/60 mt-1">IoT Platform • Real-time Dashboard</p>
                        <ul className="mt-5 space-y-3 text-white/80">
                            <li>• Phân tích yêu cầu → Viết Test Case chi tiết cho 20+ modules</li>
                            <li>• Manual testing sâu, phát hiện 50+ bug nghiêm trọng</li>
                            <li>• API testing Postman + kiểm thử dữ liệu dashboard</li>
                            <li>• Xây automation Playwright cho regression chính → giảm 40% thời gian</li>
                        </ul>
                    </motion.article>

                    <motion.article className={`rounded-2xl p-6 ${CARD}`} whileHover={{ y: -8 }}>
                        <h3 className="text-2xl font-bold text-blue-400">XCorp HRM App</h3>
                        <p className="text-white/60 mt-1">Internal Workflow & Leave Management</p>
                        <ul className="mt-5 space-y-3 text-white/80">
                            <li>• Manual testing toàn bộ flows Leave, OKR, Task</li>
                            <li>• Viết Test Case + log bug chuẩn Jira</li>
                            <li>• Exploratory testing → phát hiện nhiều edge case</li>
                            <li>• Tự động hóa 3 modules chính bằng Playwright + POM</li>
                        </ul>
                    </motion.article>
                </div>
            </section>

            {/* Gallery & Contact & Footer – giữ nguyên đẹp của mày */}
            <section id="gallery" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Gallery</motion.h2>
                <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, i) => (
                        <motion.div key={i} initial={{ opacity: 0, y: 20, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.45, delay: i * 0.1 }} className={`group overflow-hidden rounded-2xl aspect-[4/5] ${CARD}`}
                            whileHover={{ y: -8, scale: 1.02 }}>
                            <motion.img src={src} alt={`Pro5 ${i+1}`} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </section>

            <section id="contact" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
                <motion.h2 className="text-3xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Contact</motion.h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-5 text-white/70 text-lg">
                        <p>Rất sẵn sàng trao đổi về vị trí <strong>Manual Tester / QA Engineer</strong> tại TP.HCM & Bình Dương.</p>
                        <ul className="space-y-3">
                            <li>Email: <a href="mailto:nguyenviettruong1808@gmail.com" className="text-blue-500 hover:underline">nguyenviettruong1808@gmail.com</a></li>
                            <li>Phone: <a href="tel:+84399890382" className="text-blue-500 hover:underline">0399890382</a></li>
                        </ul>
                    </div>
                    <motion.form className={`rounded-2xl p-5 ${CARD} grid gap-4`}>
                        <input className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-3 focus:border-blue-500 outline-none transition" placeholder="Tên" />
                        <input type="email" className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-3 focus:border-blue-500 outline-none transition" placeholder="Email" />
                        <textarea rows={4} className="w-full rounded-xl bg-transparent border border-white/10 px-4 py-3 focus:border-blue-500 outline-none transition resize-none" placeholder="Nội dung..." />
                        <motion.button type="button" className="w-full py-3 bg-blue-500 rounded-xl font-semibold hover:opacity-90"
                            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Gửi tin nhắn</motion.button>
                    </motion.form>
                </div>
            </section>

            <motion.footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                © 2025 Nguyễn Viết Trường — Manual Tester with Automation Skill. Built with Love & Tailwind.
            </motion.footer>
        </main>
    )
}

function SkillCard({ title, items }) {
    return (
        <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className={`rounded-2xl p-5 ${CARD} hover:bg-white/10 transition-colors duration-300`} whileHover={{ y: -5, scale: 1.02 }}>
            <h3 className="font-semibold text-xl mb-3 text-blue-400">{title}</h3>
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