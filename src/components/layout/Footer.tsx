import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-primary"></div>
              <span className="font-bold text-lg">Simply Nutri</span>
            </div>
            <p className="text-background/80 text-sm">
              Bringing healthy, delicious snacks to school children through smart vending technology.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Twitter className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
              <Instagram className="h-5 w-5 text-background/60 hover:text-background cursor-pointer" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/menu" className="text-background/80 hover:text-background">Menu</a></li>
              <li><a href="/orders" className="text-background/80 hover:text-background">My Orders</a></li>
              <li><a href="/schools" className="text-background/80 hover:text-background">Partner Schools</a></li>
              <li><a href="/nutrition" className="text-background/80 hover:text-background">Nutrition Info</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/help" className="text-background/80 hover:text-background">Help Center</a></li>
              <li><a href="/contact" className="text-background/80 hover:text-background">Contact Us</a></li>
              <li><a href="/privacy" className="text-background/80 hover:text-background">Privacy Policy</a></li>
              <li><a href="/terms" className="text-background/80 hover:text-background">Terms of Service</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-background/80">+27 606920968</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-background/80">hello@simplynutri.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-background/80">Cossal Crescent, Cape Town</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-12 pt-8 text-center text-sm text-background/60">
          <p>&copy; 2024 Simply Nutri. All rights reserved. Made with ❤️ for healthy kids.</p>
        </div>
      </div>
    </footer>
  );
}