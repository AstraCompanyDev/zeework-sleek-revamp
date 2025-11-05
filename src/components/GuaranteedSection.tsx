import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Users, Wallet } from "lucide-react";
import guaranteedImage from "@/assets/guaranteed-work.jpg";

const GuaranteedSection = () => {
  const features = [
    {
      icon: CheckCircle2,
      title: "See Work as it's Done",
      description: "Check in on your contractors as easily as if you were in the same office.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Users,
      title: "Build a Team of Experts",
      description: "Select from a global talent pool of experts that will help you build business faster than ever.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
    {
      icon: Wallet,
      title: "Eliminate Payroll Hassle",
      description: "We'll manage payment and invoicing for all your hires providing you with everything you need to work at ease.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Features */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Guaranteed work.{" "}
                <span className="text-primary">Guaranteed Payment.</span>
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`${feature.bgColor} p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative animate-fade-in lg:order-last">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={guaranteedImage}
                alt="Guaranteed work and payment"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteedSection;
