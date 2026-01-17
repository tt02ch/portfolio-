import { useState, useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import '../App.css'

const BG = 'bg-[#0a0b14]'
const CARD = 'bg-gradient-to-br from-gray-900/40 to-black/30 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_50px_rgba(0,255,255,0.1)]'

// Matrix rain effect component
const MatrixRain = () => {
  const canvasRef = useRef(null)
  
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
    
    const chars = "01{}[]()<>=+-*/;:.,!@#$%^&";

    const fontSize = 14
    const columns = canvas.width / fontSize
    const drops = Array(Math.floor(columns)).fill(1)
    
    const draw = () => {
      ctx.fillStyle = 'rgba(10, 11, 20, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      
      ctx.fillStyle = '#0ff'
      ctx.font = `${fontSize}px monospace`
      
      for(let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        ctx.fillStyle = `rgba(0, 255, 255, ${Math.random() * 0.6 + 0.2})`
        ctx.fillText(text, x, y)
        
        if(y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }
    
    const interval = setInterval(draw, 50)
    return () => clearInterval(interval)
  }, [])
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
    />
  )
}

// Cyber grid background
const CyberGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute inset-0" style={{
      backgroundImage: `
        linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'
    }} />
  </div>
)

// Glowing orb
const GlowingOrb = ({ className = "" }) => (
  <motion.div 
    className={`absolute rounded-full ${className}`}
    animate={{
      scale: [1, 1.2, 1],
      opacity: [0.3, 0.6, 0.3]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
)

export default function Portfolio() {
    const heroRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
    
    // Enhanced scroll transforms
    const yHero = useTransform(scrollYProgress, [0, 1], [0, -200])
    const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.15])
    const opacityHero = useTransform(scrollYProgress, [0, 0.7], [1, 0.6])
    const rotateHero = useTransform(scrollYProgress, [0, 1], [0, 0.5])
    
    // Holographic images
    const images = ['/img/rf1.jpg','/img/aaa.png','/img/ss.jpg','/img/a.jpg','/img/image1.png','/img/image.png'].filter(Boolean)
    
    const [menuOpen, setMenuOpen] = useState(false)
    const [imageLoaded, setImageLoaded] = useState(false)
    const [hoveredSection, setHoveredSection] = useState(null)

    // Smooth scroll handler
    const smoothScroll = (e, target) => {
        e.preventDefault()
        document.querySelector(target)?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        })
        setMenuOpen(false)
    }

    // Parallax effect for floating elements
    const floatingElements = [
        { className: "w-32 h-32 bg-cyan-500/10 -top-20 -left-20" },
        { className: "w-64 h-64 bg-purple-500/5 bottom-20 right-10" },
        { className: "w-16 h-16 bg-blue-500/10 top-1/3 right-1/4" }
    ]

    return (
        <main className={`${BG} text-white min-h-screen font-['Orbitron','sans-serif'] overflow-x-hidden`}>
            {/* Animated Background Layers */}
            <div className="fixed inset-0 z-0">
                <MatrixRain />
                <CyberGrid />
                {floatingElements.map((orb, i) => (
                    <GlowingOrb key={i} className={orb.className} />
                ))}
                
                {/* Scanning line */}
                <motion.div 
                    className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent shadow-[0_0_10px_#0ff]"
                    animate={{ y: ['0vh', '100vh'] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            </div>

            {/* Header - Cyberpunk Style */}
            <motion.header 
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100 }}
                className={`fixed top-0 left-0 w-full z-50 ${BG}/80 backdrop-blur-xl border-b border-cyan-500/20`}
            >
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <motion.a 
                        href="#home"
                        onClick={(e) => smoothScroll(e, '#home')}
                        className="text-2xl font-bold tracking-widest"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-cyan-400">VIET</span>
                        <span className="text-white">TRUONG</span>
                        <motion.span 
                            className="inline-block ml-2 text-cyan-500"
                            animate={{ opacity: [1, 0.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            _
                        </motion.span>
                    </motion.a>

                    {/* Holographic Navigation */}
                    <motion.nav className="hidden lg:block">
                        <ul className="flex gap-8">
                            {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'GALLERY', 'CONTACT'].map((item, i) => (
                                <motion.li key={item}>
                                    <a 
                                        href={`#${item.toLowerCase()}`}
                                        onClick={(e) => smoothScroll(e, `#${item.toLowerCase()}`)}
                                        className="relative text-sm tracking-widest font-medium"
                                        onMouseEnter={() => setHoveredSection(item)}
                                        onMouseLeave={() => setHoveredSection(null)}
                                    >
                                        <span className={`transition-all duration-300 ${
                                            hoveredSection === item ? 'text-cyan-400' : 'text-white/70'
                                        }`}>
                                            <span className="text-cyan-500/50">0{i+1}.</span> {item}
                                        </span>
                                        <AnimatePresence>
                                            {hoveredSection === item && (
                                                <motion.div 
                                                    initial={{ scaleX: 0 }}
                                                    animate={{ scaleX: 1 }}
                                                    exit={{ scaleX: 0 }}
                                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-500 to-purple-500"
                                                />
                                            )}
                                        </AnimatePresence>
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.nav>

                    {/* Mobile Menu Button - Holographic */}
                    <motion.button
                        className="lg:hidden relative w-10 h-10"
                        onClick={() => setMenuOpen(!menuOpen)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <div className="absolute inset-0 bg-cyan-500/10 rounded-lg blur-sm" />
                        <div className={`relative flex flex-col justify-center items-center gap-1.5 w-full h-full rounded-lg border border-cyan-500/30 transition-all duration-300 ${
                            menuOpen ? 'bg-cyan-500/20' : 'bg-black/30'
                        }`}>
                            <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                                menuOpen ? 'rotate-45 translate-y-1.5' : ''
                            }`} />
                            <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                                menuOpen ? 'opacity-0' : 'opacity-100'
                            }`} />
                            <span className={`w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${
                                menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                            }`} />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Menu - Holographic Panel */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden overflow-hidden border-t border-cyan-500/20"
                        >
                            <div className="container mx-auto px-6 py-6 bg-black/50 backdrop-blur-xl">
                                <div className="grid gap-4">
                                    {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS', 'GALLERY', 'CONTACT'].map((item, i) => (
                                        <motion.a
                                            key={item}
                                            href={`#${item.toLowerCase()}`}
                                            onClick={(e) => smoothScroll(e, `#${item.toLowerCase()}`)}
                                            className="block py-3 px-4 rounded-lg border border-cyan-500/10 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 group"
                                            whileHover={{ x: 10 }}
                                        >
                                            <span className="text-cyan-500/50 group-hover:text-cyan-400">0{i+1}.</span>
                                            <span className="ml-2 text-white/80 group-hover:text-white font-medium tracking-widest">
                                                {item}
                                            </span>
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.header>

            <div className="h-20" />

            {/* Hero Section - Cyberpunk Vibes */}
            <section id="home" ref={heroRef} className="relative overflow-hidden">
                {/* Animated Background Effects */}
                <motion.div 
                    className="absolute inset-0"
                    style={{
                        background: `radial-gradient(circle at 30% 20%, rgba(0, 255, 255, 0.15) 0%, transparent 50%),
                                   radial-gradient(circle at 70% 80%, rgba(128, 0, 255, 0.1) 0%, transparent 50%)`
                    }}
                />

                <div className="container mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, type: "spring" }}
                            className="space-y-6"
                        >
                            {/* Glitch Text Effect */}
                            <div className="relative">
                                <motion.p 
                                    className="text-cyan-400/80 text-sm tracking-[0.3em] uppercase font-bold"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    <span className="text-cyan-500">&gt;_</span> QC ENGINEER
                                </motion.p>
                                <motion.h1 
                                    className="mt-4 text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <span className="block text-white">SYSTEM</span>
                                    <span className="block">
                                        <span className="text-cyan-400">VALIDATION</span>
                                        <span className="text-white"> SPECIALIST</span>
                                    </span>
                                </motion.h1>
                            </div>

                            {/* Bio with Cyberpunk Style */}
                            <motion.div 
                                className="space-y-4"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <div className={`p-6 rounded-2xl ${CARD} border-l-4 border-cyan-500`}>
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        <span className="text-cyan-400 font-bold">Nguyễn Viết Trường</span> — 
                                        Final-year IT specialist mastering <span className="text-cyan-300">manual validation protocols</span> and <span className="text-purple-300">automation frameworks</span>.
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm border border-cyan-500/30">Playwright + TypeScript</span>
                                        <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm border border-purple-500/30">Test Automation</span>
                                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-sm border border-blue-500/30">CI/CD</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Action Buttons */}
                            <motion.div 
                                className="flex flex-wrap gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <motion.a
                                    href="#projects"
                                    onClick={(e) => smoothScroll(e, '#projects')}
                                    className="relative group px-8 py-4 rounded-xl font-bold tracking-wider"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl opacity-80 group-hover:opacity-100 transition-opacity" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur group-hover:blur-md transition-all" />
                                    <span className="relative flex items-center gap-2">
                                        <span>VIEW PROJECTS</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            →
                                        </motion.span>
                                    </span>
                                </motion.a>

                                <motion.a
                                    href="/CV_NguyenVietTruong_QA_2025.pdf"
                                    download
                                    className="relative group px-8 py-4 rounded-xl font-bold tracking-wider border-2 border-cyan-500/50 hover:border-cyan-400"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <div className="absolute inset-0 bg-cyan-500/5 rounded-xl group-hover:bg-cyan-500/10 transition-colors" />
                                    <span className="relative flex items-center gap-3">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        DOWNLOAD CV
                                    </span>
                                </motion.a>
                            </motion.div>

                            {/* Status Indicators */}
                            <motion.div 
                                className="flex flex-wrap gap-6 text-sm"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {[
                                    { label: 'LOCATION', value: 'HCMC / BINH DUONG' },
                                    { label: 'STATUS', value: 'AVAILABLE FULL-TIME' },
                                    { label: 'GRADUATION', value: '2026' }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                        <span className="text-cyan-300/70">{item.label}:</span>
                                        <span className="text-white font-medium">{item.value}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>

                        {/* Holographic Profile Display */}
                        <motion.div 
                            style={{ 
                                y: yHero, 
                                scale: scaleHero,
                                rotate: rotateHero,
                                opacity: opacityHero 
                            }}
                            className="relative lg:justify-self-end"
                            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, type: "spring" }}
                        >
                            {/* Holographic Frame */}
                            <div className="relative w-full max-w-md">
                                {/* Outer Glow */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl" />
                                
                                {/* Main Card */}
                                <div className={`relative rounded-2xl ${CARD} p-3 overflow-hidden group`}>
                                    {/* Scanning Effect */}
                                    <motion.div 
                                        className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent z-20"
                                        animate={{ y: ['-100%', '200%'] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    />
                                    
                                    {/* Image Container */}
                                    <div className="relative overflow-hidden rounded-xl">
                                        <motion.img 
                                            src={images[1]} 
                                            alt="Nguyễn Viết Trường"
                                            className="w-full h-full object-cover min-h-[500px]"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: imageLoaded ? 1 : 0 }}
                                            onLoad={() => setImageLoaded(true)}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        
                                        {/* Holographic Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                    
                                    {/* Data Panel */}
                                    <div className="absolute bottom-4 left-4 right-4 z-30">
                                        <div className={`rounded-lg ${CARD} p-3 backdrop-blur-lg`}>
                                            <div className="flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                                                        <span className="text-xs text-cyan-300">PROFILE_ACTIVE</span>
                                                    </div>
                                                    <span className="text-sm font-medium text-white/90">VIET_TRUONG.QA</span>
                                                </div>
                                                <motion.div 
                                                    className="text-xs text-cyan-400 flex items-center gap-1"
                                                    animate={{ opacity: [1, 0.5, 1] }}
                                                    transition={{ duration: 2, repeat: Infinity }}
                                                >
                                                    <span>SCROLL</span>
                                                    <span className="text-lg">↓</span>
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section - Cyberpunk Terminal Style */}
            <section id="about" className="relative py-20">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ margin: "-100px" }}
                    >
                        {/* Terminal Header */}
                        <div className={`rounded-2xl ${CARD} border-t border-cyan-500/30 overflow-hidden`}>
                            <div className="flex items-center gap-2 p-4 border-b border-cyan-500/10">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                                </div>
                                <span className="text-sm text-cyan-300 ml-4">about_me.terminal</span>
                            </div>
                            
                            <div className="p-6 space-y-4">
                                <div className="space-y-2">
                                    <p className="text-cyan-400 font-mono">
                                        <span className="text-green-400">$</span> whoami
                                    </p>
                                    <p className="text-white/90 pl-4">
                                        <span className="text-cyan-300">SYSTEM_VALIDATOR</span> | QC_ENGINEER | TEST_AUTOMATION_SPECIALIST
                                    </p>
                                </div>
                                
                                <div className="space-y-2">
                                    <p className="text-cyan-400 font-mono">
                                        <span className="text-green-400">$</span> cat bio.txt
                                    </p>
                                    <div className="pl-4 space-y-3 text-white/80">
                                        <p>Specializing in <span className="text-cyan-300">end-to-end validation protocols</span> for complex software systems.</p>
                                        <p>Expert in both <span className="text-yellow-300">manual testing methodologies</span> and <span className="text-purple-300">automated framework development</span>.</p>
                                        <p>Currently optimizing <span className="text-green-300">CI/CD pipelines</span> with Playwright automation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid md:grid-cols-3 gap-4">
                            {[
                                { label: 'SYSTEMS TESTED', value: '15+', color: 'cyan' },
                                { label: 'AUTOMATION COVERAGE', value: '85%', color: 'purple' },
                                { label: 'BUGS PREVENTED', value: '200+', color: 'green' }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className={`rounded-xl p-6 ${CARD} border border-${stat.color}-500/20`}
                                >
                                    <div className={`text-3xl font-bold text-${stat.color}-400 mb-2`}>{stat.value}</div>
                                    <div className="text-sm text-white/70 tracking-widest">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section - Matrix Style */}
            <section id="skills" className="relative py-20 border-t border-cyan-500/10">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="flex items-center justify-between mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div>
                            <h2 className="text-4xl font-bold tracking-tight">
                                <span className="text-white">CORE</span>
                                <span className="text-cyan-400"> COMPETENCIES</span>
                            </h2>
                            <p className="text-cyan-300/60 text-sm tracking-widest mt-2">VALIDATION_PROTOCOLS • AUTOMATION_FRAMEWORKS</p>
                        </div>
                        <div className="hidden lg:block">
                            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
                        </div>
                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: "TEST_METHODOLOGIES",
                                items: ["STLC/SDLC Protocols", "Agile/Scrum Framework", "Risk-Based Validation"],
                                color: "cyan"
                            },
                            {
                                title: "AUTOMATION_STACK",
                                items: ["Playwright + TypeScript", "Page Object Model", "CI/CD Integration"],
                                color: "purple"
                            },
                            {
                                title: "API_VALIDATION",
                                items: ["REST API Testing", "Postman Automation", "Database Verification"],
                                color: "green"
                            },
                            {
                                title: "TEST_MANAGEMENT",
                                items: ["Jira/TestRail", "GitLab CI", "Confluence Docs"],
                                color: "blue"
                            },
                            {
                                title: "SECURITY_TESTING",
                                items: ["OWASP Protocols", "XSS/CSRF Testing", "Basic Pentesting"],
                                color: "yellow"
                            },
                            {
                                title: "PERFORMANCE",
                                items: ["K6 Load Testing", "Stress Testing", "Basic Monitoring"],
                                color: "pink"
                            }
                        ].map((skill, i) => (
                            <SkillCard key={i} {...skill} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section - Holographic Display */}
            <section id="projects" className="relative py-20 border-t border-cyan-500/10">
                <div className="container mx-auto px-6">
                    <motion.h2 
                        className="text-4xl font-bold mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <span className="text-cyan-400">ACTIVE</span>
                        <span className="text-white"> PROJECTS</span>
                    </motion.h2>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {[
                            {
                                title: "ORYZA METADATA CLOUD",
                                subtitle: "IoT Monitoring Platform",
                                description: "Real-time system validation for IoT infrastructure",
                                highlights: [
                                    "Designed comprehensive test protocols",
                                    "API validation with Postman automation",
                                    "Playwright automation framework",
                                    "CI/CD pipeline integration"
                                ],
                                tech: ["IoT", "Playwright", "Postman", "CI/CD"]
                            },
                            {
                                title: "XCORP HRM SYSTEM",
                                subtitle: "Workflow Management Platform",
                                description: "End-to-end validation of HR management systems",
                                highlights: [
                                    "Smoke testing automation",
                                    "Bug tracking and reporting",
                                    "Manual validation workflows",
                                    "Automated regression suites"
                                ],
                                tech: ["HRM", "Automation", "Jira", "Testing"]
                            }
                        ].map((project, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: i * 0.2 }}
                                className={`rounded-2xl ${CARD} p-8 relative overflow-hidden group`}
                            >
                                {/* Holographic Effect */}
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <h3 className="text-2xl font-bold text-cyan-300">{project.title}</h3>
                                            <p className="text-cyan-100/60 mt-1">{project.subtitle}</p>
                                        </div>
                                        <div className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm">
                                            ACTIVE
                                        </div>
                                    </div>
                                    
                                    <p className="text-white/80 mb-6">{project.description}</p>
                                    
                                    <ul className="space-y-3 mb-6">
                                        {project.highlights.map((highlight, j) => (
                                            <motion.li 
                                                key={j}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ delay: j * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0" />
                                                <span className="text-white/70">{highlight}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t, j) => (
                                            <span 
                                                key={j}
                                                className="px-3 py-1 rounded-full bg-black/30 border border-cyan-500/20 text-cyan-300 text-sm"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Section - Holographic Grid */}
            <section id="gallery" className="relative py-20 border-t border-cyan-500/10">
                <div className="container mx-auto px-6">
                    <motion.div 
                        className="mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <h2 className="text-4xl font-bold">
                            <span className="text-white">DIGITAL</span>
                            <span className="text-cyan-400"> ARCHIVE</span>
                        </h2>
                        <p className="text-cyan-300/60 text-sm tracking-widest mt-2">SYSTEM_SNAPSHOTS • PROJECT_ARTIFACTS</p>
                    </motion.div>

                    <div className="grid xs:grid-cols-2 md:grid-cols-3 gap-6">
                        {images.map((src, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -10, scale: 1.05 }}
                                transition={{ delay: i * 0.1 }}
                                className="relative group"
                            >
                                <div className={`rounded-xl overflow-hidden ${CARD} aspect-[4/5]`}>
                                    <motion.img 
                                        src={src} 
                                        alt={`Archive ${i+1}`}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                    
                                    {/* Holographic Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    {/* Data Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="bg-black/80 backdrop-blur-sm rounded-lg p-3">
                                            <div className="text-xs text-cyan-300 mb-1">ARCHIVE_0{i+1}</div>
                                            <div className="text-sm text-white">PROJECT_SNAPSHOT.{i+1}</div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Glowing Border Effect */}
                                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-500/30 to-purple-500/30 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Section - Cyberpunk Terminal */}
            <section id="contact" className="relative py-20 border-t border-cyan-500/10">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-4xl font-bold mb-4">
                                    <span className="text-cyan-400">INITIATE</span>
                                    <span className="text-white"> CONNECTION</span>
                                </h2>
                                <p className="text-white/70 text-lg">
                                    Available for <span className="text-cyan-300">QC Engineer</span> and <span className="text-purple-300">Automation Specialist</span> roles in HCMC & Binh Duong.
                                </p>
                            </div>

                            {/* Contact Info - Terminal Style */}
                            <div className={`rounded-2xl ${CARD} p-6 space-y-4`}>
                                {[
                                    {
                                        label: "ENCRYPTED_CHANNEL",
                                        value: "nguyenviettruong1808@gmail.com",
                                        type: "email"
                                    },
                                    {
                                        label: "COMM_LINK",
                                        value: "+84 399 890 382",
                                        type: "phone"
                                    },
                                    {
                                        label: "DIGITAL_PRESENCE",
                                        value: "portfolio-nguyenviettruong.onrender.com",
                                        type: "link"
                                    }
                                ].map((contact, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors group"
                                    >
                                        <div>
                                            <div className="text-sm text-cyan-300/70">{contact.label}</div>
                                            <a 
                                                href={contact.type === 'email' ? `mailto:${contact.value}` : 
                                                      contact.type === 'phone' ? `tel:${contact.value}` : '#'}
                                                className="text-white hover:text-cyan-300 transition-colors"
                                            >
                                                {contact.value}
                                            </a>
                                        </div>
                                        <motion.div
                                            className="opacity-0 group-hover:opacity-100"
                                            whileHover={{ x: 5 }}
                                        >
                                            <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Form - Holographic */}
                        <motion.form
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className={`rounded-2xl ${CARD} p-8 space-y-6`}
                        >
                            <div className="space-y-1">
                                <label className="text-cyan-300 text-sm tracking-widest">YOUR_IDENTIFIER</label>
                                <input 
                                    type="text"
                                    className="w-full bg-black/30 border border-cyan-500/30 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white placeholder-white/30 transition-all"
                                    placeholder="ENTER_NAME"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label className="text-cyan-300 text-sm tracking-widest">ENCRYPTION_KEY</label>
                                <input 
                                    type="email"
                                    className="w-full bg-black/30 border border-cyan-500/30 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white placeholder-white/30 transition-all"
                                    placeholder="ENTER_EMAIL"
                                />
                            </div>
                            
                            <div className="space-y-1">
                                <label className="text-cyan-300 text-sm tracking-widest">MESSAGE_DATA</label>
                                <textarea 
                                    rows={4}
                                    className="w-full bg-black/30 border border-cyan-500/30 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 text-white placeholder-white/30 resize-none transition-all"
                                    placeholder="ENTER_MESSAGE..."
                                />
                            </div>
                            
                            <motion.button
                                type="button"
                                className="relative w-full py-4 rounded-xl font-bold tracking-wider overflow-hidden group"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 group-hover:from-cyan-500 group-hover:to-blue-600 transition-all" />
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                                <span className="relative flex items-center justify-center gap-3">
                                    <span>SEND TRANSMISSION</span>
                                    <motion.span
                                        animate={{ x: [0, 5, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        ↗
                                    </motion.span>
                                </span>
                            </motion.button>
                        </motion.form>
                    </div>
                </div>
            </section>

            {/* Footer - Cyberpunk Style */}
            <motion.footer 
                className="border-t border-cyan-500/20 py-12 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
            >
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <div className="text-2xl font-bold tracking-widest mb-2">
                                <span className="text-cyan-400">VIET</span>
                                <span className="text-white">TRUONG</span>
                            </div>
                            <p className="text-white/50 text-sm">
                                QC_ENGINEER • SYSTEM_VALIDATOR • AUTOMATION_SPECIALIST
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-6">
                            {['GITHUB', 'LINKEDIN', 'GITLAB'].map((platform) => (
                                <motion.a
                                    key={platform}
                                    href="#"
                                    className="text-white/50 hover:text-cyan-400 text-sm tracking-widest transition-colors"
                                    whileHover={{ y: -2 }}
                                >
                                    {platform}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                    
                    <div className="mt-8 pt-8 border-t border-white/10 text-center">
                        <p className="text-white/30 text-sm tracking-widest">
                            <span className="text-cyan-500/50">© 2025</span> NGUYEN VIET TRUONG • 
                            <span className="text-purple-500/50"> BUILT WITH REACT + FRAMER MOTION</span> • 
                            <span className="text-green-500/50"> SYSTEM_STATUS: ONLINE</span>
                        </p>
                    </div>
                </div>
                
                {/* Animated Footer Line */}
                <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </motion.footer>
        </main>
    )
}

// Enhanced SkillCard Component
function SkillCard({ title, items, color = "cyan", index }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
                y: -10,
                scale: 1.02,
                borderColor: `var(--${color}-500)`
            }}
            transition={{ delay: index * 0.1 }}
            className={`rounded-xl p-6 ${CARD} border border-${color}-500/20 hover:border-${color}-500/50 transition-all duration-300 relative group overflow-hidden`}
        >
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className={`w-3 h-3 bg-${color}-500 rounded-full`} />
                    <h3 className={`text-lg font-bold text-${color}-300 tracking-wider`}>
                        {title}
                    </h3>
                </div>
                
                <ul className="space-y-3">
                    {items.map((item, i) => (
                        <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 + index * 0.1 }}
                            className="flex items-start gap-2 text-white/80 group-hover:text-white/90 transition-colors"
                        >
                            <span className={`text-${color}-400 mt-1`}>▸</span>
                            <span>{item}</span>
                        </motion.li>
                    ))}
                </ul>
                
                {/* Animated Indicator */}
                <motion.div 
                    className={`absolute bottom-4 right-4 w-2 h-2 bg-${color}-500 rounded-full`}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            </div>
        </motion.article>
    )
}