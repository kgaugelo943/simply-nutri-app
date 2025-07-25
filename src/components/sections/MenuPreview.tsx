import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Plus } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useCart } from "@/contexts/CartContext";
import { Link } from "react-router-dom";
import snackCharacters from "@/assets/snack-characters.jpg";
import orangeCharacter from "@/assets/orange-character.jpg";
import bananaHero from "@/assets/banana-hero.jpg";
import heroFoodCharacters from "@/assets/hero-food-characters.jpg";

// Fallback data for when database is empty
const fallbackItems = [
  {
    id: "fallback-1",
    name: "Apple Cinnamon Granola Bar",
    price: 2.50,
    rating: 4.8,
    category: "Bars",
    badges: ["Gluten-Free", "High Fiber"],
    image_url: snackCharacters,
    available: true,
    description: "Delicious and nutritious granola bar"
  },
  {
    id: "fallback-2", 
    name: "Mixed Berry Fruit Cup",
    price: 3.00,
    rating: 4.9,
    category: "Fruits",
    badges: ["Fresh", "Vitamin C"],
    image_url: orangeCharacter,
    available: true,
    description: "Fresh mixed berries in a convenient cup"
  },
  {
    id: "fallback-3",
    name: "Whole Grain Crackers",
    price: 2.25,
    rating: 4.6,
    category: "Snacks", 
    badges: ["Whole Grain", "Low Sodium"],
    image_url: bananaHero,
    available: true,
    description: "Crunchy whole grain crackers"
  },
  {
    id: "fallback-4",
    name: "Veggie Chips Mix",
    price: 2.75,
    rating: 4.7,
    category: "Chips",
    badges: ["Baked", "No Artificial Colors"],
    image_url: heroFoodCharacters,
    available: true,
    description: "Healthy baked vegetable chips mix"
  }
];

export function MenuPreview() {
  const [menuItems, setMenuItems] = useState(fallbackItems);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('available', true)
        .limit(4)
        .order('rating', { ascending: false });

      if (error) throw error;
      
      // Use database items if available, otherwise fallback
      if (data && data.length > 0) {
        setMenuItems(data);
      }
    } catch (error) {
      console.error('Error fetching menu items:', error);
      // Keep fallback items on error
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item: any) => {
    addItem(item);
  };
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
                  src={item.image_url}
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
                  {item.rating && (
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <Star className="h-4 w-4 fill-sunny-yellow text-sunny-yellow" />
                      <span>{item.rating}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                {item.badges && (
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.badges.map((badge, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-healthy-green">
                    ${Number(item.price).toFixed(2)}
                  </span>
                  <Button 
                    size="sm" 
                    variant="healthy" 
                    className="group"
                    onClick={() => handleAddToCart(item)}
                  >
                    <Plus className="h-4 w-4 mr-1 group-hover:rotate-90 transition-transform" />
                    Add
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="warm" size="lg" asChild>
            <Link to="/menu">View Full Menu</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}