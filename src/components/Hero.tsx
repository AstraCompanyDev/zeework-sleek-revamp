import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-freelancers.jpg";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              Welcome to the{" "}
              <span className="text-primary">World's Fastest Growing</span>{" "}
              Freelance Platform.
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-xl">
              Forget the old rules. You can have the best people. Right here. Right now.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="text-lg px-8">
                Become a Freelancer
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Hire a Freelancer
              </Button>
            </div>

            {/* Trending Services */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-3 tracking-wider uppercase">
                Trending Services
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  Designer
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  Developer
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  WordPress
                </Badge>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Diverse freelancers collaborating"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse delay-75" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
