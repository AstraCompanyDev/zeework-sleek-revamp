import { Button } from "@/components/ui/button";
import { Search, Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold">
              <span className="text-foreground">Zee</span>
              <span className="text-primary">Work</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#talent" className="text-foreground hover:text-primary transition-colors">
              Find Talent
            </a>
            <a href="#work" className="text-foreground hover:text-primary transition-colors">
              Find Work
            </a>
            <a href="#why" className="text-foreground hover:text-primary transition-colors">
              Why ZeeWork
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="hidden md:flex">
              Log In
            </Button>
            <Button size="lg">Sign Up</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
