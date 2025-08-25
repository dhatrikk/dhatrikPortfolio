import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, Download } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import profilePicture from "@/assets/profile-picture.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-hero wave-pattern">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="Hero background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 section-padding py-20 md:py-32">
        <div className="container-max">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Profile Picture */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-40 h-40 mx-auto mb-6">
                <img 
                  src={profilePicture}
                  alt="DhatriK Kumar"
                  className="w-full h-full object-cover rounded-full border-4 border-primary shadow-2xl"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
            </motion.div>
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="gradient-text">DhatriK</span>{" "}
              <span className="text-foreground">Kumar</span>
            </motion.h1>
            
            <motion.div
              className="text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="gradient-text">UI/UX Designer</span> | 
              <span className="gradient-text"> Web Developer</span> | 
              <span className="gradient-text"> Entrepreneur</span>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I am a Dual Degree student (B.Tech + M.Tech) in Mining Engineering at IIT Kharagpur, 
              passionate about web development, AI-driven applications, and entrepreneurship. 
              I specialize in building responsive, scalable, and modern web solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.open('https://linkedin.com/in/dhatrik-kumar', '_blank')}
              >
                <ExternalLink className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;