import { Link } from "react-router-dom";
import { Mic, Zap, Shield, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion, Variants } from "framer-motion";

// Animation variants for staggered children
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5 } 
  },
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index?: number;
}

const FeatureCard = ({ icon, title, description, index = 0 }: FeatureCardProps) => (
  <motion.div 
    className="bg-card p-6 rounded-xl border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
    variants={item}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <motion.div 
      className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
      whileHover={{ rotate: 5, scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const features = [
  {
    icon: <Mic className="w-8 h-8 text-primary" />,
    title: "Voice Commands",
    description: "Add, complete, or delete tasks using just your voice."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Lightning Fast",
    description: "Get things done faster than ever with voice control."
  },
  {
    icon: <Shield className="w-8 h-8 text-primary" />,
    title: "Secure & Private",
    description: "Your data stays on your device, always."
  }
];

const Home = () => {
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
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Voice-Powered Productivity</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Manage Tasks with{" "}
              <motion.span 
                className="bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--primary-dark))] bg-clip-text text-transparent"
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: '100% 50%' }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: 'reverse' as const,
                  ease: 'linear',
                }}
              >
                Your Voice
              </motion.span>
            </motion.h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Speakify revolutionizes task management with cutting-edge voice recognition. 
              Simply speak your tasks, and watch them organize themselves instantly.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/tasks" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  className="gradient-primary text-white gap-2 group w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about" className="w-full sm:w-auto">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                >
                  Learn More
                </Button>
              </Link>
            </motion.div>
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

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {features.map((feature, idx) => (
              <FeatureCard key={feature.title} {...feature} index={idx} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Privacy First</h3>
            <p className="text-muted-foreground text-lg">
              All voice processing happens locally in your browser. 
              Your tasks and voice data never leave your device.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground text-lg">
              Three simple steps to voice-powered productivity
            </p>
          </div>

          <motion.div 
            className="max-w-4xl mx-auto space-y-8"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex gap-6 items-start p-6 rounded-xl hover:bg-muted/50 transition-colors"
              variants={item}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Click the Microphone</h3>
                <p className="text-muted-foreground">
                  Tap the mic button and wait for the listening indicator to appear. 
                  Your browser will ask for permission the first time.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-6 items-start p-6 rounded-xl hover:bg-muted/50 transition-colors"
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                2
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">Speak Your Task</h3>
                <p className="text-muted-foreground">
                  Say something like "Add buy groceries to my shopping list" or 
                  "Complete the budget report task".
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex gap-6 items-start p-6 rounded-xl hover:bg-muted/50 transition-colors"
              variants={item}
            >
              <motion.div 
                className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                3
              </motion.div>
              <div>
                <h3 className="text-xl font-bold mb-2">See the Magic</h3>
                <p className="text-muted-foreground">
                  Watch as Speakify instantly processes your command and updates 
                  your tasks. No typing required!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of users who are managing their tasks with just their voice.
            </p>
            <Link to="/tasks">
              <Button size="lg" className="gap-2 group">
                Get Started for Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
