import { Code2, Database, Wrench, Users, Brain, Server } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React Native', 'Bootstrap'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Java', 'Python (Flask, ML Libraries)', 'PHP (Laravel)', 'Node.js'],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB Atlas', 'SQLite'],
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Neural Networks', 'CNN', 'RNN', 'Kaggle', 'Data Analysis'],
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Cloud APIs', 'Tableau'],
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Adaptability', 'Problem Solving', 'Team Collaboration', 'Communication'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Skills & Expertise
        </h2>
        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          A comprehensive set of technical and soft skills developed through education, projects, and professional experience
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-sm">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}