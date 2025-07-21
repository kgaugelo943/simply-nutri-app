import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function CallToAction() {
  return (
    <section className="py-24 bg-gradient-primary">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center text-primary-foreground">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Healthy Snacking?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of parents who trust Simply Nutri for their children's nutrition. 
            Sign up today and get your first order delivered to your child's school tomorrow!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="outline" 
              size="xl" 
              className="bg-primary-foreground text-primary border-primary-foreground hover:bg-primary-foreground/90"
            >
              <Download className="mr-2 h-5 w-5" />
              Download App
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              Start Web Ordering
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Happy Families</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-80">Partner Schools</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm opacity-80">Healthy Snacks Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}