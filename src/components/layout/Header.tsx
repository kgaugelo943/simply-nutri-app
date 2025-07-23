import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <div className="mr-4 hidden md:flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <img src={logo} alt="Simply Nutri" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">Simply Nutri</span>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <a className="transition-colors hover:text-primary" href="/menu">Menu</a>
            <a className="transition-colors hover:text-primary" href="/orders">Orders</a>
            <a className="transition-colors hover:text-primary" href="/about">About</a>
          </nav>
        </div>
        
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <a className="inline-flex items-center space-x-2 md:hidden" href="/">
              <img src={logo} alt="Simply Nutri" className="h-6 w-6" />
              <span className="font-bold">Simply Nutri</span>
            </a>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="hero" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="border-b md:hidden">
          <nav className="container py-4 space-y-2">
            <a className="block px-2 py-1 text-lg transition-colors hover:text-primary" href="/menu">Menu</a>
            <a className="block px-2 py-1 text-lg transition-colors hover:text-primary" href="/orders">Orders</a>
            <a className="block px-2 py-1 text-lg transition-colors hover:text-primary" href="/about">About</a>
          </nav>
        </div>
      )}
    </header>
  );
}