import { Github, Linkedin, Mail, Heart, Send } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold mb-4 text-xl">Vishal Taskar</h3>
            <p className="text-sm leading-relaxed">
              Python Developer & Full Stack Developer passionate about creating innovative solutions with Machine Learning and Modern Web Technologies.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-white transition-colors">
                  Education
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Projects</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a 
                  href="https://github.com/vishaltaskar16/MoodBeats" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  MoodBeats
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/vishaltaskar16/Life-Guard-Safty-App" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Life Guard App
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/vishaltaskar16/Online-Street-Market" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  City Street Mart
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/vishaltaskar16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vishaltaskar16"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vishaltaskar1602@gmail.com"
                className="hover:text-white transition-colors"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/cprogramingbyvishal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                title="Telegram Channel"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm">
              <a 
                href="https://t.me/cprogramingbyvishal" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Join my Telegram channel
              </a>
              <br />
              <span className="text-slate-500">800+ subscribers</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Vishal Taskar © 2026
          </p>
          <p className="text-slate-500 mt-2">
            Python Developer | Full Stack Developer | ML Enthusiast
          </p>
        </div>
      </div>
    </footer>
  );
}