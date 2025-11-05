import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Working with ZeeWork provides our team with everything we need to move agile in the market. Tasks are a breeze when we can hire world leading freelancers!",
      author: "Sean",
      company: "CoFoundersLab",
      rating: 5,
    },
    {
      text: "The quality of talent on ZeeWork is outstanding. We've built our entire product team through this platform and couldn't be happier with the results.",
      author: "Maria",
      company: "TechStart Inc",
      rating: 5,
    },
    {
      text: "ZeeWork has revolutionized how we approach project staffing. The flexibility and cost savings are game-changing for our business.",
      author: "David",
      company: "Creative Studios",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-primary font-semibold mb-2 text-lg">TESTIMONIALS</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="text-primary">Clients Say?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            You can have the best people. Right now. Right here.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/50 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Quote className="w-6 h-6 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 text-lg leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="pt-6 border-t border-border">
                  <div className="font-bold text-lg mb-1">{testimonial.author}</div>
                  <div className="text-muted-foreground">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
