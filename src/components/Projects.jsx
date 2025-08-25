import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Calendar } from "lucide-react";
import hospitalImage from "@/assets/hospital-project.jpg";
import whiteboardImage from "@/assets/whiteboard-project.jpg";
import mockmateImage from "@/assets/mockmate-project.jpg";
import chatbotImage from "@/assets/chatbot-project.jpg";

const projectsData = [
  {
    title: "Hospital Website",
    period: "Jun'25–Jul'25",
    description: "Responsive hospital web application built with modern technologies for seamless user experience and accessibility.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion"],
    image: hospitalImage,
    link: "#",
    github: "#"
  },
  {
    title: "Whiteboard App",
    period: "2024",
    description: "MERN stack collaborative whiteboard with real-time drawing capabilities, user authentication, and team collaboration features.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Socket.IO", "JWT"],
    image: whiteboardImage,
    link: "#",
    github: "#"
  },
  {
    title: "MockMate - AI Interview Agent",
    period: "2024",
    description: "AI-powered interview preparation platform with real-time feedback, voice integration, and personalized coaching.",
    technologies: ["Next.js", "Tailwind CSS", "Firebase", "Google Gemini API", "Vapi SDK"],
    image: mockmateImage,
    link: "#",
    github: "#"
  },
  {
    title: "AI Conversation Chatbot",
    period: "2025",
    description: "Bronze Medal winning project at Tech 2025. Features mood detection, emotion-based analytics, and intelligent conversations.",
    technologies: ["React", "Vite", "Tailwind CSS", "AI APIs", "Emotion Detection"],
    image: chatbotImage,
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 section-padding">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card overflow-hidden hover:shadow-2xl transition-all duration-500 group h-full">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-primary font-medium">
                      <Calendar className="h-4 w-4" />
                      {project.period}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      variant="default" 
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => window.open(project.link, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Project
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="h-4 w-4" />
                    </Button>
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

export default Projects;