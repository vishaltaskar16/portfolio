import { ImageWithFallback } from './figma/ImageWithFallback';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1706077009991-ef8e611aff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBuYXNoaWslMjBpbmRpYXxlbnwxfHx8fDE3NzQ0MzAyMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Developer workspace"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <p className="text-lg text-slate-700 mb-6">
              I'm a passionate Python Developer and Full Stack Developer currently working as a Python Developer Trainee at <strong>Cloudcatch LLC</strong> (Nov 2025 - Present). I specialize in developing Python-based applications, automation tasks, and writing clean, efficient, and maintainable code for real-world projects.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              I hold a Bachelor's degree in Computer Science with a GPA of 8.72 from NVP Mandal's Arts Commerce & Science College, Lasalgaon, and I'm currently pursuing my Master of Computer Applications (MCA) at Met's Institute Of Management, Nashik.
            </p>
            <p className="text-lg text-slate-700">
              My expertise spans across Machine Learning, Full Stack Development, and Mobile App Development. I'm particularly interested in AI/ML technologies and have completed certifications in Machine Learning, Java Programming, and AI: Transformative Learning.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Experience</h3>
            <p className="text-slate-700">Python Developer Trainee at Cloudcatch LLC</p>
            <p className="text-sm text-slate-600 mt-1">Nov 2025 - Present</p>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Education</h3>
            <p className="text-slate-700">MCA (Pursuing)</p>
            <p className="text-sm text-slate-600 mt-1">Met's Institute, Nashik</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
              <Award className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Achievements</h3>
            <p className="text-slate-700">800+ Telegram subscribers</p>
            <p className="text-sm text-slate-600 mt-1">PHP & Python knowledge sharing</p>
          </div>
        </div>
      </div>
    </section>
  );
}