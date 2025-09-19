import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import { useNavigate, Link } from 'react-router-dom';

export function Home() {
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Sample product data for featured products
  const featuredProducts = [
    {
      id: 1,
      name: "Handcrafted Necklace",
      description: "Beautiful beads and charms",
      price: 29.99,
      image: "/assets/images/Medium/1000006827.webp"
    },
    {
      id: 2,
      name: "Designer Handbag",
      description: "Elegant and spacious",
      price: 89.99,
      image: "/assets/images/Medium/1000006833.webp"
    },
    {
      id: 3,
      name: "Traditional Dress",
      description: "Authentic African design",
      price: 129.99,
      image: "/assets/images/Large/1000016728.webp"
    },
    {
      id: 4,
      name: "Complete Outfit",
      description: "Dress with matching accessories",
      price: 199.99,
      image: "/assets/images/Large/1000016808.webp"
    }
  ];

  // Sample promotions data
  const promotions = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Up to 50% off on selected items",
      image: "/assets/images/Large/1000016812.webp"
    },
    {
      id: 2,
      title: "New Arrivals",
      description: "Check out our latest collection",
      image: "/assets/images/Medium/1000006881.webp"
    }
  ];

  // Sample community posts
  const communityPosts = [
    {
      id: 1,
      username: "Amina_K",
      image: "/assets/images/Medium/1000006827.webp",
      caption: "Loving my new dress from Mmwafrika! Perfect for summer events."
    },
    {
      id: 2,
      username: "Joseph_M",
      image: "/assets/images/Medium/1000006833.webp",
      caption: "The quality of these accessories is outstanding!"
    },
    {
      id: 3,
      username: "Fatima_S",
      image: "/assets/images/Large/1000016728.webp",
      caption: "Just received my order. Can't wait to show it off!"
    }
  ];

  // Sample testimonials
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Fashion Blogger",
      content: "Mmwafrika's collection perfectly blends traditional African aesthetics with modern design. Their pieces are always conversation starters!",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Style Influencer",
      content: "The craftsmanship is exceptional. Each piece tells a story and celebrates African heritage in a contemporary way.",
      avatar: "MC"
    }
  ];

  const handleAddToCart = (product: typeof featuredProducts[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleToggleWishlist = (product: typeof featuredProducts[0]) => {
    addToWishlist({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      setEmail('');
    }
  };

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 bg-gray-800">
          {/* Placeholder for hero image */}
          <div className="w-full h-full bg-gradient-to-r from-teal-500/20 to-black/50"></div>
        </div>
        
        {/* Overlay content */}
        <div className="relative z-10 text-center px-4 flex flex-col items-center justify-center h-full">
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-white text-center px-4 mb-6">
            Discover Unique African Fashion
          </h1>
          <p className="text-xl md:text-2xl font-merienda text-white mb-8 max-w-2xl mx-auto">
            Explore our curated collection of authentic African-inspired clothing and accessories
          </p>
          <Button 
            className="px-8 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_#234645] font-merienda"
            onClick={() => navigate('/shop')}
          >
            Shop Collection
          </Button>
        </div>
      </section>
      
      {/* Promotional Banner */}
      <section className="container mx-auto px-4 py-8">
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-xl p-6 text-center">
          <h2 className="text-2xl font-bold font-sans mb-2">FREE SHIPPING ON ORDERS OVER $100</h2>
          <p className="font-merienda mb-4">Limited time offer. Shop now!</p>
          <Button 
            className="px-6 py-2 rounded-lg font-semibold text-white bg-black/40 backdrop-blur-sm border border-white/20 hover:scale-105 hover:bg-black/60 hover:shadow-[0_0_15px_#234645] transition-all duration-300 font-merienda"
            onClick={() => navigate('/shop')}
          >
            Shop Now
          </Button>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold font-sans mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="p-4 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
              <Link to={`/product/${product.id}`} className="block">
                <div className="aspect-[4/5] w-full mx-auto">
                  <img src={product.image} alt={`${product.name} - ${product.description}`} className="object-cover rounded-lg w-full h-full" />
                </div>
              </Link>
              <CardHeader className="p-0 mt-2 text-center">
                <CardTitle className="text-sm font-bold text-white font-merienda mt-2">
                  <Link to={`/product/${product.id}`} className="hover:text-teal-500 transition-colors">
                    {product.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-xs text-white/80 font-merienda mb-2">{product.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 mt-2 text-center">
                <span className="text-sm font-bold text-white font-merienda">${product.price.toFixed(2)}</span>
              </CardContent>
              <CardFooter className="p-0 mt-2 flex justify-between">
                <Button 
                  onClick={() => handleAddToCart(product)}
                  className="px-4 py-2 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda"
                >
                  Add to Cart
                </Button>
                <button 
                  onClick={() => handleToggleWishlist(product)}
                  className={`wishlist-btn p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-md text-white hover:scale-110 hover:shadow-[0_0_15px_#234645] transition-all duration-300 ${isInWishlist(product.id) ? 'text-red-500' : ''}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill={isInWishlist(product.id) ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Promotions Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold font-sans mb-8 text-center">Special Offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {promotions.map((promo) => (
            <Card key={promo.id} className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_#234645]">
              <div className="aspect-video w-full mx-auto mb-4">
                <img src={promo.image} alt={promo.title} className="object-cover rounded-lg w-full h-full" />
              </div>
              <CardHeader className="p-0 text-center">
                <CardTitle className="text-2xl font-bold font-sans mb-2">{promo.title}</CardTitle>
                <CardDescription className="text-lg text-white/80 font-merienda mb-4">{promo.description}</CardDescription>
              </CardHeader>
              <CardFooter className="p-0 flex justify-center">
                <Button 
                  className="px-6 py-2 rounded-lg font-semibold text-white bg-teal-500 hover:bg-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_#234645] font-merienda"
                  onClick={() => navigate('/shop')}
                >
                  Explore
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Community Showcase */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold font-sans mb-8 text-center">#MmwafrikaCommunity</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityPosts.map((post) => (
            <div key={post.id} className="rounded-xl overflow-hidden bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              <div className="aspect-square w-full">
                <img src={post.image} alt={post.username} className="object-cover w-full h-full" />
              </div>
              <div className="p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center mr-2">
                    <span className="font-semibold text-sm">{post.username.charAt(0)}</span>
                  </div>
                  <span className="font-semibold font-merienda">{post.username}</span>
                </div>
                <p className="font-merienda text-white/90">{post.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-semibold font-sans mb-8 text-center">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-6 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center mr-4">
                  <span className="font-semibold">{testimonial.avatar}</span>
                </div>
                <div>
                  <CardTitle className="text-lg font-bold font-sans">{testimonial.name}</CardTitle>
                  <CardDescription className="text-white/80 font-merienda">{testimonial.role}</CardDescription>
                </div>
              </div>
              <CardContent className="p-0">
                <p className="font-merienda text-white/90 italic">"{testimonial.content}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      {/* Newsletter Signup */}
      <section className="container mx-auto px-4 py-12">
        <Card className="p-8 rounded-xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 text-center">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-3xl font-bold font-sans mb-2">Join Our Newsletter</CardTitle>
            <CardDescription className="text-xl text-white/80 font-merienda">
              Stay updated with our latest collections and exclusive offers
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 bg-black/20 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-white placeholder-white/50"
                  required
                />
                <Button 
                  type="submit"
                  className="px-6 py-3 rounded-lg font-bold text-white bg-gradient-to-r from-teal-500 to-teal-600 shadow-lg hover:scale-105 hover:shadow-[0_0_20px_#234645] transition-all duration-300 font-merienda"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}