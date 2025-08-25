import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    year: "2026",
    institution: "IIT Kharagpur",
    degree: "M.Tech Dual Degree (Mining Engineering)",
    grade: "CGPA 7.69/10",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    year: "2021",
    institution: "DINI International School",
    degree: "Higher Secondary Education",
    grade: "83.4%",
    icon: <GraduationCap className="h-6 w-6" />
  },
  {
    year: "2019",
    institution: "DAV Public School",
    degree: "Secondary Education",
    grade: "89.6%",
    icon: <GraduationCap className="h-6 w-6" />
  }
];

const Education = () => {
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
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic journey that shaped my foundation in engineering and technology
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 hover:shadow-xl transition-all duration-300 border-l-4 border-l-primary">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {item.institution}
                      </h3>
                      <div className="flex items-center gap-2 text-primary font-medium">
                        <Calendar className="h-4 w-4" />
                        {item.year}
                      </div>
                    </div>
                    <p className="text-lg text-muted-foreground mb-2">
                      {item.degree}
                    </p>
                    <p className="text-primary font-semibold">
                      {item.grade}
                    </p>
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

export default Education;