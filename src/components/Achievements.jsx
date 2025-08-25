import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Star, TrendingUp } from "lucide-react";

const achievementsData = [
  {
    title: "JEE Advanced 2022",
    rank: "AIR 7468",
    percentile: "Top 4.9%",
    description: "Secured admission to IIT Kharagpur through competitive examination",
    icon: <Trophy className="h-8 w-8" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    title: "JEE Mains 2022",
    rank: "AIR 11371",
    percentile: "Top 0.1%",
    description: "Outstanding performance in national level engineering entrance exam",
    icon: <Award className="h-8 w-8" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Merit-cum-Means Scholarship",
    rank: "Recipient",
    percentile: "Government of India",
    description: "Awarded scholarship for academic excellence and financial need",
    icon: <Star className="h-8 w-8" />,
    color: "text-green-600",
    bgColor: "bg-green-50"
  }
];

const Achievements = () => {
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
            <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition for academic excellence and competitive performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 text-center hover:shadow-2xl transition-all duration-500 group h-full">
                <div className={`${achievement.bgColor} p-4 rounded-2xl inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={achievement.color}>
                    {achievement.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {achievement.title}
                </h3>
                
                <div className="flex flex-col items-center gap-2 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary text-lg px-4 py-1">
                    {achievement.rank}
                  </Badge>
                  <p className="text-sm font-medium text-muted-foreground">
                    {achievement.percentile}
                  </p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;