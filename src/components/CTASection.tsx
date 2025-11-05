import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-accent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-white" />
            <span className="text-white font-semibold">Start Your Journey Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Crafting Your Digital Dreams into Reality.
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            You can have the best people. Right now. Right here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-10 bg-white text-primary hover:bg-white/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Join as Freelancer
            </Button>
            <Button
              size="lg"
              className="text-lg px-10 bg-foreground text-background hover:bg-foreground/90 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Hire Talent
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">500K+</div>
              <p className="text-white/80 text-sm">Freelancers</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">1M+</div>
              <p className="text-white/80 text-sm">Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">150+</div>
              <p className="text-white/80 text-sm">Countries</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
