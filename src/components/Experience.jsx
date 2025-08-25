import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const Experience = () => {
  return (
    <section className="py-20 section-padding bg-secondary/30">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Entrepreneurial Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leading innovative solutions and building impactful businesses
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary">
              <div className="flex items-start gap-6">
                <div className="bg-primary/10 p-4 rounded-xl">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Co-Founder - Zeppy Rides
                      </h3>
                      <p className="text-lg text-primary font-semibold">
                        Women-led bike taxi startup
                      </p>
                    </div>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      Current
                    </Badge>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Building safe, reliable daily commute solutions for women through innovative 
                    bike taxi services. Leading strategic initiatives across operations, technology, 
                    and market outreach.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow/10 p-2 rounded-lg">
                        <Award className="h-5 w-5 text-yellow" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Top 25/2000+</p>
                        <p className="text-sm text-muted-foreground">EMPRESARIO 2025</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow/10 p-2 rounded-lg">
                        <Users className="h-5 w-5 text-yellow" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Team of 10</p>
                        <p className="text-sm text-muted-foreground">Cross-functional</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="bg-yellow/10 p-2 rounded-lg">
                        <TrendingUp className="h-5 w-5 text-yellow" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Growth Focus</p>
                        <p className="text-sm text-muted-foreground">Market Expansion</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {['Leadership', 'Strategy', 'Operations', 'Technology', 'Team Management'].map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;