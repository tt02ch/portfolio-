import { useState } from 'react'

/**********************
 * HEADER (from user)
 **********************/
export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const Menu = [
    { title: "Home", link: "#homes" },
    { title: "About", link: "#about-me" },
    { title: "Skills", link: "#skills" },
    { title: "Projects", link: "#projects" },
    { title: "Contact", link: "#contact" }
  ];

  const handleMenuClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="" id="homes"></div>
      <header className="fixed top-0 left-0 w-full bg-dark z-50 py-[5px] border-b border-white/10">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#homes" className="text-primary text-2xl font-semibold tracking-tight">VietTruong</a>

          <button
            className="lg:hidden flex flex-col justify-between items-center w-8 h-6 bg-transparent border-none outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <div className={`bg-primary w-8 h-1 rounded transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1' : ''}`}></div>
            <div className={`bg-primary w-8 h-1 rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`bg-primary w-8 h-1 rounded transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : ''}`}></div>
          </button>

          <nav className={`fixed inset-0 bg-dark/95 backdrop-blur text-white transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:bg-transparent lg:flex lg:items-center lg:space-x-8`}>
            <button
              className="absolute top-4 right-4 text-white text-3xl lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <span className="material-icons">close</span>
            </button>
            <ul className="flex flex-col lg:flex-row lg:space-x-8 space-y-4 lg:space-y-0 p-6 lg:p-0">
              {Menu.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-primary text-lg lg:text-xl hover:text-light"
                    onClick={handleMenuClick}
                  >
                    <span className="text-primary/70">0{index + 1}.</span> {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

/**********************
 * HERO + SECTIONS
 **********************/
export default function Portfolio() {
  return (
    <main className="bg-dark text-white min-h-screen font-sans">
      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="homes" className="container mx-auto px-4 pt-28 pb-16 lg:pt-36 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-primary/80 text-sm tracking-widest uppercase">Software Tester • QA & Automation</p>
            <h1 className="mt-2 text-4xl lg:text-5xl font-bold leading-tight">
              Xin chào, mình là <span className="text-primary">Nguyễn Viết Trường</span>
            </h1>
            <p className="mt-4 text-lg text-white/80 max-w-xl">
              Final-year IT student @ TDMU • Thực tập sinh tại Oryza Systems. Mình tập trung vào <span className="text-white">Manual/API Testing</span>,
              <span className="text-white"> Playwright</span>, <span className="text-white">k6</span>, và <span className="text-white">CI/CD (GitLab, Jenkins)</span> để đảm bảo chất lượng phần mềm.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#projects" className="px-5 py-3 rounded-2xl bg-primary text-dark font-semibold hover:opacity-90">Xem Projects</a>
              <a href="#contact" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-primary">Liên hệ mình</a>
              <a href="/VietTruong_QA_CV.pdf" className="px-5 py-3 rounded-2xl border border-white/20 hover:border-primary">Tải CV</a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-white/60 text-sm">
              <span>📍 Bình Dương / TP.HCM</span>
              <span>🎓 Tốt nghiệp dự kiến 2026</span>
            </div>
          </div>
          <div className="lg:justify-self-end">
            <div className="relative w-full max-w-md aspect-square rounded-3xl bg-gradient-to-br from-primary/30 to-transparent border border-white/10 p-4">
              <div className="absolute inset-0 m-4 rounded-2xl bg-dark/60 backdrop-blur flex items-center justify-center text-center p-6">
                <p className="text-white/80">
                  “Kiểm thử hiệu quả không chỉ tìm lỗi — mà còn ngăn lỗi xuất hiện trong quy trình.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about-me" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">About</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4 text-white/80">
            <p>
              Mình theo đuổi lộ trình <span className="text-white">QA/Automation</span>, chú trọng quy trình kiểm thử dựa trên rủi ro, viết test artifacts rõ ràng
              (Test Plan, Test Case, Test Summary) và tích hợp automation vào pipeline để tăng tốc regression.
            </p>
            <p>
              Đã thực chiến tại <span className="text-white">Oryza Metadata Cloud</span>: viết test cases, kiểm thử API bằng Postman,
              xây Playwright E2E cho core features, tích hợp CI/CD trên GitLab; đối chiếu dữ liệu dashboard với hệ thống nhận diện khuôn mặt.
            </p>
            <p>
              Mục tiêu gần: trở thành <span className="text-white">QA Automation Engineer</span> có nền tảng vững và giao tiếp tiếng Anh chuyên ngành tốt.
            </p>
          </div>
          <div className="space-y-3 bg-white/5 rounded-2xl p-5 border border-white/10">
            <h3 className="font-semibold text-xl">Thông tin nhanh</h3>
            <ul className="grid grid-cols-1 gap-2 text-white/80">
              <li>• Trường: TDMU (CNTT)</li>
              <li>• Internship: Oryza Systems</li>
              <li>• Quan tâm: Playwright, k6, Jenkins, GitLab CI</li>
              <li>• Sở trường: Viết Test Cases, API Testing, E2E, CI/CD</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <SkillCard title="Testing Fundamentals" items={[
            'ISTQB Foundation mindset',
            'Functional • Regression • Smoke',
            'Test Design: BVA, EP, Decision Table',
            'Defect lifecycle & reporting'
          ]} />
          <SkillCard title="Automation & Tools" items={[
            'Playwright (TypeScript/Python)',
            'Postman • REST Assured (basic)',
            'k6 (load testing)',
            'GitLab CI • Jenkins'
          ]} />
          <SkillCard title="Tech & Data" items={[
            'JavaScript/TypeScript • Node',
            'SQL (JOIN, aggregate, indexes)',
            'Git • Docker (cơ bản)',
            'Linux CLI • YAML/JSON'
          ]} />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Projects</h2>
          <a href="#contact" className="text-primary hover:underline">Cần demo? Liên hệ mình →</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Oryza Metadata Cloud – QA & Automation"
            tags={["Playwright", "GitLab CI", "API Testing"]}
            bullets={[
              'Viết & thực thi Test Cases cho modules quan trọng',
              'E2E automation Playwright: login, RBAC, flows báo cáo',
              'Tích hợp pipeline CI để chạy regression theo commit',
            ]}
          />

          <ProjectCard
            title="k6 Load Test Suite – REST APIs"
            tags={["k6", "Performance", "Grafana"]}
            bullets={[
              'Kịch bản smoke/load cho endpoints chính',
              'Thiết lập threshold, check, và report',
              'Đánh giá bottlenecks sơ bộ cho scale vừa',
            ]}
          />

          <ProjectCard
            title="SchoolFood – QA Practice"
            tags={["Manual Test", "SQL", "Postman"]}
            bullets={[
              'Thiết kế test cho giỏ hàng, đặt món, voucher',
              'Viết truy vấn SQL đối soát dữ liệu đơn hàng',
              'Báo cáo bug chi tiết (steps, expected, actual, evidence)',
            ]}
          />

          <ProjectCard
            title="Docs & Knowledge – Docusaurus"
            tags={["Docs", "CI", "MDX"]}
            bullets={[
              'Xây docs cho test framework & quy trình QA',
              'Tạo checklist, template Test Plan/Test Case dùng lại',
              'Tự động build & deploy docs',
            ]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Contact</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3 text-white/80">
            <p>Luôn sẵn sàng trao đổi về cơ hội thực tập/fresher QA/Tester tại TP.HCM/Bình Dương.</p>
            <ul className="space-y-2">
              <li>📧 Email: <a className="text-primary hover:underline" href="mailto:viettruong@example.com">viettruong@example.com</a></li>
              <li>📱 Phone: <a className="text-primary hover:underline" href="tel:+84000000000">+84 000 000 000</a></li>
              <li>💼 LinkedIn/GitHub: cập nhật sau</li>
            </ul>
          </div>
          <form className="bg-white/5 rounded-2xl p-5 border border-white/10 space-y-4">
            <div>
              <label className="block text-sm mb-1">Tên</label>
              <input className="w-full rounded-xl bg-dark border border-white/10 px-4 py-2 outline-none focus:border-primary" placeholder="Tên của bạn" />
            </div>
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input type="email" className="w-full rounded-xl bg-dark border border-white/10 px-4 py-2 outline-none focus:border-primary" placeholder="you@email.com" />
            </div>
            <div>
              <label className="block text-sm mb-1">Nội dung</label>
              <textarea rows={4} className="w-full rounded-xl bg-dark border border-white/10 px-4 py-2 outline-none focus:border-primary" placeholder="Mình có thể hỗ trợ gì?" />
            </div>
            <button type="button" className="w-full px-5 py-3 rounded-2xl bg-primary text-dark font-semibold hover:opacity-90">Gửi nhanh</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} VietTruong — QA/Software Tester. Built with ❤️ & Tailwind.
      </footer>
    </main>
  )
}

/**********************
 * Reusable UI Parts
 **********************/
function SkillCard({ title, items }) {
  return (
    <div className="rounded-2xl p-5 border border-white/10 bg-white/5">
      <h3 className="font-semibold text-xl mb-3">{title}</h3>
      <ul className="space-y-2 text-white/80">
        {items.map((t, i) => (
          <li key={i}>• {t}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, tags, bullets }) {
  return (
    <article className="rounded-2xl p-5 border border-white/10 bg-white/5 hover:bg-white/[0.07] transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span key={i} className="px-2 py-1 rounded-full text-xs border border-white/15 text-white/80">{t}</span>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-white/80">
        {bullets.map((b, i) => (
          <li key={i}>• {b}</li>
        ))}
      </ul>
      <div className="mt-4 flex gap-3">
        <a className="text-primary hover:underline" href="#">Case Study</a>
        <a className="text-primary hover:underline" href="#">Source</a>
      </div>
    </article>
  );
}
