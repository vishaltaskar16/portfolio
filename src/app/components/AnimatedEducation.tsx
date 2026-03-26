import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';

const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: "Met's Institute Of Management, Adgaon, Nashik",
    period: '2024 - 2026',
    status: 'Pursuing',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: "NVP Mandal's Arts Commerce & Science College, Lasalgaon",
    period: '2021 - 2024',
    grade: 'GPA: 8.72',
  },
  {
    degree: '12th Grade (HSC)',
    institution: 'CNES Junior College, Mammad',
    period: '2020',
    grade: '60.30%',
  },
  {
    degree: '10th Grade (SSC)',
    institution: 'Chhatre New English School, Mammad',
    period: '2018',
    grade: '74%',
  },
];

const certifications = [
  {
    title: 'Machine Learning',
    provider: 'Swayam',
    period: 'Jan - Mar 2025',
    icon: Award,
  },
  {
    title: 'Java Programming',
    provider: 'MKCL',
    period: 'Oct - Dec 2023',
    icon: Award,
  },
  {
    title: 'AI: Transformative Learning',
    provider: 'TechSaksham',
    period: 'Nov - Dec 2025',
    icon: Award,
  },
];

export function AnimatedEducation() {
  return (
    <section id="education" className="py-20 px-6 bg-white relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <GraduationCap className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Education</h2>
            </motion.div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <Card className="border-l-4 border-l-blue-500 hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-lg">{edu.degree}</CardTitle>
                      <CardDescription className="text-slate-600">
                        {edu.institution}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-slate-600">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        {(edu.grade || edu.status) && (
                          <motion.span 
                            className="font-semibold text-blue-600"
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                          >
                            {edu.grade || edu.status}
                          </motion.span>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <motion.div 
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>
              <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
            </motion.div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: -5 }}
                  >
                    <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-all">
                      <CardHeader>
                        <div className="flex items-start gap-3">
                          <motion.div 
                            className="w-10 h-10 bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <Icon className="w-5 h-5 text-purple-600" />
                          </motion.div>
                          <div>
                            <CardTitle className="text-lg">{cert.title}</CardTitle>
                            <CardDescription className="text-slate-600 mt-1">
                              {cert.provider}
                            </CardDescription>
                            <div className="flex items-center gap-2 text-sm text-slate-500 mt-2">
                              <Calendar className="w-4 h-4" />
                              <span>{cert.period}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Activities Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="text-lg">Activities & Achievements</CardTitle>
                    <CardDescription>
                      <ul className="list-disc list-inside space-y-2 text-slate-700 mt-2">
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 }}
                        >
                          Participated in MET's IOM IDEATHON 2024
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.2 }}
                        >
                          Managed Telegram Channel with 800+ subscribers for PHP & Python notes and projects
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 }}
                        >
                          Trained multiple ML models using Kaggle datasets
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 }}
                        >
                          Actively contribute to programming knowledge sharing
                        </motion.li>
                      </ul>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
