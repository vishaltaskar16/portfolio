import { Github, Linkedin, Mail, Heart, Send, Sparkles, Code2, Zap } from 'lucide-react';
import { motion } from 'motion/react';

const socialLinks = [
  { href: 'https://github.com/vishaltaskar16', Icon: Github, title: 'GitHub', color: 'hover:text-purple-400' },
  { href: 'https://linkedin.com/in/vishaltaskar16', Icon: Linkedin, title: 'LinkedIn', color: 'hover:text-blue-400' },
  { href: 'mailto:vishaltaskar1602@gmail.com', Icon: Mail, title: 'Email', color: 'hover:text-green-400' },
  { href: 'https://t.me/cprogramingbyvishal', Icon: Send, title: 'Telegram Channel', color: 'hover:text-cyan-400' },
];

const FloatingParticle = ({ delay, x, y, Icon }: any) => (
  <motion.div
    className="absolute text-white/5"
    initial={{ x, y, opacity: 0 }}
    animate={{
      x: [x, x + 20, x - 10, x],
      y: [y, y - 30, y + 20, y],
      opacity: [0.05, 0.1, 0.05],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 15,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon size={30} />
  </motion.div>
);

export function AnimatedFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(to bottom right, #0f172a, #1e1b4b, #1e293b)',
            'linear-gradient(to bottom right, #1e293b, #312e81, #0f172a)',
            'linear-gradient(to bottom right, #0f172a, #1e1b4b, #1e293b)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Particles */}
      <FloatingParticle Icon={Code2} delay={0} x={100} y={50} />
      <FloatingParticle Icon={Sparkles} delay={2} x={300} y={100} />
      <FloatingParticle Icon={Zap} delay={4} x={500} y={80} />
      <FloatingParticle Icon={Code2} delay={1} x={window.innerWidth - 200} y={60} />
      <FloatingParticle Icon={Sparkles} delay={3} x={window.innerWidth - 400} y={120} />

      {/* Animated Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Gradient Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          background: [
            'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)',
            'radial-gradient(circle, rgba(147, 51, 234, 0.15), transparent)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.15), transparent)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10 py-12 px-6 text-slate-300">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-white font-bold mb-4 text-2xl"
              whileHover={{ scale: 1.05 }}
            >
              Vishal Taskar
            </motion.h3>
            <p className="text-sm leading-relaxed text-slate-400">
              Python Developer & Full Stack Developer passionate about creating innovative solutions with Machine Learning and Modern Web Technologies.
            </p>
            
            {/* Animated decorative line */}
            <motion.div 
              className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-4"
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {['About', 'Skills', 'Projects', 'Education', 'Contact'].map((link, index) => (
                <motion.li 
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, color: '#60a5fa' }}
                >
                  <a 
                    href={`#${link.toLowerCase()}`} 
                    className="hover:text-blue-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-blue-500 rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Featured Projects</h3>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'MoodBeats', url: 'https://github.com/vishaltaskar16/MoodBeats' },
                { name: 'Life Guard App', url: 'https://github.com/vishaltaskar16/Life-Guard-Safty-App' },
                { name: 'City Street Mart', url: 'https://github.com/vishaltaskar16/Online-Street-Market' },
              ].map((project, index) => (
                <motion.li
                  key={project.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ x: 5, color: '#a78bfa' }}
                >
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-purple-500 rounded-full"
                      whileHover={{ scale: 1.5 }}
                    />
                    {project.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4 text-lg">Connect With Me</h3>
            <div className="flex gap-3 mb-6 flex-wrap">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className={`p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 transition-all ${social.color}`}
                  title={social.title}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -5,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <social.Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-xl border border-blue-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <p className="text-sm mb-2">
                <a 
                  href="https://t.me/cprogramingbyvishal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 transition-colors font-medium"
                >
                  Join my Telegram channel
                </a>
              </p>
              <div className="flex items-center gap-2">
                <motion.span 
                  className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-xs font-semibold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  800+ subscribers
                </motion.span>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-slate-800 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="flex items-center justify-center gap-2 flex-wrap">
              Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>{' '}
              by <span className="text-white font-semibold">Vishal Taskar</span> © 2026
            </p>
            
            <motion.p 
              className="text-slate-500"
              whileHover={{ color: '#94a3b8' }}
            >
              Python Developer | Full Stack Developer | ML Enthusiast
            </motion.p>
          </div>
          
          {/* Animated bottom line */}
          <motion.div 
            className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mt-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.5 }}
            style={{ originX: 0 }}
          />
        </motion.div>
      </div>
    </footer>
  );
}
