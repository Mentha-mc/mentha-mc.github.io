import React from 'react';
import { Github, MessageCircle, MonitorPlay, Code2, BookOpen, Briefcase, ChevronDown, ExternalLink, Mail } from 'lucide-react';

function App() {
  const socialLinks = [
    {
      icon: <Github size={28} />,
      label: 'GitHub',
      href: '#'
    },
    {
      icon: <MonitorPlay size={28} />,
      label: 'Bilibili',
      href: '#'
    },
    {
      icon: <MessageCircle size={28} />,
      label: 'QQ',
      href: '#'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center text-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
            alt="背景"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/70 to-black/95 backdrop-blur-lg" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,128,128,0.3),transparent_70%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.4)_2px,transparent_2px),linear-gradient(to_bottom,rgba(0,0,0,0.4)_2px,transparent_2px)] bg-[size:50px_50px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="glass-card p-16 rounded-[2.5rem] animate-float">
            <div className="animate-fade-in">
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 animate-gradient">
                  Mentha
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light tracking-wide">
                <span className="animate-slide-up inline-block">全栈开发工程师</span>
                <span className="mx-3 animate-slide-up inline-block">/</span>
                <span className="animate-slide-up inline-block">技术架构师</span>
              </p>
              <div className="flex justify-center space-x-8 animate-fade-in-up">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-all transform hover:scale-110 hover:rotate-6 relative group"
                  >
                    <div className="glass-card p-4 rounded-2xl hover-lift">
                      <div className="group-hover:animate-pulse">
                        {link.icon}
                      </div>
                    </div>
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity glass-card px-3 py-1 rounded-lg">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="glass-card w-14 h-14 rounded-full flex items-center justify-center hover-lift cursor-pointer">
            <ChevronDown className="text-white/70 w-6 h-6 hover:text-teal-400 transition-colors" />
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-4 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-blue-900/30" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] opacity-5 bg-fixed" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,128,128,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-12 text-center group">
            <span className="text-gradient-hover">
              关于我
            </span>
          </h2>
          <div className="glass-card p-12 rounded-[2rem] group">
            <p className="text-xl text-gray-300 leading-relaxed group-hover:text-white transition-colors">
              我是一名拥有5年经验的全栈开发工程师，专注于构建高性能、可扩展的web应用。
              热爱技术创新，善于解决复杂问题，追求代码质量和用户体验的完美统一。
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 px-4 bg-gray-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,128,128,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,128,128,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-16 text-center text-white group">
            <span className="text-gradient-hover">
              专业技能
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group glass-card p-10 rounded-[2rem] hover-lift">
              <Code2 className="w-12 h-12 text-teal-400 mb-6 group-hover:scale-110 transition-transform group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-teal-400 transition-colors">前端开发</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">React, Vue, TypeScript, Tailwind CSS</p>
            </div>
            <div className="group glass-card p-10 rounded-[2rem] hover-lift">
              <BookOpen className="w-12 h-12 text-teal-400 mb-6 group-hover:scale-110 transition-transform group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-teal-400 transition-colors">后端开发</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Node.js, Python, PostgreSQL, Redis</p>
            </div>
            <div className="group glass-card p-10 rounded-[2rem] hover-lift">
              <Briefcase className="w-12 h-12 text-teal-400 mb-6 group-hover:scale-110 transition-transform group-hover:animate-pulse" />
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-teal-400 transition-colors">开发工具</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">Git, Docker, AWS, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 px-4 bg-black relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,128,128,0.2),transparent)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,128,128,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto relative">
          <h2 className="text-4xl font-bold mb-16 text-center text-white group">
            <span className="text-gradient-hover">
              项目展示
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative overflow-hidden rounded-[2rem] glass-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                alt="项目1"
                className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-semibold mb-2 text-white flex items-center gap-2">
                    电商平台
                    <ExternalLink className="w-5 h-5 inline-block group-hover:rotate-45 transition-transform" />
                  </h3>
                  <p className="text-gray-300">基于React和Node.js的现代电商解决方案</p>
                </div>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[2rem] glass-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                alt="项目2"
                className="w-full aspect-video object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-2xl font-semibold mb-2 text-white flex items-center gap-2">
                    数据分析平台
                    <ExternalLink className="w-5 h-5 inline-block group-hover:rotate-45 transition-transform" />
                  </h3>
                  <p className="text-gray-300">企业级数据可视化和分析系统</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-blue-900/30" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,128,128,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,128,128,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="glass-card p-16 rounded-[2rem] group">
            <h2 className="text-4xl font-bold mb-8 text-white group">
              <span className="text-gradient-hover">
                联系我
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 group-hover:text-white transition-colors">
              如果您对我的工作感兴趣，欢迎通过以下方式联系我
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-teal-500 to-blue-500 rounded-2xl hover:from-teal-600 hover:to-blue-600 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-teal-500/25 group backdrop-blur-xl"
            >
              发送邮件
              <Mail className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/80 text-gray-400 py-8 backdrop-blur-2xl border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="hover:text-teal-400 transition-colors">© 2024 Mentha的个人网站. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;