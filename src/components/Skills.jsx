import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Code, Database, Globe, Cpu, GitBranch, Cloud } from "lucide-react";

const skillsData = [
  {
    category: "Languages",
    icon: <Code className="h-6 w-6" />,
    skills: ["C", "C++", "HTML", "CSS", "JavaScript", "Python"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <Globe className="h-6 w-6" />,
    skills: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Socket.IO"]
  },
  {
    category: "Databases & Tools",
    icon: <Database className="h-6 w-6" />,
    skills: ["MongoDB", "Firebase", "Mongoose", "JWT"]
  },
  {
    category: "APIs & AI Tools",
    icon: <Cpu className="h-6 w-6" />,
    skills: ["Google Gemini API", "Vapi SDK"]
  },
  {
    category: "Development Tools",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub", "Postman", "Jupyter Notebook"]
  },
  {
    category: "Platforms",
    icon: <Cloud className="h-6 w-6" />,
    skills: ["Vercel", "Render", "Firebase Console"]
  }
];

const Skills = () => {
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
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technology stack for modern web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 h-full hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-primary/10 p-3 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium hover:bg-primary/20 transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;