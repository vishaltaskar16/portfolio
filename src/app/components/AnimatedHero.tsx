import { Github, Linkedin, Mail, ArrowDown, Phone, Code2, Database, Cpu, Sparkles } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

const FloatingIcon = ({ Icon, delay, x, y }: any) => (
  <motion.div
    className="absolute text-blue-200/20"
    initial={{ x, y, opacity: 0 }}
    animate={{
      x: [x, x + 30, x - 20, x],
      y: [y, y - 40, y + 30, y],
      opacity: [0.2, 0.5, 0.3, 0.2],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <Icon size={40} />
  </motion.div>
);

export function AnimatedHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50 
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6 py-20 overflow-hidden">
      {/* Dynamic Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"
        animate={{
          background: [
            'linear-gradient(to bottom right, #eff6ff, #fae8ff, #fce7f3)',
            'linear-gradient(to bottom right, #dbeafe, #e9d5ff, #fbcfe8)',
            'linear-gradient(to bottom right, #bfdbfe, #d8b4fe, #f9a8d4)',
            'linear-gradient(to bottom right, #dbeafe, #e9d5ff, #fbcfe8)',
            'linear-gradient(to bottom right, #eff6ff, #fae8ff, #fce7f3)',
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Background Icons */}
      <FloatingIcon Icon={Code2} delay={0} x={100} y={100} />
      <FloatingIcon Icon={Database} delay={1} x={window.innerWidth - 200} y={150} />
      <FloatingIcon Icon={Cpu} delay={2} x={200} y={window.innerHeight - 200} />
      <FloatingIcon Icon={Sparkles} delay={1.5} x={window.innerWidth - 300} y={window.innerHeight - 300} />
      
      {/* Dynamic Gradient Orbs */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.2, 1],
          background: [
            'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
            'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
            'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
            'radial-gradient(circle, rgba(147, 51, 234, 0.3), transparent)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          x: -mousePosition.x * 2,
          y: -mousePosition.y * 2,
          scale: [1.2, 1, 1.2],
          background: [
            'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
            'radial-gradient(circle, rgba(236, 72, 153, 0.3), transparent)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.3), transparent)',
            'radial-gradient(circle, rgba(168, 85, 247, 0.3), transparent)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      {/* Animated Grid Pattern */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
        animate={{
          backgroundPosition: ['0px 0px', '50px 50px'],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          className="mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Hi, I'm{' '}
            <motion.span 
              className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Vishal Taskar
            </motion.span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-slate-700 mb-2">
              Python Developer | Full Stack Developer | ML Enthusiast
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Currently working as Python Developer Trainee at Cloudcatch LLC, specializing in Python, Machine Learning, and Full Stack Development
            </p>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex gap-4 justify-center mb-8 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="default" size="lg" onClick={() => scrollToSection('projects')}>
              View My Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')}>
              Get In Touch
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="outline" size="lg" asChild>
              <a href="/VISHAL_RESUME.pdf" download>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div 
          className="flex gap-6 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {[
            { href: 'https://github.com/vishaltaskar16', Icon: Github, title: 'GitHub' },
            { href: 'https://linkedin.com/in/vishaltaskar16', Icon: Linkedin, title: 'LinkedIn' },
            { href: 'mailto:vishaltaskar1602@gmail.com', Icon: Mail, title: 'Email' },
            { href: 'tel:+918975591487', Icon: Phone, title: 'Phone' },
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-slate-600 hover:text-slate-900 transition-colors p-3 rounded-full bg-white/50 backdrop-blur-sm hover:bg-white/80"
              title={social.title}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + idx * 0.1 }}
            >
              <social.Icon className="w-6 h-6" />
            </motion.a>
          ))}
        </motion.div>

        <motion.button
          onClick={() => scrollToSection('about')}
          className="mt-16 text-slate-400 hover:text-slate-600 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8 mx-auto" />
        </motion.button>
      </div>
    </section>
  );
}