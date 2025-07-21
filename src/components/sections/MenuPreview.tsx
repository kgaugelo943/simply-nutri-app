import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";
import healthySnacksImage from "@/assets/healthy-snacks.jpg";

const menuItems = [
  {
    id: 1,
    name: "Apple Cinnamon Granola Bar",
    price: 2.50,
    rating: 4.8,
    category: "Bars",
    badges: ["Gluten-Free", "High Fiber"],
    image: healthySnacksImage
  },
  {
    id: 2,
    name: "Mixed Berry Fruit Cup",
    price: 3.00,
    rating: 4.9,
    category: "Fruits",
    badges: ["Fresh", "Vitamin C"],
    image: healthySnacksImage
  },
  {
    id: 3,
    name: "Whole Grain Crackers",
    price: 2.25,
    rating: 4.6,
    category: "Snacks",
    badges: ["Whole Grain", "Low Sodium"],
    image: healthySnacksImage
  },
  {
    id: 4,
    name: "Veggie Chips Mix",
    price: 2.75,
    rating: 4.7,
    category: "Chips",
    badges: ["Baked", "No Artificial Colors"],
    image: healthySnacksImage
  }
];

export function MenuPreview() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Delicious & Nutritious Menu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every snack is carefully selected for taste and nutrition, approved by pediatric nutritionists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuItems.map((item) => (
            <Card key={item.id} className="group border-0 shadow-soft hover:shadow-warm transition-all duration-300 hover:scale-105 bg-gradient-card overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                    {item.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-lg line-clamp-2">{item.name}</CardTitle>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 fill-sunny-yellow text-sunny-yellow" />
                    <span>{item.rating}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {item.badges.map((badge, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-healthy-green">
                    ${item.price}
                  </span>
                  <Button size="sm" variant="healthy" className="group">
                    <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="warm" size="lg">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}