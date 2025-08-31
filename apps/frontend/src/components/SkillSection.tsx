import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";

const SkillsSection = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const skills = [
        { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "AWS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "PyTorch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Express", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Tailwind", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Vite", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Prisma", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Kubernetes", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Redis", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "GraphQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Jest", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Figma", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> }
    ];

    const projects = [
        {
            title: "Personal Portfolio Website",
            skills: ["React", "TypeScript", "Tailwind"],
            additionalSkills: 2,
            description: "Modern responsive portfolio featuring sidebar navigation, glass-morphism design, and smooth animations. Built with React and TypeScript for optimal performance.",
            highlights: ["Glass-morphism UI", "Responsive Design", "Smooth Animations", "Modern Architecture"],
            github: "https://github.com/KaitoTabor/personal-website",
            demo: "https://kaitotabor.dev"
        },
        {
            title: "ML Data Analysis Platform",
            skills: ["Python", "TensorFlow", "AWS"],
            additionalSkills: 4,
            description: "Scalable machine learning platform for data analysis and model deployment. Features automated pipelines and real-time predictions.",
            highlights: ["ML Pipeline Automation", "Real-time Predictions", "Cloud Deployment", "Data Visualization"],
            github: "https://github.com/KaitoTabor/ml-platform",
            demo: null
        },
        {
            title: "E-commerce Backend API",
            skills: ["Node.js", "PostgreSQL", "Docker"],
            additionalSkills: 3,
            description: "RESTful API for e-commerce platform with authentication, payment processing, and inventory management. Dockerized for easy deployment.",
            highlights: ["RESTful Architecture", "Payment Integration", "Inventory Management", "Docker Deployment"],
            github: "https://github.com/KaitoTabor/ecommerce-api",
            demo: null
        },
        {
            title: "Real-time Chat Application",
            skills: ["React", "Node.js", "MongoDB"],
            additionalSkills: 2,
            description: "Real-time messaging application with file sharing, group chats, and emoji reactions. Features WebSocket communication for instant messaging.",
            highlights: ["Real-time Messaging", "File Sharing", "Group Chats", "WebSocket Communication"],
            github: "https://github.com/KaitoTabor/chat-app",
            demo: "https://chat.kaitotabor.dev"
        },
        
    ];

    return (
        <div 
            className="h-full w-full flex gap-[2vh] md:gap-[2vw] p-[2vh] md:p-[0vw]"
        >
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideUpFade {
                    from { 
                        opacity: 0; 
                        transform: translateY(16px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInDown {
                    from { 
                        opacity: 0; 
                        transform: translateY(-8px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from { 
                        opacity: 0; 
                        transform: translateY(8px);
                    }
                    to { 
                        opacity: 1; 
                        transform: translateY(0);
                    }
                }
            `}</style>
            {/* Skills Section - Left Side */}
            <div className="flex-1 flex flex-col h-full">
                <h3 className="font-bold text-white text-[2vh] md:text-[1.8vw] mb-[1vh]  md:mt-[6vw] md:mb-[0vw] text-center">
                    Technical Skills
                </h3>
                <Card className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-[1vh] md:p-[1vw] h-full">
                        <div className="flex flex-wrap gap-[0.5vh] md:gap-[0.5vw] h-full content-start">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-[0.5vh] md:gap-[0.3vw] p-[0.5vh] md:p-[0.4vw] rounded-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group whitespace-nowrap"
                                >
                                    {skill.icon}
                                    <span className="text-white text-[1.2vh] md:text-[0.9vw] font-medium group-hover:text-cyan-300 transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Projects Section - Right Side */}
            <div className="flex-1 flex flex-col h-full ">
                <h3 className="font-bold text-white text-[2vh] md:text-[1.8vw] mb-[1vh] md:mb-[0vw] text-center">
                    Featured Projects
                </h3>
                <Card className="flex-1 backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-[1vh] md:p-[1vw] h-full">
                        <div className="space-y-[0.5vh] md:space-y-[0.5vw] h-full overflow-visible">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-md p-[1vh] md:p-[1vw] transition-all duration-300 cursor-pointer group ${
                                        hoveredProject === index 
                                            ? 'bg-white/20 border-cyan-400/50 shadow-xl shadow-cyan-400/20 transform scale-[1.02] z-10' 
                                            : 'hover:bg-white/15 hover:border-cyan-400/30'
                                    }`}
                                    onMouseEnter={() => {
                                        setHoveredProject(index);
                                        setSelectedProject(index);
                                    }}
                                    onMouseLeave={() => {
                                        setHoveredProject(null);
                                        setSelectedProject(null);
                                    }}
                                >
                                    {/* Project Header - Always Visible */}
                                    <div className="flex justify-between items-start mb-[0.5vh] md:mb-[0.5vw]">
                                        <h4 className="text-white font-semibold text-[1.4vh] md:text-[1.1vw] group-hover:text-cyan-300 transition-colors">
                                            {project.title}
                                        </h4>
                                        <div className="flex gap-[0.2vh] md:gap-[0.2vw]">
                                            {project.github && (
                                                <a 
                                                    href={project.github} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white/70 hover:text-cyan-300 transition-colors text-[1vh] md:text-[0.8vw]"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    ⚡
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a 
                                                    href={project.demo} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white/70 hover:text-cyan-300 transition-colors text-[1vh] md:text-[0.8vw]"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    🔗
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    {/* Skills Preview - Always Visible */}
                                    <div className="flex flex-wrap gap-[0.3vh] md:gap-[0.2vw] items-center">
                                        {project.skills.map((skill, skillIndex) => (
                                            <span 
                                                key={skillIndex}
                                                className="bg-blue-500/20 text-blue-300 px-[0.5vh] py-[0.2vh] md:px-[0.4vw] md:py-[0.1vw] rounded-full text-[1vh] md:text-[0.7vw] font-medium border border-blue-400/30"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {project.additionalSkills > 0 && (
                                            <span className="text-gray-300 text-[1vh] md:text-[0.7vw] font-medium">
                                                +{project.additionalSkills}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            {/* Project Popup Modal */}
            {selectedProject !== null && (
                <div 
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-[2vh] md:p-[2vw] pointer-events-none opacity-0 animate-[fadeIn_300ms_ease-out_forwards]"
                >
                    <div 
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-[2vh] md:p-[2vw] max-w-[90vw] md:max-w-[60vw] max-h-[80vh] overflow-y-auto pointer-events-auto opacity-0 translate-y-4 animate-[slideUpFade_500ms_ease-out_forwards]"
                        onMouseEnter={() => setSelectedProject(selectedProject)}
                        onMouseLeave={() => setSelectedProject(null)}
                    >
                        <div className="flex justify-between items-start mb-[1vh] md:mb-[1vw] opacity-0 animate-[fadeInDown_300ms_ease-out_100ms_forwards]">
                            <h3 className="text-white font-bold text-[2.5vh] md:text-[2vw] text-cyan-300">
                                {projects[selectedProject].title}
                            </h3>
                        </div>
                        
                        <div className="space-y-[1vh] md:space-y-[1vw] opacity-0 animate-[fadeInUp_400ms_ease-out_200ms_forwards]">
                            {/* Skills */}
                            <div>
                                <h4 className="text-cyan-300 font-semibold text-[1.5vh] md:text-[1.2vw] mb-[0.5vh] md:mb-[0.5vw]">Technologies Used:</h4>
                                <div className="flex flex-wrap gap-[0.5vh] md:gap-[0.5vw]">
                                    {projects[selectedProject].skills.map((skill, skillIndex) => (
                                        <span 
                                            key={skillIndex}
                                            className="bg-blue-500/20 text-blue-300 px-[1vh] py-[0.5vh] md:px-[1vw] md:py-[0.5vw] rounded-full text-[1.2vh] md:text-[1vw] font-medium border border-blue-400/30"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                    {projects[selectedProject].additionalSkills > 0 && (
                                        <span className="text-gray-300 text-[1.2vh] md:text-[1vw] font-medium self-center">
                                            +{projects[selectedProject].additionalSkills} more
                                        </span>
                                    )}
                                </div>
                            </div>
                            
                            {/* Description */}
                            <div>
                                <h4 className="text-cyan-300 font-semibold text-[1.5vh] md:text-[1.2vw] mb-[0.5vh] md:mb-[0.5vw]">Description:</h4>
                                <p className="text-gray-200 text-[1.3vh] md:text-[1vw] leading-relaxed">
                                    {projects[selectedProject].description}
                                </p>
                            </div>
                            
                            {/* Key Features */}
                            <div>
                                <h4 className="text-cyan-300 font-semibold text-[1.5vh] md:text-[1.2vw] mb-[0.5vh] md:mb-[0.5vw]">Key Features:</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-[0.5vh] md:gap-[0.5vw]">
                                    {projects[selectedProject].highlights.map((highlight, hIndex) => (
                                        <div key={hIndex} className="flex items-center text-gray-200 text-[1.2vh] md:text-[0.9vw]">
                                            <span className="text-cyan-400 mr-[0.5vh] md:mr-[0.5vw] text-[1vh] md:text-[0.8vw]">▸</span>
                                            {highlight}
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Links */}
                            <div className="flex gap-[1vh] md:gap-[1vw] pt-[1vh] md:pt-[1vw] border-t border-white/20">
                                {projects[selectedProject].github && (
                                    <a 
                                        href={projects[selectedProject].github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-[0.5vh] md:gap-[0.5vw] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 px-[1vh] py-[0.5vh] md:px-[1vw] md:py-[0.5vw] rounded-md text-white hover:text-cyan-300 transition-all duration-300 text-[1.2vh] md:text-[0.9vw]"
                                    >
                                        <span>⚡</span>
                                        GitHub
                                    </a>
                                )}
                                {projects[selectedProject].demo && (
                                    <a 
                                        href={projects[selectedProject].demo} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-[0.5vh] md:gap-[0.5vw] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 px-[1vh] py-[0.5vh] md:px-[1vw] md:py-[0.5vw] rounded-md text-white hover:text-cyan-300 transition-all duration-300 text-[1.2vh] md:text-[0.9vw]"
                                    >
                                        <span>🔗</span>
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SkillsSection;


