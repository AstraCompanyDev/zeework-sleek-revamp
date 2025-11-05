import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import iconFlexibility from "@/assets/icon-flexibility.png";
import iconSavings from "@/assets/icon-savings.png";
import iconTalent from "@/assets/icon-talent.png";

const Benefits = () => {
  const benefits = [
    {
      icon: iconFlexibility,
      title: "Flexibility",
      description: "Ramp up and down, from short-term engagements to full-time teams",
      color: "bg-primary/10",
    },
    {
      icon: iconSavings,
      title: "Cost Saving",
      description: "Pay only for hours worked. Hourly rates fit any budget.",
      color: "bg-orange-500/10",
    },
    {
      icon: iconTalent,
      title: "Access To Talent",
      description: "Hire the best from around the world.",
      color: "bg-accent/10",
    },
  ];

  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Online <span className="text-primary">Workteams?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You have the opportunity to enlist top-tier talent. Right at this moment. Right here with us.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-20 h-20 ${benefit.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <img src={benefit.icon} alt={benefit.title} className="w-12 h-12" />
                </div>
                <CardTitle className="text-2xl mb-2">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="p-0 h-auto text-primary">
                  Learn More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
