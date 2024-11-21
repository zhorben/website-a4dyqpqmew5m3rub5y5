import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

const MenuSection: React.FC = () => {
  const [coffees] = useState<MenuItem[]>([
    { name: 'Espresso', description: 'Rich and bold', price: 2.50 },
    { name: 'Cappuccino', description: 'Espresso with steamed milk foam', price: 3.50 },
    { name: 'Latte', description: 'Espresso with steamed milk', price: 3.75 },
  ]);

  const [pastries] = useState<MenuItem[]>([
    { name: 'Croissant', description: 'Buttery and flaky', price: 2.75 },
    { name: 'Blueberry Muffin', description: 'Freshly baked daily', price: 2.50 },
    { name: 'Cinnamon Roll', description: 'Soft and gooey', price: 3.00 },
  ]);

  return (
    <section className="py-16" id="menu">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-12">Our Menu</h2>
        <Tabs defaultValue="coffee">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="coffee">Coffee</TabsTrigger>
            <TabsTrigger value="pastries">Pastries</TabsTrigger>
          </TabsList>
          <TabsContent value="coffee">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {coffees.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="pastries">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastries.map((item, index) => (
                <MenuItemCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

const MenuItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
  <Card>
    <CardHeader>
      <CardTitle>{item.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <p>{item.description}</p>
      <p className="font-semibold mt-2">${item.price.toFixed(2)}</p>
    </CardContent>
  </Card>
);

export default MenuSection;