import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Bell,
  ChevronDown,
  Menu,
  Send,
  Download,
} from "lucide-react";

const Messages = () => {
  const [selectedConversation, setSelectedConversation] = useState(0);
  const [messageInput, setMessageInput] = useState("");

  const conversations = [
    {
      id: 0,
      name: "Clarisse Kendall",
      role: "Clarisse - Executive",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      initials: "CK",
      hasUnread: false,
      isOnline: true,
    },
    {
      id: 1,
      name: "Ankit Singh",
      role: "Ankit Web Developmen",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      initials: "AS",
      hasUnread: true,
      isOnline: true,
    },
    {
      id: 2,
      name: "April Marie Ramos",
      role: "April - Graphic Work",
      avatar: "",
      initials: "AR",
      hasUnread: true,
      isOnline: true,
    },
    {
      id: 3,
      name: "Sean Walsh",
      role: "Administration Work",
      avatar: "",
      initials: "SW",
      hasUnread: false,
      isOnline: false,
    },
    {
      id: 4,
      name: "Usama Iqbal",
      role: "Job for Usama",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
      initials: "UI",
      hasUnread: false,
      isOnline: true,
    },
    {
      id: 5,
      name: "Jade Alcomendras",
      role: "Jade - Administratio",
      avatar: "",
      initials: "JA",
      hasUnread: false,
      isOnline: false,
    },
  ];

  const messages = [
    {
      id: 1,
      sender: "them",
      type: "job-offer",
      title: "Development Work",
      jobType: "Hourly",
      rate: "$10",
      date: "07/15/2025",
    },
    {
      id: 2,
      sender: "them",
      type: "job-accepted",
      title: "Development Work",
      jobType: "Hourly",
      rate: "$10",
      date: "07/15/2025",
    },
  ];

  const selectedContact = conversations[selectedConversation];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-8">
              <a href="/" className="text-2xl font-bold">
                <span className="text-foreground">Zee</span>
                <span className="text-primary">Work</span>
              </a>
              <nav className="hidden md:flex items-center gap-6">
                <a href="/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  My Stats
                </a>
                <a href="/messages" className="text-primary font-medium flex items-center gap-1">
                  Messages
                  <Badge className="bg-destructive text-destructive-foreground text-xs px-1.5 py-0.5">2</Badge>
                </a>
              </nav>
            </div>

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
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[calc(100vh-8rem)]">
          {/* Conversations List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search Message by Name"
                className="pl-10 bg-background border-border"
              />
            </div>

            <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-14rem)]">
              {conversations.map((conversation, index) => (
                <Card
                  key={conversation.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedConversation === index
                      ? "border-primary bg-primary/5 shadow-md"
                      : "hover:border-border/80"
                  }`}
                  onClick={() => setSelectedConversation(index)}
                >
                  <CardContent className="p-3">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback 
                            className={`font-semibold ${
                              conversation.initials === "AR" 
                                ? "bg-pink-500 text-white" 
                                : conversation.initials === "JA"
                                ? "bg-purple-500 text-white"
                                : "bg-primary/10 text-primary"
                            }`}
                          >
                            {conversation.initials}
                          </AvatarFallback>
                        </Avatar>
                        {conversation.isOnline && (
                          <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-background" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-foreground truncate">
                            {conversation.name}
                          </h4>
                          {conversation.hasUnread && (
                            <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground truncate">
                          {conversation.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-6 flex flex-col bg-background rounded-xl border border-border">
            {/* Chat Header */}
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={selectedContact.avatar} />
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {selectedContact.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{selectedContact.name}</h3>
                  <p className="text-sm text-muted-foreground">{selectedContact.role}</p>
                </div>
                <span className="h-3 w-3 rounded-full bg-primary" />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {messages.map((message) => (
                <div key={message.id} className="space-y-2">
                  {message.type === "job-offer" && (
                    <div className="flex justify-end">
                      <div className="max-w-md">
                        <Card className="bg-muted/50">
                          <CardContent className="p-4">
                            <h4 className="font-semibold text-foreground mb-2">Job Offer</h4>
                            <div className="border-l-4 border-primary pl-3 space-y-1">
                              <p className="font-medium text-foreground">Title: {message.title}</p>
                              <p className="text-sm text-muted-foreground">Type: {message.jobType}</p>
                              <p className="text-sm text-muted-foreground">Hourly Rate: {message.rate}</p>
                            </div>
                            <button className="text-primary font-medium mt-3 hover:underline">
                              Details
                            </button>
                          </CardContent>
                        </Card>
                        <p className="text-xs text-muted-foreground text-right mt-1">{message.date}</p>
                      </div>
                    </div>
                  )}

                  {message.type === "job-accepted" && (
                    <div className="flex gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={selectedContact.avatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-sm">
                          {selectedContact.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="max-w-md">
                        <h4 className="font-semibold text-foreground mb-1">{selectedContact.name}</h4>
                        <Card className="bg-muted/30">
                          <CardContent className="p-4">
                            <p className="text-muted-foreground mb-3">Accepted!</p>
                            <div className="bg-background rounded-lg p-3">
                              <h5 className="font-semibold text-foreground mb-2">Accepted Job Offer</h5>
                              <div className="border-l-4 border-primary pl-3 space-y-1">
                                <p className="font-medium text-foreground">Title: {message.title}</p>
                                <p className="text-sm text-muted-foreground">Type: {message.jobType}</p>
                                <p className="text-sm text-muted-foreground">Hourly Rate: {message.rate}</p>
                              </div>
                              <button className="text-primary font-medium mt-3 hover:underline">
                                Details
                              </button>
                            </div>
                          </CardContent>
                        </Card>
                        <p className="text-xs text-muted-foreground mt-1">{message.date}</p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex gap-2">
                <Input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-muted/30 border-border"
                />
                <Button size="icon" className="shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">Earn Hourly</h3>
                <p className="text-muted-foreground mb-4">
                  Analyze your performance to improve your success
                </p>
                <Button className="mb-6">
                  <Download className="h-4 w-4 mr-2" />
                  Download Now
                </Button>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=300&fit=crop"
                    alt="Professional freelancer"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Messages;
