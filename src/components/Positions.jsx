import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Users, Calendar, DollarSign } from "lucide-react";

const positionsData = [
  {
    title: "Web Developer",
    organization: "Azad Hall of Residence",
    period: "Aug'23–Apr'24",
    description: "Built responsive website using HTML, CSS, and React with GitHub collaboration and ongoing site maintenance.",
    achievements: [
      "Developed responsive website architecture",
      "Implemented collaborative development workflow",
      "Maintained and updated site content regularly"
    ],
    icon: <Code className="h-6 w-6" />
  },
  {
    title: "Secretary, Students' Welfare & Alumni Affairs",
    organization: "Azad Hall of Residence",
    period: "Aug'23–Apr'24",
    description: "Organized alumni meet events, secured significant sponsorships, and improved hall data management systems.",
    achievements: [
      "Organized successful alumni meet events",
      "Secured INR 5L+ in sponsorships",
      "Improved hall data management efficiency"
    ],
    icon: <Users className="h-6 w-6" />
  }
];

const Positions = () => {
  return (
    <section className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Positions of Responsibility</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Leadership roles that developed my organizational and technical skills
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {positionsData.map((position, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-8 hover:shadow-2xl transition-all duration-500 border-l-4 border-l-primary">
                <div className="flex items-start gap-6">
                  <div className="bg-primary/10 p-4 rounded-xl">
                    {position.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {position.title}
                        </h3>
                        <p className="text-lg text-primary font-semibold">
                          {position.organization}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium">{position.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {position.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {position.achievements.map((achievement, achievementIndex) => (
                          <li 
                            key={achievementIndex}
                            className="flex items-start gap-3"
                          >
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Positions;