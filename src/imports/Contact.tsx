import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

export function Contact() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    await fetch("https://formsubmit.co/ajax/vishaltaskar1602@gmail.com", {
      method: "POST",
      body: data
    });

    alert("Your message has been sent. You will get reply soon.");

    form.reset();
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Get In Touch
        </h2>

        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new opportunities and projects. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LEFT SIDE SAME */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Contact Information</h3>

            <p className="text-lg text-slate-600 mb-8">
              Whether you want to discuss a project, collaboration, or just want to connect, I'd love to hear from you.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Email</h4>
                  <a href="mailto:vishaltaskar1602@gmail.com" className="text-blue-600 hover:underline">
                    vishaltaskar1602@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Phone</h4>
                  <a href="tel:+918975591487" className="text-blue-600 hover:underline">
                    +91 8975591487
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-1">Location</h4>
                  <p className="text-slate-600">Nashik, Maharashtra, India</p>
                </div>
              </div>

            </div>
          </div>

          {/* FORM */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>

            <CardContent>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >

                <input type="hidden" name="_subject" value="New Portfolio Message" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="space-y-2">
                  <Label>Name *</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email *</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label>Message *</Label>
                  <Textarea
                    name="message"
                    rows={5}
                    placeholder="Enter your message"
                    required
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

              </form>

            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}