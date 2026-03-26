import { GraduationCap, Award, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

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

export function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Education</h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="border-l-4 border-l-blue-500">
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
                        <span className="font-semibold text-blue-600">
                          {edu.grade || edu.status}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Award className="w-6 h-6 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Certifications</h2>
            </div>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <Card key={index} className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-purple-600" />
                        </div>
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
                );
              })}

              {/* Activities Section */}
              <Card className="border-l-4 border-l-green-500 bg-green-50">
                <CardHeader>
                  <CardTitle className="text-lg">Activities & Achievements</CardTitle>
                  <CardDescription>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 mt-2">
                      <li>Participated in MET's IOM IDEATHON 2024</li>
                      <li>Managed Telegram Channel with 800+ subscribers for PHP & Python notes and projects</li>
                      <li>Trained multiple ML models using Kaggle datasets</li>
                      <li>Actively contribute to programming knowledge sharing</li>
                    </ul>
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
