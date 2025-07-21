import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, QrCode, Calendar, Bell, CreditCard, Users } from "lucide-react";
import vendingMachineImage from "@/assets/vending-machine.jpg";

const features = [
  {
    icon: Smartphone,
    title: "Easy Ordering",
    description: "Parents can browse our healthy menu and place orders in seconds through our intuitive app."
  },
  {
    icon: QrCode,
    title: "QR Code Pickup",
    description: "Each student gets a unique QR code to collect their snacks from smart vending machines."
  },
  {
    icon: Calendar,
    title: "Schedule Delivery",
    description: "Plan ahead with scheduled deliveries. Order today for pickup tomorrow or next week."
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Get notified when orders are ready, missed pickups, and delivery confirmations."
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description: "Safe and secure payment processing with multiple payment options available."
  },
  {
    icon: Users,
    title: "Family Management",
    description: "Manage multiple children, track their preferences, and monitor their nutrition."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            How Simply Nutri Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our smart system makes healthy snacking convenient for parents and fun for kids
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Smart Vending Technology</h3>
            <p className="text-muted-foreground">
              Our state-of-the-art vending machines are installed in partner schools, 
              providing secure and convenient access to healthy snacks. Students simply 
              scan their QR code to collect their pre-ordered meals.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-healthy-green"></div>
                <span className="text-sm">Contactless pickup with QR codes</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-warm-orange"></div>
                <span className="text-sm">Temperature-controlled storage</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="text-sm">Real-time inventory tracking</span>
              </div>
            </div>
            <Button variant="warm">Learn More About Our Technology</Button>
          </div>
          
          <div className="relative">
            <img
              src={vendingMachineImage}
              alt="Smart vending machine"
              className="rounded-2xl shadow-elevated w-full h-auto"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-soft bg-gradient-card hover:shadow-warm transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}