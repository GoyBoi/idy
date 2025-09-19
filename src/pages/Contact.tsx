import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">Contact Us</h1>
        <p className="text-xl font-merienda text-white/80 mb-12 text-center max-w-2xl mx-auto">
          We'd love to hear from you. Get in touch with our team.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold font-sans mb-6">Get In Touch</h2>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">Phone</h3>
                  <p className="font-merienda text-white/80">+27 79 042 7032</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">Email</h3>
                  <p className="font-merienda text-white/80">mmwafrika.prideclothing@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">WhatsApp</h3>
                  <p className="font-merienda text-white/80">
                    <a href="https://wa.me/27790427032" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
                      Chat with us on WhatsApp: +27 79 042 7032
                    </a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                  <MessageCircle className="h-6 w-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">Order via WhatsApp</h3>
                  <p className="font-merienda text-white/80">
                    <a href="https://wa.me/27790427032" target="_blank" rel="noopener noreferrer" className="hover:text-teal-500 transition-colors">
                      Place your order via WhatsApp
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold font-sans mb-4">Business Hours</h3>
              <ul className="font-merienda text-white/90 space-y-2">
                <li className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold font-sans mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 mt-8">
              <div className="flex flex-col gap-4">
                <div>
                  <Label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-600 focus:border-teal-500" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-600 focus:border-teal-500" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</Label>
                  <Input 
                    type="text" 
                    id="subject" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-black/50 border-gray-600 focus:border-teal-500" 
                    required 
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5} 
                    className="bg-black/50 border-gray-600 focus:border-teal-500" 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="outline"
                  className="bg-teal-900 hover:bg-teal-800 text-white"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}