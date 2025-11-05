import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import categoryDesign from "@/assets/category-design.png";
import categoryAnimation from "@/assets/category-animation.png";
import categoryWriting from "@/assets/category-writing.png";
import categoryDevelopment from "@/assets/category-development.png";

const CategoriesSection = () => {
  const categories = [
    {
      image: categoryDesign,
      title: "Graphic & Design",
      subcategories: ["Logo Design", "Social Graphics", "Flyers & Vouchers", "Illustration"],
    },
    {
      image: categoryAnimation,
      title: "Video & Animation",
      subcategories: ["Video Editing", "Cartoon Animation", "Motion Graphics", "Explainer Videos"],
    },
    {
      image: categoryWriting,
      title: "Writing & Content",
      subcategories: ["Article Writing", "Copywriting", "Technical Writing", "Content Strategy"],
    },
    {
      image: categoryDevelopment,
      title: "Web Development",
      subcategories: ["Website Design", "WordPress", "E-commerce", "Web Applications"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Looking For <span className="text-primary">Something?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our most popular categories and find the perfect freelancer for your project
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-2 hover:border-primary/50 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                {/* Image Section */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-32 h-32 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 mb-4">
                    {category.subcategories.slice(0, 3).map((sub, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 rounded-full bg-primary" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
