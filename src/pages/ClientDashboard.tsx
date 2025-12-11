import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Bell,
  ChevronLeft,
  ChevronRight,
  Moon,
  CreditCard,
  Briefcase,
  Users,
  FileText,
  UserCheck,
  ChevronDown,
  Menu,
} from "lucide-react";

const ClientDashboard = () => {
  const [activeTab, setActiveTab] = useState("all");

  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const getGreeting = () => {
    const hour = currentDate.getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const teamMembers = [
    { name: "Clarisse K.", role: "Executive Role", avatar: "", initials: "CK" },
    { name: "Sean W.", role: "Administration Work", avatar: "", initials: "SW" },
    { name: "Usama I.", role: "Job for Usama", avatar: "", initials: "UI" },
  ];

  const offers = [
    {
      id: 1,
      freelancer: "Muhammad M.",
      title: "I will do frontend development for your ..",
      deliveryTime: "Est. 4 days",
      price: "$100",
      image: "",
    },
    {
      id: 2,
      freelancer: "Raj B.",
      title: "I will deploy your application in AWS wi..",
      deliveryTime: "Est. 7 days",
      price: "$50",
      image: "",
    },
    {
      id: 3,
      freelancer: "Oluwafemi A.",
      title: "I will create a professional Wix Website..",
      deliveryTime: "Est. 5 days",
      price: "$100",
      image: "",
    },
  ];

  const jobPostings = [
    {
      id: 1,
      title: "CFL Management Team Position",
      type: "Public",
      rate: "Hourly",
      status: "Open",
      postedAgo: "9 minutes ago",
      applicants: 0,
    },
    {
      id: 2,
      title: "Figma Designer For Website - $350",
      type: "Public",
      rate: "Fixed",
      status: "Open",
      postedAgo: "5 months ago",
      applicants: 0,
    },
    {
      id: 3,
      title: "Figma Designer - $350",
      type: "Public",
      rate: "Fixed",
      status: "Open",
      postedAgo: "5 months ago",
      applicants: 0,
    },
    {
      id: 4,
      title: "Job For Clarisse",
      type: "Public",
      rate: "Hourly",
      status: "Open",
      postedAgo: "5 months ago",
      applicants: 0,
    },
    {
      id: 5,
      title: "Business Site Backend Development",
      type: "Public",
      rate: "Hourly",
      status: "Open",
      postedAgo: "11 months ago",
      applicants: 1,
    },
  ];

  const tips = [
    { icon: CreditCard, text: "Add Your Billing Method" },
    { icon: Briefcase, text: "Post Your First Job" },
    { icon: Users, text: "Invite Talent To Apply" },
    { icon: FileText, text: "Review Proposals" },
    { icon: UserCheck, text: "Hire Your Perfect Freelancer" },
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Dashboard Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-8">
              <a href="/" className="text-2xl font-bold">
                <span className="text-foreground">Zee</span>
                <span className="text-primary">Work</span>
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/dashboard" className="text-primary font-medium">
                  Dashboard
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Stats
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                  Messages
                  <Badge className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5">2</Badge>
                </a>
              </nav>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center relative">
                <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search"
                  className="pl-10 w-64 bg-muted/50 border-border"
                />
              </div>
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                Talent
                <ChevronDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive rounded-full text-xs text-destructive-foreground flex items-center justify-center">
                  1
                </span>
              </Button>
              <Avatar className="h-9 w-9 border-2 border-primary">
                <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                  SW
                </AvatarFallback>
              </Avatar>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-foreground mb-6">Your Dashboard</h1>

        {/* Greeting Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-6 mb-8">
          <div className="relative z-10">
            <Badge variant="secondary" className="bg-background/20 text-primary-foreground border-0 mb-2">
              {formattedDate}
            </Badge>
            <div className="flex items-center gap-2 text-primary-foreground">
              <Moon className="h-5 w-5" />
              <h2 className="text-xl font-semibold">{getGreeting()}, Sean</h2>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute right-0 top-0 h-full w-1/2 opacity-20">
            <div className="absolute right-10 top-4 h-20 w-32 bg-background/30 rounded-lg transform rotate-12" />
            <div className="absolute right-24 top-8 h-16 w-24 bg-background/20 rounded-lg transform -rotate-6" />
            <div className="absolute right-4 bottom-4 h-12 w-20 bg-background/25 rounded-lg transform rotate-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Content - 2 columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Your Team Section */}
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-4">Your Team</h3>
              <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="shrink-0">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <div className="flex gap-4 overflow-x-auto pb-2">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="min-w-[180px] text-center hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6">
                        <Avatar className="h-16 w-16 mx-auto mb-3 border-2 border-primary/20">
                          <AvatarImage src={member.avatar} />
                          <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                            {member.initials}
                          </AvatarFallback>
                        </Avatar>
                        <h4 className="font-semibold text-foreground">{member.name}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                        <Button className="w-full">Message</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <Button variant="ghost" size="icon" className="shrink-0">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </section>

            {/* Latest Offers Section */}
            <section>
              <h3 className="text-lg font-semibold text-foreground mb-4">Latest Offers</h3>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="bg-muted/50 mb-4">
                  <TabsTrigger value="all">All</TabsTrigger>
                  <TabsTrigger value="pending">Pending</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                  <TabsTrigger value="rejected">Rejected</TabsTrigger>
                </TabsList>
                <TabsContent value={activeTab}>
                  <div className="flex items-center gap-4">
                    <div className="flex gap-4 overflow-x-auto pb-2">
                      {offers.map((offer) => (
                        <Card key={offer.id} className="min-w-[220px] hover:shadow-lg transition-shadow">
                          <CardContent className="p-4">
                            <div className="h-32 bg-muted rounded-lg mb-3 flex items-center justify-center">
                              <span className="text-muted-foreground text-sm">gig img</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">
                                  {offer.freelancer.charAt(0)}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-sm font-medium text-foreground">
                                {offer.freelancer}
                              </span>
                            </div>
                            <p className="text-sm text-foreground mb-2 line-clamp-2">
                              {offer.title}
                            </p>
                            <p className="text-xs text-muted-foreground mb-1">
                              Delivery time - {offer.deliveryTime}
                            </p>
                            <p className="text-sm font-semibold text-foreground mb-3">
                              From {offer.price}
                            </p>
                            <Button size="sm" className="w-full">
                              Order Now
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                    <Button variant="ghost" size="icon" className="shrink-0">
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </section>

            {/* Your Job Postings Section */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-foreground">Your Job Postings</h3>
                <Button variant="ghost" size="icon" className="text-primary">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
                  </svg>
                </Button>
              </div>
              <Card>
                <CardContent className="p-0 divide-y divide-border">
                  {jobPostings.map((job) => (
                    <div key={job.id} className="p-4 hover:bg-muted/30 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="space-y-1">
                          <h4 className="font-semibold text-foreground">{job.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>{job.type}</span>
                            <span>•</span>
                            <span>{job.rate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">Status -</span>
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              {job.status}
                            </Badge>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Posted {job.postedAgo} by you
                          </p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`text-sm ${job.applicants > 0 ? "text-primary font-medium" : "text-muted-foreground"}`}>
                            {job.applicants > 0 ? `${job.applicants} New Applicants` : "No New Applicants"}
                          </span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              Go To Job Post
                            </Button>
                            <Button variant="outline" size="sm">
                              Find Applicants
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Pagination */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button size="sm" className="h-8 w-8 p-0">1</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-primary">2</Button>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-primary">3</Button>
                <Button variant="ghost" size="sm" className="text-primary">
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            <Button size="lg" className="w-full text-lg py-6">
              Post A New Job
            </Button>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tips For Getting Started</CardTitle>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-primary rounded-full" />
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                {tips.map((tip, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors text-left"
                  >
                    <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                      <tip.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-foreground">{tip.text}</span>
                  </button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ClientDashboard;
