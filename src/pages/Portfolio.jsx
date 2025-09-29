import Header from '../components/Header';
import SkillCard from '../components/SkillCard';
import ProjectCard from '../components/ProjectCard';

export default function Portfolio() {
  return (
    <main className="bg-dark text-white min-h-screen font-sans">
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
              Final-year IT student @ TDMU • Thực tập sinh tại Oryza Systems. Mình tập trung vào Manual/API Testing,
              Playwright, k6, và CI/CD (GitLab, Jenkins) để đảm bảo chất lượng phần mềm.
            </p>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <SkillCard
            title="Testing Fundamentals"
            items={['ISTQB Foundation', 'Functional / Regression / Smoke', 'Test Design', 'Defect lifecycle']}
          />
          <SkillCard
            title="Automation & Tools"
            items={['Playwright', 'Postman', 'k6', 'GitLab CI / Jenkins']}
          />
          <SkillCard
            title="Tech & Data"
            items={['JavaScript', 'SQL', 'Git', 'Docker (basic)']}
          />
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="container mx-auto px-4 py-12 lg:py-20 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Oryza Metadata Cloud"
            tags={['Playwright', 'GitLab CI', 'API Testing']}
            bullets={[
              'Viết & thực thi Test Cases cho modules quan trọng',
              'E2E automation Playwright: login, RBAC, flows báo cáo',
              'Tích hợp pipeline CI để chạy regression theo commit',
            ]}
          />
        </div>
      </section>
    </main>
  );
}
