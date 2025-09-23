import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import FileUpload from '@/components/FileUpload';

export function Community() {
  const [rating, setRating] = useState(0);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Jane Doe",
      rating: 5,
      title: "Absolutely love this dress!",
      content: "The quality is exceptional and the fit is perfect. I received so many compliments when I wore it to dinner. Will definitely be ordering more!",
      date: "2 days ago",
      verified: true
    },
    {
      id: 2,
      name: "John Smith",
      rating: 4,
      title: "Great quality, but runs a bit small",
      content: "The craftsmanship is impressive and the colors are even more vibrant in person. I'd recommend sizing up if you're between sizes.",
      date: "1 week ago",
      verified: true
    },
    {
      id: 3,
      name: "Amina Johnson",
      rating: 5,
      title: "Perfect for summer events",
      content: "This dress is exactly what I was looking for. The fabric is breathable and the design is stunning. I've already worn it three times!",
      date: "3 weeks ago",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-gray-400'}`} 
        viewBox="0 0 20 20" 
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const handleFileChange = (files: File[]) => {
    setUploadedFiles(files);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Add uploaded files to form data
    uploadedFiles.forEach((file, index) => {
      formData.append(`image-${index}`, file);
    });
    
    // Here you would typically send the form data to your backend
    console.log('Form data:', {
      name: formData.get('review-name'),
      rating: rating,
      title: formData.get('review-title'),
      content: formData.get('review-content'),
      images: uploadedFiles.map(file => file.name)
    });
    
    // Show success message
    alert('Review submitted successfully!');
    
    // Reset form
    (e.target as HTMLFormElement).reset();
    setRating(0);
    setUploadedFiles([]);
  };

  return (
    <div className="bg-background text-foreground py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold font-sans mb-2 text-center">Community</h1>
        <p className="text-xl font-merienda text-foreground/80 mb-12 text-center max-w-2xl mx-auto">
          Join our community of fashion enthusiasts and share your experiences
        </p>
        
        <div className="max-w-4xl mx-auto">
          {/* Community Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-card/10 backdrop-blur-md rounded-xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-teal-500 mb-2">12.5K</div>
              <div className="font-merienda text-foreground/80">Community Members</div>
            </div>
            <div className="bg-card/10 backdrop-blur-md rounded-xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-teal-500 mb-2">8.7K</div>
              <div className="font-merienda text-foreground/80">Product Reviews</div>
            </div>
            <div className="bg-card/10 backdrop-blur-md rounded-xl p-6 text-center border border-border">
              <div className="text-3xl font-bold text-teal-500 mb-2">94%</div>
              <div className="font-merienda text-foreground/80">Satisfaction Rate</div>
            </div>
          </div>
          
          {/* Leave a Review */}
          <div className="bg-card/10 backdrop-blur-md rounded-xl p-6 mb-12 border border-border">
            <h2 className="text-2xl font-bold font-sans mb-6">Share Your Experience</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="review-name" className="block text-sm font-medium text-foreground mb-1">Name</Label>
                <Input 
                  type="text" 
                  id="review-name" 
                  name="review-name"
                  className="w-full px-3 py-2 bg-background/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-foreground" 
                  placeholder="Your name" 
                  required
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-foreground mb-1">Rating</Label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button 
                      key={star}
                      type="button" 
                      className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-400'} hover:text-yellow-400 focus:outline-none`} 
                      onClick={() => setRating(star)}
                      aria-label={`${star} star${star > 1 ? 's' : ''} out of 5`}
                    >
                      ★
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <Label htmlFor="review-title" className="block text-sm font-medium text-foreground mb-1">Title</Label>
                <Input 
                  type="text" 
                  id="review-title" 
                  name="review-title"
                  className="w-full px-3 py-2 bg-background/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-foreground" 
                  placeholder="Give your review a title" 
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="review-content" className="block text-sm font-medium text-foreground mb-1">Review</Label>
                <Textarea 
                  id="review-content" 
                  name="review-content"
                  rows={4} 
                  className="w-full px-3 py-2 bg-background/20 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-foreground" 
                  placeholder="Share your experience with this product" 
                  required
                />
              </div>
              
              <div>
                <Label className="block text-sm font-medium text-foreground mb-1">Upload Image (Optional)</Label>
                <FileUpload 
                  onFileChange={handleFileChange}
                  maxSizeMB={5}
                  accept="image/svg+xml,image/png,image/jpeg,image/jpg,image/gif"
                />
                {uploadedFiles.length > 0 && (
                  <div className="mt-2 text-sm text-foreground/80">
                    {uploadedFiles.length} file(s) selected
                  </div>
                )}
              </div>
              
              <div>
                <Button 
                  type="submit" 
                  className="px-6 py-3 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda"
                  style={{ backgroundColor: '#234645' }}
                >
                  Submit Review
                </Button>
              </div>
            </form>
          </div>
          
          {/* Customer Reviews */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-sans mb-6 text-center">Customer Reviews</h2>
            
            {reviews.map((review) => (
              <div key={review.id} className="bg-card/10 backdrop-blur-md rounded-xl p-6 border border-border">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1 mr-4">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-foreground/80">{review.date}</span>
                  {review.verified && (
                    <span className="ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-500/20 text-teal-500">
                      Verified Purchase
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold font-sans mb-2">{review.title}</h3>
                <p className="text-foreground/90 mb-4 font-merienda">{review.content}</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center mr-3">
                    <span className="font-semibold">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}