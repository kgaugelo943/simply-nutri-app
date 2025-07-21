import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="container px-4 py-24 lg:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Healthy Snacks,
                <span className="bg-gradient-primary bg-clip-text text-transparent"> 
                  {" "}Smart Delivery
                </span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Simply Nutri brings nutritious, delicious snacks directly to your child's school through our smart vending machines. Order today, collect tomorrow!
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="hero" size="xl" className="group">
                Start Ordering
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl">
                View Menu
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-healthy-green/10">
                  <Heart className="h-6 w-6 text-healthy-green" />
                </div>
                <p className="text-sm font-medium">100% Healthy</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-warm-orange/10">
                  <Zap className="h-6 w-6 text-warm-orange" />
                </div>
                <p className="text-sm font-medium">Quick Delivery</p>
              </div>
              <div className="text-center">
                <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <p className="text-sm font-medium">Safe & Secure</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={heroImage}
                alt="Healthy snacks and happy children"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 rounded-xl bg-card p-4 shadow-warm animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-healthy-green"></div>
                <span className="text-sm font-medium">Fresh Daily</span>
              </div>
            </div>
            
            <div className="absolute -right-6 -top-6 rounded-xl bg-card p-4 shadow-warm animate-pulse">
              <div className="flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-warm-orange"></div>
                <span className="text-sm font-medium">Smart Pickup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}