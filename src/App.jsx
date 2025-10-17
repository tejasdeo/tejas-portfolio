import React, { useEffect, useState } from 'react';

function DarkToggle() {
  const [mode, setMode] = useState(() => {
    try { return localStorage.getItem('theme') || 'light'; } catch { return 'light'; }
  });

  useEffect(() => {
    document.documentElement.classList.remove('light','dark');
    document.documentElement.classList.add(mode);
    try { localStorage.setItem('theme', mode); } catch {}
  }, [mode]);

  return (
    <button
      onClick={() => setMode(prev => prev === 'light' ? 'dark' : 'light')}
      className="fixed top-4 right-4">
      {mode === 'light' ? '☀️Light' : '🌙 Dark'}
    </button>
  );
}

export default function App() {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-8">
      <header className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">Tejas Deo </h1>
          <p className="text-sm sm:text-base leading-relaxed">Software Engineer — Java | Spring Boot | AWS | DevOps</p>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
          <a href="tel:+919373527498" className="text-sm">📞 +91 93735 27498</a>
          <a href="mailto:tejasndeo@gmail.com" className="text-sm">✉️ tejasndeo@gmail.com</a>
          <a href="https://www.linkedin.com/in/tejas-deo-32275217b/" target="_blank" rel="noreferrer" className="text-sm">🔗 LinkedIn</a>
          <a href="https://github.com/tejasdeo" target="_blank" rel="noreferrer" className="text-sm">🔗 GitHub</a>
          <DarkToggle /> 
        </div>
      </header>

      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-3">Professional Summary</h2>
          <p className="text-sm sm:text-base leading-relaxed">Results-driven Software Engineer with 4.4 years of experience in backend development, cloud engineering and DevOps automation. Proficient in Java, Spring Boot, AWS, and microservices architecture. Skilled in building high-performance APIs, automating deployments, and improving system reliability across distributed environments. Adept at collaborating in agile teams to deliver scalable, secure, and production-grade solutions.</p>

          <h3 className="text-xl font-semibold mt-6 mb-2">Professional Experience</h3>
          <div className="space-y-4">
            <div className="card">
              <h4 className="font-bold">Systems Engineer — Tata Consultancy Services</h4>
              <p className="text-sm sm:text-base leading-relaxed">Feb 2025 – Current | Client: Citi Bank</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Automated routine DevOps tasks, saving ~10 developer-hours per sprint.</li>
                <li>Migrated projects from Bitbucket to GitHub; enhanced observability with Splunk.</li>
                <li>Developed APIs for Fixed Deposit functionality across Singapore and Hong Kong.</li>
              </ul>
            </div>

            <div className="card">
              <h4 className="font-bold">Senior Software Engineer — LTIMindtree</h4>
              <p className="text-sm sm:text-base leading-relaxed">Jun 2021 – Jan 2025 | Client: Principal Global Services</p>
              <ul className="list-disc ml-5 mt-2">
                <li>Automated data consolidation for 10M+ insurance agents across 70+ tables.</li>
                <li>Purged 1M+ redundant DB2 records using AWS Lambda, EC2, SQS, and RDS.</li>
                <li>Built RESTful APIs with Java Spring Boot and CI/CD via GitHub Actions.</li>
              </ul>
            </div>
          </div>
        </section>

        <aside className="space-y-6">
          <div className="card">
            <h3 className="font-semibold">Technical Skills</h3>
            <p className="text-sm sm:text-base leading-relaxed">Java, TypeScript, SQL, Spring Boot, Microservices, AWS, Docker, Kubernetes, OpenShift, GitHub Actions, Jenkins, Splunk, Fortify</p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Education</h3>
            <p className="text-sm sm:text-base leading-relaxed">B.E. Computer Science, RCOEM — CGPA: 8.0 (2017–2021)</p>
            <p className="text-sm sm:text-base leading-relaxed">HSC: 78% | SSC: 93.4%</p>
          </div>

          <div className="card">
            <h3 className="font-semibold">Certifications & Awards</h3>
            <ul className="list-disc ml-5 mt-2 text-sm">
              <li>Oracle Certified Java 8 Programming Associate</li>
              <li>AWS Partner Technical Accreditation</li>
              <li>Rising Star Award — AWS Automation</li>
            </ul>
          </div>

          <div className="card text-center">
            <a href="https://tejasdeo.github.io/tejas-portfolio/Tejas_Deo_Backend_Engineer.pdf" download="Tejas_Deo_Backend_Engineer.pdf" target="_blank" rel="noopener noreferrer"className="inline-block px-3 py-2 border rounded-md">⬇️ Download Resume</a>
          </div>
        </aside>
      </main>

      <footer className="mt-12 text-center text-sm">
        <p>📍 Pune, India • © {new Date().getFullYear()} Tejas Deo</p>
      </footer>
    </div>
  );
}
