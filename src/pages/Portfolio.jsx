import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import '../App.css'

// Sci-fi color palette
const BG = 'bg-[#0a0b14]'
const CARD = 'bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-xl border border-white/5 shadow-2xl'

export default function Portfolio() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    
    // Enhanced parallax effects
    const yHero = useTransform(scrollYProgress, [0, 1], [0, -150])
    const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.15])
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
    const blurHero = useTransform(scrollYProgress, [0, 0.5], [0, 10])
    
    // Sci-fi glow effects
    const glowOpacity = useTransform(scrollYProgress, [0, 0.8], [0.3, 0.1])

    const images = ['/img/rf1.jpg','/img/aaa.png','/img/ss.jpg','/img/a.jpg','/img/image1.png','/img/image.png'].filter(Boolean)

    const [menuOpen, setMenuOpen] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [hoveredSkill, setHoveredSkill] = useState(null)

    // Enhanced scroll listener with sci-fi effects
    useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (v) => {
            document.documentElement.style.setProperty('--scroll-progress', v)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <main className={`${BG} text-white min-h-screen font-sans overflow-hidden relative`}>
            {/* Sci-fi background elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    style={{ opacity: glowOpacity }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-[100px]"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
                <motion.div 
                    style={{ opacity: glowOpacity }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-[120px]"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, -30, 0],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1
                    }}
                />
                
                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
                
                {/* Animated particles */}
                {[...Array(20)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-[1px] h-[1px] bg-cyan-400/50 rounded-full"
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: Math.random() * window.innerHeight,
                        }}
                        animate={{
                            y: [null, -20, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Enhanced Header with holographic effect */}
            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`fixed top-0 left-0 w-full z-50 ${BG} border-b border-white/[0.08] backdrop-blur-xl`}
            >
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <motion.div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-500" />
                        <motion.a 
                            href="#home" 
                            className="relative text-cyan-400 text-2xl font-bold tracking-tighter"
                            whileHover={{ scale: 1.05 }} 
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                VIETTRUONG.dev
                            </span>
                            <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                        </motion.a>
                    </motion.div>

                    {/* Enhanced mobile menu button */}
                    <motion.button 
                        className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center"
                        onClick={() => setMenuOpen(!menuOpen)} 
                        whileHover={{ scale: 1.1 }} 
                        whileTap={{ scale: 0.9 }}
                    >
                        <span className={`absolute w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${menuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                        <span className={`absolute w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full transition-all duration-300 ${menuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                    </motion.button>

                    {/* Enhanced navigation */}
                    <AnimatePresence>
                        {menuOpen && (
                            <motion.nav
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 100 }}
                                className="fixed inset-0 bg-gradient-to-br from-[#0a0b14]/95 to-[#0a0b14]/90 backdrop-blur-xl lg:hidden flex items-center justify-center"
                            >
                                <motion.button 
                                    className="absolute top-8 right-8 text-2xl text-cyan-400"
                                    onClick={() => setMenuOpen(false)}
                                    whileHover={{ scale: 1.2, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    ✕
                                </motion.button>
                                <ul className="space-y-8 text-center">
                                    {['Home', 'About', 'Skills', 'Projects', 'Gallery', 'Contact'].map((item, i) => (
                                        <motion.li 
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <a 
                                                href={`#${item.toLowerCase()}`}
                                                onClick={() => setMenuOpen(false)}
                                                className="text-2xl font-medium relative group"
                                            >
                                                <span className="text-cyan-300/70 mr-2">0{i+1}</span>
                                                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                                    {item}
                                                </span>
                                                <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                                            </a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.nav>
                        )}
                    </AnimatePresence>

                    {/* Desktop navigation */}
                    <motion.nav className="hidden lg:block">
                        <ul className="flex gap-8">
                            {['Home', 'About', 'Skills', 'Projects', 'Gallery', 'Contact'].map((item, i) => (
                                <motion.li key={i} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                                    <a 
                                        href={`#${item.toLowerCase()}`}
                                        className="relative group px-1 py-2"
                                    >
                                        <span className="text-cyan-300/50 text-sm absolute -left-6 top-1/2 -translate-y-1/2">0{i+1}</span>
                                        <span className="text-white/80 group-hover:text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-300">
                                            {item}
                                        </span>
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-300" />
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>
                </div>
            </motion.header>

            <div className="h-20" />

            {/* Enhanced Hero Section with sci-fi effects */}
            <section id="home" ref={heroRef} className="relative overflow-hidden">
                <motion.div 
                    style={{ 
                        scale: scaleHero,
                        filter: `blur(${blurHero}px)`
                    }}
                    className="pointer-events-none absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 blur-[120px]"
                />

                <div className="container mx-auto px-4 pt-10 pb-20 lg:pt-24 lg:pb-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 0.8,
                                type: "spring",
                                stiffness: 50
                            }}
                            className="relative"
                        >
                            {/* Title with sci-fi effect */}
                            <div className="mb-4">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 mb-4">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                    <span className="text-sm font-mono text-cyan-300 tracking-widest">
                                        QC_ENGINEER://SYSTEM_ACTIVE
                                    </span>
                                </div>
                                
                                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                                    <span className="text-white">HI, I'M </span>
                                    <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                                        NGUYỄN VIẾT TRƯỜNG
                                    </span>
                                </h1>
                            </div>

                            {/* Enhanced description */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="relative"
                            >
                                <div className="absolute -left-4 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent" />
                                <p className="mt-6 text-lg lg:text-xl text-white/90 leading-relaxed pl-4">
                                    Final-year IT specialist transforming into a{' '}
                                    <span className="text-cyan-300 font-semibold">precision-focused QC Engineer</span>.
                                    Master of both <span className="text-blue-300">manual methodologies</span> and{' '}
                                    <span className="text-purple-300">automation systems</span> with Playwright + TypeScript.
                                    Ready to deploy quality assurance protocols for next-generation software.
                                </p>
                            </motion.div>

                            {/* Enhanced CTA buttons */}
                            <motion.div 
                                className="mt-10 flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.a 
                                    href="#projects"
                                    className="relative group px-8 py-4 rounded-xl font-semibold overflow-hidden"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-[1px] bg-[#0a0b14] rounded-xl" />
                                    <span className="relative bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                                        VIEW PROJECTS
                                    </span>
                                </motion.a>

                                <motion.a 
                                    href="/CV_NguyenVietTruong_QA_2025.pdf"
                                    download
                                    className="relative group px-8 py-4 rounded-xl font-semibold border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 flex items-center gap-3"
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    <span>DOWNLOAD_CV.pdf</span>
                                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                                </motion.a>
                            </motion.div>

                            {/* Status indicators */}
                            <motion.div 
                                className="mt-8 flex flex-wrap gap-6 text-sm font-mono"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.7 }}
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                    <span className="text-cyan-300/80">LOCATION: HCMC/BD</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                                    <span className="text-cyan-300/80">GRADUATION: 2026</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                    <span className="text-cyan-300/80">STATUS: AVAILABLE</span>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Enhanced Profile Image with holographic effect */}
                        <motion.div 
                            style={{ y: yHero, scale: scaleHero, opacity: opacityHero }}
                            className="relative lg:justify-self-end"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ 
                                duration: 1, 
                                type: "spring",
                                stiffness: 80,
                                damping: 15 
                            }}
                        >
                            {/* Outer glow ring */}
                            <motion.div 
                                className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-xl"
                                animate={{
                                    rotate: [0, 360],
                                }}
                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                            
                            {/* Main container */}
                            <div className={`relative rounded-2xl ${CARD} p-3 overflow-hidden group`}>
                                {/* Scan line effect */}
                                <motion.div 
                                    className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent z-20"
                                    initial={{ y: "-100%" }}
                                    animate={{ y: "100%" }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }}
                                />
                                
                                {/* Holographic overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 z-10" />
                                
                                {/* Image */}
                                <motion.img 
                                    src={images[1]} 
                                    alt="Nguyễn Viết Trường" 
                                    className="relative w-full h-full object-cover rounded-xl z-0"
                                    whileHover={{ scale: 1.05 }}
                                    onLoad={() => setImageLoaded(true)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: imageLoaded ? 1 : 0 }}
                                />
                                
                                {/* Data overlay */}
                                <motion.div 
                                    className="absolute bottom-4 left-4 right-4 z-30"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <div className="flex items-center justify-between">
                                        <div className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10">
                                            <span className="text-xs font-mono text-cyan-300">PROFILE_IMG_v2.5</span>
                                        </div>
                                        <motion.div 
                                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10"
                                            animate={{ 
                                                boxShadow: [
                                                    "0 0 0px rgba(59, 130, 246, 0)",
                                                    "0 0 10px rgba(59, 130, 246, 0.5)",
                                                    "0 0 0px rgba(59, 130, 246, 0)"
                                                ]
                                            }}
                                            transition={{
                                                duration: 2,
                                                repeat: Infinity
                                            }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                            <span className="text-xs font-mono text-white/90">SCAN_COMPLETE</span>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Enhanced About Section */}
            <section id="about" className="container mx-auto px-4 py-20 lg:py-32 relative">
                <div className="absolute -left-20 top-1/2 w-40 h-40 rounded-full bg-gradient-to-r from-cyan-500/10 to-transparent blur-3xl" />
                
                <motion.h2 
                    className="text-4xl font-bold mb-12 relative"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        ABOUT_SYSTEM
                    </span>
                    <div className="w-32 h-[2px] bg-gradient-to-r from-cyan-500 to-transparent mt-2" />
                </motion.h2>
                
                <div className="grid lg:grid-cols-3 gap-10">
                    <motion.div 
                        className="lg:col-span-2 space-y-6"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ staggerChildren: 0.1 }}
                    >
                        {[
                            "Passionate <strong>QC Engineer</strong> with specialized protocols for both manual and automated testing systems.",
                            "Advanced proficiency in requirement analysis, test case architecture, exploratory testing, and API validation protocols.",
                            "Developer of maintainable automation frameworks using Playwright + TypeScript with CI/CD pipeline integration.",
                            "Mission: Deploy reliable, high-quality software while continuously optimizing testing efficiency metrics."
                        ].map((text, i) => (
                            <motion.p 
                                key={i}
                                className="text-white/90 text-lg leading-relaxed pl-6 border-l-2 border-cyan-500/30"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                dangerouslySetInnerHTML={{ __html: text }}
                            />
                        ))}
                    </motion.div>
                    
                    <motion.div 
                        className={`rounded-2xl p-6 ${CARD} relative overflow-hidden group`}
                        whileHover={{ y: -8 }}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        {/* Hover effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <h3 className="font-bold text-2xl mb-6 relative">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                SYSTEM_STATS
                            </span>
                        </h3>
                        
                        <ul className="space-y-4 relative">
                            {[
                                { label: "EDUCATION", value: "Thu Dau Mot University", color: "cyan" },
                                { label: "EXPERIENCE", value: "9+ months real projects", color: "blue" },
                                { label: "SPECIALIZATION", value: "Manual + Automation", color: "purple" },
                                { label: "AVAILABILITY", value: "Full-time immediate", color: "green" }
                            ].map((stat, i) => (
                                <motion.li 
                                    key={i}
                                    className="flex items-center gap-3 group/item"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className={`w-2 h-2 rounded-full bg-${stat.color}-400 animate-pulse`} />
                                    <div className="flex-1">
                                        <div className="text-xs font-mono text-white/50">{stat.label}</div>
                                        <div className="text-white/90 font-medium">{stat.value}</div>
                                    </div>
                                    <div className="w-16 h-1 rounded-full bg-white/10 overflow-hidden">
                                        <motion.div 
                                            className={`h-full bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-500`}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${60 + i * 10}%` }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.2, duration: 1 }}
                                        />
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* Enhanced Skills Section with interactive cards */}
            <section id="skills" className="container mx-auto px-4 py-20 lg:py-32 relative">
                <div className="absolute right-0 top-1/3 w-60 h-60 rounded-full bg-gradient-to-l from-blue-500/10 to-transparent blur-3xl" />
                
                <motion.div 
                    className="flex items-center justify-between mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <h2 className="text-4xl font-bold mb-2">
                            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                                SKILL_MATRIX
                            </span>
                        </h2>
                        <p className="text-white/60 font-mono">Manual Precision • Automated Efficiency</p>
                    </div>
                    <div className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                        <span className="text-sm font-mono text-cyan-300">{skillsData.length} SYSTEMS</span>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {skillsData.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            title={skill.title}
                            items={skill.items}
                            index={index}
                            isHovered={hoveredSkill === index}
                            onHover={() => setHoveredSkill(index)}
                            onLeave={() => setHoveredSkill(null)}
                        />
                    ))}
                </div>
            </section>

            {/* Enhanced Projects Section */}
            <section id="projects" className="container mx-auto px-4 py-20 lg:py-32 relative">
                <motion.h2 
                    className="text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        PROJECT_ARCHIVE
                    </span>
                </motion.h2>
                
                <div className="grid lg:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* Enhanced Gallery */}
            <section id="gallery" className="container mx-auto px-4 py-20 lg:py-32">
                <motion.h2 
                    className="text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        DATA_GALLERY
                    </span>
                </motion.h2>
                
                <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-6">
                    {images.map((src, i) => (
                        <GalleryImage key={i} src={src} index={i} />
                    ))}
                </div>
            </section>

            {/* Enhanced Contact Section */}
            <section id="contact" className="container mx-auto px-4 py-20 lg:py-32">
                <motion.h2 
                    className="text-4xl font-bold mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        CONTACT_PROTOCOL
                    </span>
                </motion.h2>
                
                <div className="grid md:grid-cols-2 gap-12">
                    <ContactInfo />
                    <ContactForm />
                </div>
            </section>

            {/* Enhanced Footer */}
            <motion.footer 
                className="border-t border-white/10 py-12 text-center relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent" />
                <div className="container mx-auto px-4 relative">
                    <motion.p 
                        className="text-white/60 font-mono text-sm"
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        © 2025 NGUYỄN VIẾT TRƯỜNG — QC_ENGINEER_PROTOCOL v2.0
                    </motion.p>
                    <p className="mt-2 text-white/40 text-xs font-mono">
                        BUILT_WITH: REACT + TAILWINDCSS + FRAMER_MOTION
                    </p>
                </div>
            </motion.footer>
        </main>
    )
}

// Enhanced SkillCard Component
function SkillCard({ title, items, index, isHovered, onHover, onLeave }) {
    return (
        <motion.article 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`rounded-2xl p-6 ${CARD} relative overflow-hidden group cursor-default`}
            whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
            }}
            animate={{
                borderColor: isHovered ? "rgba(34, 211, 238, 0.3)" : "rgba(255, 255, 255, 0.05)",
                boxShadow: isHovered 
                    ? "0 20px 40px rgba(34, 211, 238, 0.15), 0 0 0 1px rgba(34, 211, 238, 0.1)"
                    : "0 10px 30px rgba(0, 0, 0, 0.3)"
            }}
        >
            {/* Animated background on hover */}
            {isHovered && (
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                />
            )}
            
            {/* Pulsing indicator */}
            <div className="absolute top-4 right-4">
                <div className="relative">
                    <motion.div 
                        className="w-2 h-2 rounded-full bg-cyan-400"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.div 
                        className="absolute inset-0 rounded-full bg-cyan-400/30"
                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </div>
            
            <h3 className="font-bold text-xl mb-4 relative">
                <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                    {title}
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-r from-cyan-500 to-transparent mt-1" />
            </h3>
            
            <ul className="space-y-3">
                {items.map((item, i) => (
                    <motion.li 
                        key={i}
                        className="flex items-start gap-3 group/item"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                    >
                        <motion.div 
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2"
                            animate={isHovered ? { rotate: 180 } : { rotate: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.article>
    )
}

// Enhanced ProjectCard Component
function ProjectCard({ project, index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className={`rounded-2xl p-8 ${CARD} relative overflow-hidden group`}
            whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 200 }
            }}
        >
            {/* Corner accents */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-cyan-500/30 rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-blue-500/30 rounded-br-2xl" />
            
            <div className="flex items-start justify-between mb-6">
                <div>
                    <h3 className="text-2xl font-bold text-cyan-300">{project.title}</h3>
                    <p className="text-white/60 text-sm font-mono mt-1">{project.subtitle}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20">
                    <span className="text-xs font-mono text-cyan-300">ACTIVE</span>
                </div>
            </div>
            
            <ul className="space-y-4">
                {project.points.map((point, i) => (
                    <motion.li 
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + i * 0.1 }}
                    >
                        <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        </div>
                        <span className="text-white/80">{point}</span>
                    </motion.li>
                ))}
            </ul>
            
            {/* Hover line effect */}
            <motion.div 
                className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"
                initial={false}
            />
        </motion.article>
    )
}

// Enhanced GalleryImage Component
function GalleryImage({ src, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 90 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
            }}
            className={`group overflow-hidden rounded-xl ${CARD} aspect-[4/5] relative`}
            whileHover={{ 
                scale: 1.05,
                zIndex: 10,
                transition: { type: "spring", stiffness: 300 }
            }}
        >
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />
            
            {/* Image */}
            <motion.img 
                src={src} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-full object-cover relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
            />
            
            {/* Info on hover */}
            <motion.div 
                className="absolute bottom-0 left-0 right-0 p-4 z-30 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                initial={false}
            >
                <div className="text-center">
                    <div className="text-xs font-mono text-white/70 mb-1">IMAGE_{String(index + 1).padStart(2, '0')}</div>
                    <div className="w-8 h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto" />
                </div>
            </motion.div>
        </motion.div>
    )
}

// ContactInfo Component
function ContactInfo() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
        >
            <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">CONNECTION_PROTOCOL</h3>
                <p className="text-white/70">
                    Ready to deploy quality assurance solutions for your next project.
                    Available for full-time QC Engineer positions in HCMC & Binh Duong.
                </p>
            </div>
            
            <div className="space-y-4">
                {[
                    { 
                        label: "EMAIL_TRANSMISSION", 
                        value: "nguyenviettruong1808@gmail.com",
                        icon: "✉️"
                    },
                    { 
                        label: "COMMUNICATION_CHANNEL", 
                        value: "+84 399 890 382",
                        icon: "📱"
                    },
                    { 
                        label: "NETWORK_LOCATION", 
                        value: "portfolio-nguyenviettruong.onrender.com",
                        icon: "🌐"
                    }
                ].map((contact, i) => (
                    <motion.div 
                        key={i}
                        className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white/[0.02] to-transparent border border-white/5 group cursor-pointer"
                        whileHover={{ x: 10, borderColor: "rgba(34, 211, 238, 0.2)" }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className="text-2xl">{contact.icon}</div>
                        <div className="flex-1">
                            <div className="text-xs font-mono text-white/50">{contact.label}</div>
                            <a 
                                href={contact.label.includes("EMAIL") ? `mailto:${contact.value}` : 
                                      contact.label.includes("CHANNEL") ? `tel:${contact.value}` : 
                                      contact.value}
                                className="text-cyan-300 hover:text-cyan-200 transition-colors"
                            >
                                {contact.value}
                            </a>
                        </div>
                        <motion.div
                            className="opacity-0 group-hover:opacity-100"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            →
                        </motion.div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

// ContactForm Component
function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    return (
        <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`rounded-2xl p-8 ${CARD} space-y-6`}
        >
            <div>
                <h3 className="text-2xl font-bold text-cyan-300 mb-2">SEND_TRANSMISSION</h3>
                <p className="text-white/50 text-sm">All fields required for secure transmission</p>
            </div>
            
            {[
                { id: 'name', label: 'IDENTITY_CODE', type: 'text' },
                { id: 'email', label: 'CONTACT_FREQUENCY', type: 'email' },
                { id: 'message', label: 'MESSAGE_CONTENT', type: 'textarea' }
            ].map((field, i) => (
                <motion.div 
                    key={field.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative"
                >
                    <label className="block text-sm font-mono text-white/70 mb-2">
                        {field.label}
                    </label>
                    {field.type === 'textarea' ? (
                        <textarea
                            rows={4}
                            value={formData[field.id]}
                            onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-500/30 backdrop-blur-sm"
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                        />
                    ) : (
                        <input
                            type={field.type}
                            value={formData[field.id]}
                            onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}
                            className="w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-white focus:border-cyan-500/50 focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-cyan-500/30 backdrop-blur-sm"
                            placeholder={`Enter ${field.label.toLowerCase()}...`}
                        />
                    )}
                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 group-focus-within:w-full transition-all duration-500" />
                </motion.div>
            ))}
            
            <motion.button
                type="button"
                className="w-full py-4 rounded-xl font-semibold relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-[1px] bg-[#0a0b14] rounded-xl" />
                <span className="relative bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300 font-mono">
                    INITIATE_TRANSMISSION
                </span>
            </motion.button>
        </motion.form>
    )
}

// Data
const skillsData = [
    {
        title: "METHODOLOGIES",
        items: ['STLC • SDLC', 'Agile/Scrum • Waterfall', 'Risk-Based Testing']
    },
    {
        title: "TESTING_TOOLS",
        items: ['Postman • TestRail', 'Jira • GitLab • Confluence']
    },
    {
        title: "TESTING_TYPES",
        items: ['Functional • Regression • Integration', 'System • UAT • Smoke • Usability', 'Basic Performance (K6) • Security (OWASP)']
    },
    {
        title: "TEST_DESIGN",
        items: ['Test Plan Architecture', 'Test Case Engineering', 'Test Summary Reports']
    },
    {
        title: "API_DATABASE",
        items: ['REST API Validation', 'SQL Query Optimization', 'End-to-end Data Protocols']
    },
    {
        title: "AUTOMATION_CI/CD",
        items: ['Playwright + TypeScript', 'Page Object Model', 'GitLab CI/CD Pipelines', 'Basic Jenkins & K6']
    }
]

const projectsData = [
    {
        title: "ORYZA METADATA CLOUD",
        subtitle: "IoT Real-time Monitoring Platform",
        points: [
            "Designed manual test protocols for Web & API modules",
            "API testing with Postman → identified critical functional defects",
            "Developed Playwright automation scripts for regression testing",
            "Integrated automated tests into GitLab CI/CD pipeline"
        ]
    },
    {
        title: "XCORP HRM SYSTEM",
        subtitle: "Internal Workflow Management",
        points: [
            "Smoke testing after each deployment cycle",
            "Created comprehensive test cases & bug reports in Jira",
            "Manual testing for Leave, OKR, Task management flows",
            "Built Playwright + POM automation for core modules"
        ]
    }
]