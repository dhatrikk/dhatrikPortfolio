import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="section-padding py-12">
        <div className="container-max">
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h3 className="text-2xl font-heading font-bold mb-4">
                <span className="gradient-text">Dhatrik Kumar</span>
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Building innovative solutions with modern technologies. 
                Always open to new opportunities and collaborations.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-8"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://github.com/dhatrikk', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('https://www.linkedin.com/in/dhatrik-kumar-9ab249256/', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.location.href = 'mailto:dhatrikkr@gmail.com'}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex items-center justify-between w-full border-t border-border pt-8"
            >
              <p className="text-muted-foreground text-sm">
                © 2025 Dhatrik Kumar. All rights reserved.
              </p>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={scrollToTop}
                className="hover:bg-primary/10 transition-colors duration-300"
              >
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to top
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;