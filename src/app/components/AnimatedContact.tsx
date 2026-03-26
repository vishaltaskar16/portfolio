import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'motion/react';
import { useState } from 'react';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'vishaltaskar1602@gmail.com',
    href: 'mailto:vishaltaskar1602@gmail.com',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 8975591487',
    href: 'tel:+918975591487',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Nashik, Maharashtra, India',
    href: null,
    color: 'from-purple-500 to-purple-600',
  },
];

export function AnimatedContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/vishaltaskar1602@gmail.com", {
        method: "POST",
        body: data
      });

      alert("Your message has been sent. You will get reply soon.");
      form.reset();
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      alert("There was an error sending your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Dynamic Animated Background */}
      <motion.div 
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(to bottom right, #f8fafc, #eff6ff, #faf5ff)',
            'linear-gradient(to bottom right, #f1f5f9, #dbeafe, #f3e8ff)',
            'linear-gradient(to bottom right, #e0f2fe, #c7d2fe, #fae8ff)',
            'linear-gradient(to bottom right, #f1f5f9, #dbeafe, #f3e8ff)',
            'linear-gradient(to bottom right, #f8fafc, #eff6ff, #faf5ff)',
          ],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
          background: [
            'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
            'radial-gradient(circle, rgba(147, 51, 234, 0.2), transparent)',
            'radial-gradient(circle, rgba(59, 130, 246, 0.2), transparent)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0],
          background: [
            'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)',
            'radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent)',
            'radial-gradient(circle, rgba(168, 85, 247, 0.2), transparent)',
          ],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center">
            Get In Touch
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto text-lg">
            I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>

            <p className="text-lg text-slate-600 mb-8">
              Whether you want to discuss a project, collaboration, or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div 
                    className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <info.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1 text-lg">{info.title}</h4>
                    {info.href ? (
                      <a 
                        href={info.href} 
                        className="text-blue-600 hover:text-blue-700 hover:underline transition-colors text-base"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-slate-600 text-base">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="shadow-2xl border-2 border-blue-100 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>

              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="New Portfolio Message" />
                  <input type="hidden" name="_captcha" value="false" />

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <Label className="text-base font-medium">Name *</Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Input
                        name="name"
                        type="text"
                        placeholder="Enter your name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 text-base border-2 focus:border-blue-500 transition-all"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <Label className="text-base font-medium">Email *</Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 text-base border-2 focus:border-blue-500 transition-all"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <Label className="text-base font-medium">Message *</Label>
                    <motion.div whileFocus={{ scale: 1.01 }}>
                      <Textarea
                        name="message"
                        rows={6}
                        placeholder="Enter your message"
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="text-base border-2 focus:border-blue-500 transition-all resize-none"
                      />
                    </motion.div>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            className="mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <Send className="w-5 h-5" />
                          </motion.div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}