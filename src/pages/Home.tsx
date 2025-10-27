import { Link } from "react-router-dom";
import { Mic, Zap, Shield, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        voiceFeedbackEnabled={true}
        onToggleVoiceFeedback={() => {}}
        onOpenHelp={() => {}}
        onOpenSearch={() => {}}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 gradient-subtle opacity-50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Voice-Powered Productivity</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Manage Tasks with{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-dark))] bg-clip-text text-transparent">
                Your Voice
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Speakify revolutionizes task management with cutting-edge voice recognition. 
              Simply speak your tasks, and watch them organize themselves instantly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/tasks">
                <Button size="lg" className="gradient-primary text-white gap-2 group">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Speakify?</h2>
            <p className="text-muted-foreground text-lg">
              Powerful features designed for modern productivity
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-scale border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Voice Commands</h3>
              <p className="text-muted-foreground">
                Add, complete, or delete tasks using natural voice commands. 
                No typing required—just speak and it's done.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-scale border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Organization</h3>
              <p className="text-muted-foreground">
                Automatically categorize and prioritize tasks with intelligent 
                context recognition and due date parsing.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-elegant hover-scale border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10b981] to-[#8b5cf6] flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Privacy First</h3>
              <p className="text-muted-foreground">
                All voice processing happens locally in your browser. 
                Your tasks and voice data never leave your device.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to voice-powered productivity
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Click the Microphone</h3>
                <p className="text-muted-foreground">
                  Tap the mic button and wait for the listening indicator to appear. 
                  Your browser will ask for permission the first time.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Speak Your Task</h3>
                <p className="text-muted-foreground">
                  Say something like "Add high priority work task: finish report due tomorrow." 
                  Watch your words appear in real-time as you speak.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Watch the Magic</h3>
                <p className="text-muted-foreground">
                  Your task is automatically created with the right priority, category, 
                  and due date. Get instant voice feedback confirming your action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Boost Your Productivity?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who've transformed their workflow with voice-powered task management.
            </p>
            <div className="mt-4">
              <Link to="/tasks">
              <Button size="lg" className="gradient-primary text-white gap-2 group">
                Start Using Speakify
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
