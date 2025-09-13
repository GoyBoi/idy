import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

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
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">Phone</h3>
                  <p className="font-merienda text-white/80">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">Email</h3>
                  <p className="font-merienda text-white/80">info@mmwafrika.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-teal-500/20 p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold font-sans mb-1">Office</h3>
                  <p className="font-merienda text-white/80">123 Fashion Street<br />New York, NY 10001</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
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
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
              <div className="mb-6">
                <Label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="subject" className="block text-sm font-medium text-white mb-1">Subject</Label>
                <Input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" 
                  required 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="message" className="block text-sm font-medium text-white mb-1">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5} 
                  className="w-full px-3 py-2 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white" 
                  required 
                />
              </div>
              
              <Button 
                type="submit" 
                className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#234645] transition-all duration-300 font-merienda"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}