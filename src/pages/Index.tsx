import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useToast } from '@/components/ui/use-toast'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenuSection from '@/components/MenuSection'
import TestimonialSection from '@/components/TestimonialSection'

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee, Clock, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MenuSection from '@/components/MenuSection';
import TestimonialSection from '@/components/TestimonialSection';

const Index: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      toast({
        title: 'Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
    }, 500);
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-amber-50">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturesSection />
        <MenuSection />
        <TestimonialSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <section className="bg-amber-100 py-20">
    <div className="container mx-auto text-center">
      <motion.h1 
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to Brew Haven
      </motion.h1>
      <p className="text-xl mb-8">Your cozy neighborhood coffee shop</p>
      <Button size="lg">View Menu</Button>
    </div>
  </section>
);

const FeaturesSection: React.FC = () => (
  <section className="py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Coffee className="w-12 h-12 text-amber-600" />}
          title="Artisanal Coffee"
          description="Expertly roasted beans and crafted drinks"
        />
        <FeatureCard 
          icon={<Clock className="w-12 h-12 text-amber-600" />}
          title="Fresh Daily"
          description="Baked goods made from scratch every morning"
        />
        <FeatureCard 
          icon={<MapPin className="w-12 h-12 text-amber-600" />}
          title="Cozy Atmosphere"
          description="A warm, welcoming space to relax or work"
        />
      </div>
    </div>
  </section>
);

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex flex-col items-center">
        {icon}
        <span className="mt-4">{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-center">{description}</p>
    </CardContent>
  </Card>
);

const ContactSection: React.FC = () => (
  <section className="bg-amber-100 py-16">
    <div className="container mx-auto">
      <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Visit Us</h3>
          <p className="mb-2">123 Coffee Street, Brewville, CF 12345</p>
          <p className="mb-2">Phone: (555) 123-4567</p>
          <p className="mb-4">Email: hello@brewhaven.com</p>
          <div className="flex space-x-4">
            <Instagram className="w-6 h-6" />
            <Facebook className="w-6 h-6" />
            <Twitter className="w-6 h-6" />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Opening Hours</h3>
          <p className="mb-2">Monday - Friday: 7:00 AM - 8:00 PM</p>
          <p className="mb-2">Saturday: 8:00 AM - 9:00 PM</p>
          <p>Sunday: 8:00 AM - 7:00 PM</p>
        </div>
      </div>
    </div>
  </section>
);

export default Index;