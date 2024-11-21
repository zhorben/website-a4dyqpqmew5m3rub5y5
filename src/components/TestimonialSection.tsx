import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface Testimonial {
  name: string;
  comment: string;
}

const TestimonialSection: React.FC = () => {
  const [testimonials] = useState<Testimonial[]>([
    { name: 'Sarah L.', comment: 'The best coffee in town! I love the cozy atmosphere.' },
    { name: 'Mike R.', comment: 'Friendly staff and delicious pastries. My go-to spot for meetings.' },
    { name: 'Emily T.', comment: 'Their latte art is Instagram-worthy! Great place to work remotely.' },
  ]);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-amber-100 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
        <Card className="max-w-2xl mx-auto">
          <CardContent className="text-center py-8">
            <p className="text-lg mb-4">"{testimonials[currentTestimonial].comment}"</p>
            <p className="font-semibold">- {testimonials[currentTestimonial].name}</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialSection;