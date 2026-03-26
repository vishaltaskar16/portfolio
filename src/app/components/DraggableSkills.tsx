import { Code2, Database, Wrench, Users, Brain, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'motion/react';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const skillCategories = [
  {
    icon: Code2,
    title: 'Frontend Development',
    skills: ['HTML', 'CSS', 'JavaScript', 'React Native', 'Bootstrap'],
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-l-blue-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Java', 'Python (Flask, ML Libraries)', 'PHP (Laravel)', 'Node.js'],
    color: 'from-green-500 to-green-600',
    borderColor: 'border-l-green-500',
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB Atlas', 'SQLite'],
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-l-purple-500',
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    skills: ['Neural Networks', 'CNN', 'RNN', 'Kaggle', 'Data Analysis'],
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-l-pink-500',
  },
  {
    icon: Wrench,
    title: 'Developer Tools',
    skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Cloud APIs', 'Tableau'],
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-l-orange-500',
  },
  {
    icon: Users,
    title: 'Soft Skills',
    skills: ['Adaptability', 'Problem Solving', 'Team Collaboration', 'Communication'],
    color: 'from-teal-500 to-teal-600',
    borderColor: 'border-l-teal-500',
  },
];

const DraggableSkillCard = ({ category, index, moveCard }: any) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'SKILL_CARD',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'SKILL_CARD',
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveCard(item.index, index);
        item.index = index;
      }
    },
  });

  const Icon = category.icon;

  return (
    <motion.div
      ref={(node) => drag(drop(node))}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, rotate: isDragging ? 5 : 0 }}
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'grab' }}
    >
      <Card className={`hover:shadow-2xl transition-all border-l-4 ${category.borderColor} bg-gradient-to-br from-white to-slate-50 h-full`}>
        <CardHeader>
          <motion.div 
            className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
          <CardTitle className="text-xl">{category.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill: string, skillIndex: number) => (
              <motion.div
                key={skillIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: skillIndex * 0.05 }}
                whileHover={{ scale: 1.1, y: -2 }}
              >
                <Badge variant="secondary" className="text-sm cursor-pointer hover:bg-blue-100 transition-colors">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export function DraggableSkills() {
  const [categories, setCategories] = useState(skillCategories);

  const moveCard = (fromIndex: number, toIndex: number) => {
    const updatedCategories = [...categories];
    const [movedItem] = updatedCategories.splice(fromIndex, 1);
    updatedCategories.splice(toIndex, 0, movedItem);
    setCategories(updatedCategories);
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
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
            Skills & Expertise
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            A comprehensive set of technical and soft skills developed through education, projects, and professional experience
          </p>
          <p className="text-center text-sm text-blue-600 mb-12 font-medium">
            💡 Tip: Drag and drop the cards to rearrange them!
          </p>
        </motion.div>
        
        <DndProvider backend={HTML5Backend}>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <DraggableSkillCard
                key={category.title}
                category={category}
                index={index}
                moveCard={moveCard}
              />
            ))}
          </div>
        </DndProvider>
      </div>
    </section>
  );
}
