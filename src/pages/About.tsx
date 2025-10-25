import { Link } from "react-router-dom";
import { Mic, Brain, Lock, Zap, Globe, Heart, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header
        voiceFeedbackEnabled={true}
        onToggleVoiceFeedback={() => {}}
        onOpenHelp={() => {}}
        onOpenSearch={() => {}}
      />

      {/* Hero Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              About{" "}
              <span className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-dark))] bg-clip-text text-transparent">
                VoiceTask Pro
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The future of task management is here—and it listens to you.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              We believe task management should be as natural as having a conversation. 
              VoiceTask Pro was created to eliminate the friction between thought and action—
              helping you capture ideas instantly, organize effortlessly, and stay productive 
              without breaking your flow.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powered by Modern Technology</h2>
            <p className="text-muted-foreground text-lg">
              Built with cutting-edge web technologies for seamless performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Web Speech API</h3>
              <p className="text-muted-foreground text-sm">
                Leverages browser-native speech recognition and synthesis 
                for accurate, real-time voice processing.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#10b981] to-[#8b5cf6] flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">React & Vite</h3>
              <p className="text-muted-foreground text-sm">
                Lightning-fast performance with modern React and Vite's 
                optimized build system for instant updates.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ef4444] flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Local Processing</h3>
              <p className="text-muted-foreground text-sm">
                All voice data is processed locally in your browser—
                no server uploads, no privacy concerns.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#667eea] to-[#764ba2] flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Cross-Platform</h3>
              <p className="text-muted-foreground text-sm">
                Works seamlessly on desktop and mobile browsers 
                that support the Web Speech API.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Mic className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">Natural Language</h3>
              <p className="text-muted-foreground text-sm">
                Understands context and intent from natural speech—
                no rigid command structures required.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#f093fb] to-[#f5576c] flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3">User-Centered Design</h3>
              <p className="text-muted-foreground text-sm">
                Clean, intuitive interface designed for accessibility 
                and ease of use across all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Complete Feature Set</h2>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-3">🎤 Voice Commands</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Add tasks with priority, category, and due dates in one command</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Mark tasks complete or delete them using voice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Search and filter tasks hands-free</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-3">📋 Task Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Organize by category: Work, Shopping, Health, Study, Personal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Set priority levels: High, Medium, Low with color-coded badges</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Flexible due date parsing (tomorrow, next Monday, Oct 27, etc.)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-3">🔍 Smart Filtering</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Filter by status: All, Active, Completed, High Priority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Real-time text search across all task fields</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Instant visual feedback with smooth animations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="text-xl font-bold mb-3">🔊 Voice Feedback</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Optional text-to-speech confirmation of all actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Visual feedback banner with action summaries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Toggle voice feedback on/off based on your environment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browser Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Browser Support</h2>
            <p className="text-muted-foreground mb-8">
              VoiceTask Pro works best on modern browsers with Web Speech API support:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Chrome (Recommended)
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Edge
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Safari 14.1+
              </span>
              <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                Opera
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Experience the Future of Task Management
            </h2>
            <p className="text-xl text-muted-foreground">
              Stop typing. Start speaking. Transform your productivity today.
            </p>
            <Link to="/tasks">
              <Button size="lg" className="gradient-primary text-white gap-2 group">
                Try VoiceTask Pro Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
