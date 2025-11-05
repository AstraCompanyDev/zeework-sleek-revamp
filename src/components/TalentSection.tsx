import { Button } from "@/components/ui/button";

const TalentSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find talent <span className="text-primary relative">the right way.</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Work with the largest network of independent professionals and get things done—from quick turnarounds to big transformations.
          </p>
          <Button size="lg" className="text-lg px-10">
            Hire a Freelancer
          </Button>
        </div>

        {/* Stats or Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
          <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Active Freelancers</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-primary mb-2">50K+</div>
            <p className="text-muted-foreground">Projects Completed</p>
          </div>
          <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentSection;
