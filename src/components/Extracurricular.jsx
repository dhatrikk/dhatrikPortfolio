import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Music, Trophy, Users } from "lucide-react";

const activitiesData = [
  {
    title: "Vice Captain",
    organization: "Azad Hall Illumination Team",
    achievement: "1st Place 2024–25",
    description: "Led creative lighting and decoration initiatives, securing first place in hall competitions",
    icon: <Lightbulb className="h-6 w-6" />,
    type: "Leadership"
  },
  {
    title: "Hall Representative",
    organization: "Choreography Competition",
    achievement: "Interhall IITKGP 2024–25",
    description: "Represented Azad Hall in choreography events, showcasing creative and artistic skills",
    icon: <Music className="h-6 w-6" />,
    type: "Arts"
  },
  {
    title: "Team Player",
    organization: "Hockey Team",
    achievement: "Interhall IITKGP 2024–25",
    description: "Participated in inter-hall hockey competitions, demonstrating teamwork and sportsmanship",
    icon: <Trophy className="h-6 w-6" />,
    type: "Sports"
  }
];

const Extracurricular = () => {
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
            <span className="gradient-text">Extracurricular Activities</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Beyond academics - leadership, sports, and creative pursuits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activitiesData.map((activity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge 
                        variant="secondary" 
                        className="bg-primary/10 text-primary text-xs"
                      >
                        {activity.type}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">
                      {activity.title}
                    </h3>
                    <p className="text-primary font-semibold text-sm">
                      {activity.organization}
                    </p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <Badge 
                    variant="outline" 
                    className="border-primary text-primary"
                  >
                    {activity.achievement}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {activity.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Extracurricular;