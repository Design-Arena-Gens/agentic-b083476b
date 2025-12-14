'use client'

import { useState, useEffect } from 'react'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    setMounted(true)
  }, [])

  const skills = [
    { name: 'Web Development', level: 95 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Cloud Computing', level: 92 },
    { name: 'AI & Machine Learning', level: 85 },
    { name: 'Blockchain', level: 78 },
    { name: 'Cybersecurity', level: 82 },
  ]

  const projects = [
    { title: 'Neural Network Dashboard', description: 'Real-time AI model monitoring system' },
    { title: 'Quantum Computing Interface', description: 'Web-based quantum algorithm simulator' },
    { title: 'Decentralized Cloud Storage', description: 'Blockchain-powered file storage solution' },
    { title: 'Holographic Data Viz', description: 'Next-gen 3D data visualization platform' },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 grid-bg opacity-30 pointer-events-none" />

      {/* Floating Orbs */}
      <div className="fixed top-20 left-20 w-64 h-64 bg-cyber-blue rounded-full blur-3xl opacity-20 animate-float" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-cyber-purple rounded-full blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="fixed top-1/2 left-1/2 w-80 h-80 bg-cyber-pink rounded-full blur-3xl opacity-10 animate-pulse-slow" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-cyber-darker/50 border-b border-cyber-blue/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">PROFILE.EXE</div>
          <div className="flex gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-cyber-blue ${
                  activeSection === item.toLowerCase() ? 'text-cyber-blue' : 'text-gray-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className="max-w-6xl w-full">
          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Glitch Effect Text */}
            <div className="mb-6 text-cyber-blue text-sm uppercase tracking-widest font-mono">
              [ SYSTEM ONLINE ]
            </div>

            <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient">
              WELCOME
            </h1>

            <h2 className="text-4xl md:text-5xl mb-8 text-gray-300">
              I'm a <span className="text-cyber-blue">Digital Architect</span>
            </h2>

            <p className="text-xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
              Crafting immersive digital experiences at the intersection of design,
              technology, and innovation. Building the future, one line of code at a time.
            </p>

            <div className="flex gap-6">
              <button className="neon-border px-8 py-4 bg-transparent text-cyber-blue font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-blue/10">
                View Projects
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple font-semibold uppercase tracking-wider transition-all duration-300 hover:shadow-lg hover:shadow-cyber-blue/50">
                Contact Me
              </button>
            </div>
          </div>

          {/* Floating Stats */}
          <div className="grid grid-cols-3 gap-6 mt-20">
            {[
              { value: '50+', label: 'Projects Completed' },
              { value: '10+', label: 'Years Experience' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat, i) => (
              <div
                key={i}
                className="hologram neon-border bg-cyber-dark/30 backdrop-blur-sm p-6 text-center"
                style={{ animationDelay: `${i * 200}ms` }}
              >
                <div className="text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-gradient">ABOUT.ME</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="hologram neon-border bg-cyber-dark/30 backdrop-blur-sm p-8 mb-6">
                <h3 className="text-2xl font-bold text-cyber-blue mb-4">Digital Pioneer</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  With over a decade of experience in the digital realm, I specialize in creating
                  cutting-edge solutions that push the boundaries of what's possible.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  My passion lies in transforming complex problems into elegant, user-centric
                  experiences that blend aesthetics with functionality.
                </p>
              </div>

              <div className="hologram neon-border bg-cyber-dark/30 backdrop-blur-sm p-8">
                <h3 className="text-2xl font-bold text-cyber-purple mb-4">Mission Statement</h3>
                <p className="text-gray-300 leading-relaxed">
                  To leverage emerging technologies and innovative design principles to build
                  solutions that make a meaningful impact in people's lives.
                </p>
              </div>
            </div>

            <div>
              <div className="hologram neon-border bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 backdrop-blur-sm p-8 h-full flex flex-col justify-center">
                <div className="text-6xl font-bold text-gradient mb-6">10+</div>
                <p className="text-gray-300 text-lg mb-6">
                  Years of experience building next-generation digital products
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-blue rounded-full animate-pulse" />
                    <span className="text-gray-400">Full-Stack Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <span className="text-gray-400">UI/UX Design</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-cyber-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                    <span className="text-gray-400">System Architecture</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-gradient">SKILLS.SYS</h2>

          <div className="space-y-6">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="hologram neon-border bg-cyber-dark/30 backdrop-blur-sm p-6"
              >
                <div className="flex justify-between mb-3">
                  <span className="text-lg font-semibold text-cyber-blue">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-cyber-darker rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyber-blue to-cyber-purple transition-all duration-1000 ease-out"
                    style={{ width: mounted ? `${skill.level}%` : '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
        <div className="max-w-6xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-gradient">PROJECTS.LOG</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="hologram neon-border bg-cyber-dark/30 backdrop-blur-sm p-8 hover:bg-cyber-dark/50 transition-all duration-300 cursor-pointer group"
              >
                <div className="text-cyber-blue text-sm mb-4 uppercase tracking-wider font-mono">
                  [ PROJECT {String(i + 1).padStart(2, '0')} ]
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gradient group-hover:scale-105 transition-transform">
                  {project.title}
                </h3>
                <p className="text-gray-400">
                  {project.description}
                </p>
                <div className="mt-6 text-cyber-blue text-sm uppercase tracking-wider hover:text-cyber-purple transition-colors">
                  View Details →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 py-20">
        <div className="max-w-4xl w-full">
          <h2 className="text-5xl font-bold mb-12 text-gradient">CONTACT.INIT</h2>

          <div className="hologram neon-border bg-cyber-dark/30 backdrop-blur-sm p-8 md:p-12">
            <p className="text-xl text-gray-300 mb-8">
              Ready to build something extraordinary together?
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer">
                <div className="w-3 h-3 bg-cyber-blue rounded-full animate-pulse" />
                <span>email@example.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer">
                <div className="w-3 h-3 bg-cyber-purple rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span>github.com/username</span>
              </div>
              <div className="flex items-center gap-4 text-gray-400 hover:text-cyber-blue transition-colors cursor-pointer">
                <div className="w-3 h-3 bg-cyber-pink rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <span>linkedin.com/in/username</span>
              </div>
            </div>

            <button className="mt-12 w-full neon-border px-8 py-4 bg-transparent text-cyber-blue font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-cyber-blue/10">
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-cyber-blue/20 backdrop-blur-md bg-cyber-darker/50">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-500">
          <p className="font-mono text-sm">
            © 2024 PROFILE.EXE // ALL SYSTEMS OPERATIONAL
          </p>
        </div>
      </footer>
    </main>
  )
}
