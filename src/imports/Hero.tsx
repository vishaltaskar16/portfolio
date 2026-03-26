import { Github, Linkedin, Mail, ArrowDown, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
            Hi, I'm <span className="text-blue-600">Vishal Taskar</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-2">
            Python Developer | Full Stack Developer | ML Enthusiast
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Currently working as Python Developer Trainee at Cloudcatch LLC, specializing in Python, Machine Learning, and Full Stack Development
          </p>
        </div>

        <div className="flex gap-4 justify-center mb-8 flex-wrap">
          <Button variant="default" size="lg" onClick={() => scrollToSection('projects')}>
            View My Work
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
            Get In Touch
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="/VISHAL_RESUME.pdf" download>
              Download Resume
            </a>
          </Button>
        </div>

        <div className="flex gap-6 justify-center">
          <a
            href="https://github.com/vishaltaskar16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            title="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/vishaltaskar16"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:vishaltaskar1602@gmail.com"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            title="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="tel:+918975591487"
            className="text-slate-600 hover:text-slate-900 transition-colors"
            title="Phone"
          >
            <Phone className="w-6 h-6" />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="mt-16 text-slate-400 hover:text-slate-600 transition-colors animate-bounce"
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </button>
      </div>
    </section>
  );
}
