import { ImageWithFallback } from './figma/ImageWithFallback';
import { Briefcase, GraduationCap, Award, Sparkles, TrendingUp, Users2 } from 'lucide-react';
import { motion } from 'motion/react';

const stats = [
  {
    icon: Briefcase,
    title: 'Experience',
    description: 'Python Developer Trainee at Cloudcatch LLC',
    period: 'Nov 2025 - Present',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    iconBg: 'from-blue-400 to-blue-600',
    particles: [Sparkles, TrendingUp],
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'MCA (Pursuing)',
    period: "Met's Institute, Nashik",
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    iconBg: 'from-purple-400 to-purple-600',
    particles: [Sparkles, Users2],
  },
  {
    icon: Award,
    title: 'Achievements',
    description: '800+ Telegram subscribers',
    period: 'PHP & Python knowledge sharing',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    iconBg: 'from-green-400 to-green-600',
    particles: [Sparkles, TrendingUp],
  },
];

export function AnimatedAbout() {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-purple-50"
        animate={{
          background: [
            'linear-gradient(to bottom right, #ffffff, #eff6ff, #faf5ff)',
            'linear-gradient(to bottom right, #fafafa, #dbeafe, #f3e8ff)',
            'linear-gradient(to bottom right, #ffffff, #eff6ff, #faf5ff)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
          background: [
            'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
            'radial-gradient(circle, rgba(147, 51, 234, 0.15), transparent)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.1), transparent)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          className="text-4xl font-bold text-slate-900 mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Decorative Elements around image */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-blue-200/50 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-200/50 rounded-full blur-2xl"
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.8, 0.5, 0.8] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Replace this src with /images/vishal-photo.png when you upload your photo */}
              <ImageWithFallback
                src="/images/vishal-photo.png"
                alt="Vishal Taskar - Python Developer"
                className="rounded-2xl shadow-2xl w-[450px] h-[500px] object-cover border-4 border-white"
              />
              
              {/* Overlay gradient on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-lg text-slate-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              I'm a passionate <strong className="text-blue-600">Python Developer</strong> and <strong className="text-purple-600">Full Stack Developer</strong> currently working as a Python Developer Trainee at <strong className="text-blue-600">Cloudcatch LLC</strong> (Nov 2025 - Present). I specialize in developing Python-based applications, automation tasks, and writing clean, efficient, and maintainable code for real-world projects.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-700 mb-6 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              I hold a Bachelor's degree in Computer Science with a <strong className="text-green-600">GPA of 8.72</strong> from NVP Mandal's Arts Commerce & Science College, Lasalgaon, and I'm currently pursuing my Master of Computer Applications (MCA) at Met's Institute Of Management, Nashik.
            </motion.p>
            <motion.p 
              className="text-lg text-slate-700 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              My expertise spans across <strong className="text-pink-600">Machine Learning</strong>, <strong className="text-blue-600">Full Stack Development</strong>, and <strong className="text-purple-600">Mobile App Development</strong>. I'm particularly interested in AI/ML technologies and have completed certifications in Machine Learning, Java Programming, and AI: Transformative Learning.
            </motion.p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const ParticleIcon1 = stat.particles[0];
            const ParticleIcon2 = stat.particles[1];
            
            return (
              <motion.div
                key={index}
                className={`${stat.bgColor} p-8 rounded-2xl relative overflow-hidden group shadow-lg hover:shadow-2xl border border-white/50`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Animated particles in background */}
                <motion.div
                  className="absolute top-2 right-2 text-white/20"
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <ParticleIcon1 className="w-8 h-8" />
                </motion.div>
                <motion.div
                  className="absolute bottom-2 left-2 text-white/20"
                  animate={{ 
                    rotate: -360,
                    scale: [1.2, 1, 1.2],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <ParticleIcon2 className="w-6 h-6" />
                </motion.div>

                {/* Gradient overlay on hover */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
                
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${stat.iconBg} rounded-2xl flex items-center justify-center mb-4 shadow-xl relative z-10`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">{stat.title}</h3>
                <p className="text-slate-700 font-medium mb-2 relative z-10">{stat.description}</p>
                <motion.p 
                  className="text-sm text-slate-600 relative z-10"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 1 }}
                >
                  {stat.period}
                </motion.p>
                
                {/* Animated border glow effect */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`}
                  style={{
                    background: `linear-gradient(45deg, transparent, ${stat.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : stat.color.includes('purple') ? 'rgba(147, 51, 234, 0.3)' : 'rgba(34, 197, 94, 0.3)'}, transparent)`,
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}