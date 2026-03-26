import { Github, ExternalLink, Calendar, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

const projects = [
  {
    title: 'MoodBeats',
    description: 'An intelligent music recommendation system that suggests songs based on facial emotion detection. Uses deep learning models for real-time emotion recognition.',
    image: '/images/moodbeats-project.png', // Replace with your project screenshot
    technologies: ['Python', 'CNN', 'Flask', 'TensorFlow', 'OpenCV'],
    github: 'https://github.com/vishaltaskar16/MoodBeats',
    date: 'Jul 2024',
    color: 'from-pink-500 to-purple-500',
  },
  {
    title: 'Life Guard Safety App',
    description: 'A comprehensive women safety application with real-time location sharing, emergency SOS, and community features. Built with React Native for cross-platform support.',
    image: '/images/lifeguard-project.png', // Replace with your project screenshot
    technologies: ['React Native', 'PHP', 'MySQL', 'Google Maps API'],
    github: 'https://github.com/vishaltaskar16/Life-Guard-Safty-App',
    date: 'Apr 2024',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'City Street Mart',
    description: 'A full-stack e-commerce platform for local street vendors. Features include product management, cart system, and secure payment integration.',
    image: '/images/citymart-project.png', // Replace with your project screenshot
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap', 'JavaScript'],
    github: 'https://github.com/vishaltaskar16/Online-Street-Market',
    date: 'Mar 2024',
    color: 'from-green-500 to-emerald-500',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-br from-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #3b82f6 25%, transparent 25%), linear-gradient(-45deg, #3b82f6 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #3b82f6 75%), linear-gradient(-45deg, transparent 75%, #3b82f6 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
            Featured Projects
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            A showcase of my recent work in Machine Learning, Full Stack Development, and Mobile Applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <Card className="overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                  <CardDescription className="text-slate-700">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: techIndex * 0.05 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex-1">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}