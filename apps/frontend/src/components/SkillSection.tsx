import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
const SkillsSection = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);
    const skills = [
        { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "SQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Java", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "JavaScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "HTML", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "CSS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "C#", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "C", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "R", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "PyTorch", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "TensorFlow", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Scikit-Learn", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Pandas", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Langchain", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Asyncio", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Playwright", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "NumPy", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "OpenCV", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "MySQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "MongoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Oracle", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Flask", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Express", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "TypeScript", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Prisma ORM", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Tailwind", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "AWS Lambda", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "AWS EC2", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "AWS RDS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Docker", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Git", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Anaconda", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/anaconda/anaconda-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Markdown", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> },
        { name: "Jupyter Notebook", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" className="w-[1.5vh] h-[1.5vh] md:w-[1.2vw] md:h-[1.2vw]" /> }
    ];
    const projects = [
        {
            title: "Personal Portfolio Website",
            skills: ["React", "TypeScript", "Tailwind"],
            additionalSkills: 2,
            description: "Modern responsive portfolio featuring ocean-themed loading animations, glass-morphism design, and smooth transitions. Built with React and TypeScript for optimal performance and user experience.",
            highlights: ["Ocean-themed Animations", "Glass-morphism UI", "Responsive Design", "Smooth Transitions", "Modern Architecture"],
            github: "https://github.com/KaitoTabor/personal-website",
            demo: "https://ktabor.dev",
            manual: null
        },
        {
            title: "Hospital Navigation & Service Request Web App",
            skills: ["React", "TypeScript", "PostgreSQL"],
            additionalSkills: 5,
            description: "WARNING: The AWS instance has not been updated in some time so some API features may be broken.\nLed a 10-person team in building a cloud-based hospital navigation and service request web app for Brigham & Women's Hospital using Agile methods. Built with PERN stack featuring interactive pathfinding, map editor, and voice-activated UI.",
            highlights: ["Team Leadership (10 people)", "Pathfinding & Interactive Maps", "Voice-Activated UI", "AWS EC2 + RDS Deployment", "Dockerized Architecture", "Hospital Workflow Optimization"],
            github: "https://github.com/KaitoTabor/hospital-website",
            demo: "https://d1c7tggz7ivl8h.cloudfront.net/login",
            manual: "https://drive.google.com/file/d/1pxqoj9CxIbZJvNwBO8ekU7tQKi9batV9/view?usp=sharing"
        },
        {
            title: "ASL Spelling Detection API",
            skills: ["Python", "Flask", "OpenCV"],
            additionalSkills: 3,
            description: "Built a real-time ASL fingerspelling recognition system achieving 96% test accuracy and 98% validation accuracy. Integrated into the Brigham Hospital app to enable ASL-only search functionality for improved accessibility.",
            highlights: ["96% Test Accuracy", "98% Validation Accuracy", "MediaPipe + MLP Pipeline", "Real-time Recognition", "Accessibility Integration", "Custom Data Collection Tool"],
            github: "https://github.com/KaitoTabor/ASL-CV",
            demo: null,
            manual: null
        },
        {
            title: "EASE - Gamified Planner App",
            skills: ["React", "Python", "TensorFlow"],
            additionalSkills: 2,
            description: "Collaborated in a 4-person team to build a gamified planner app that reduces teen stress through interactive task planning. Features a Deep Neural Network achieving 85% accuracy in predicting task difficulty and stress levels.",
            highlights: ["Stress Reduction Focus", "Deep Neural Network", "85% Prediction Accuracy", "Gamified Interface", "Teen Mental Health", "Synthetic Data Training"],
            github: "https://github.com/KaitoTabor/SASEHACK2024",
            demo: null,
            manual: null
        },
    ];
    return (
        <div 
            className="h-full w-full flex flex-col md:flex-row gap-[2vh] md:gap-[2vw] p-[2vh] md:p-[0vw]"
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
            <div className="flex-1 flex flex-col h-full">
                <h3 className="font-bold text-white text-[2vh] md:text-[1.8vw] mb-[0vh]  md:mt-[3vw] md:mb-[0.5vw] text-center">
                    Technical Skills
                </h3>
                <Card className="flex-1 backdrop-blur-md pt-[1vh] pb-[1vh] bg-white/10 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-x-[1vh] pt-0 pb-0 md:p-[1vw] h-full">
                        <div className="flex flex-wrap gap-[0.5vh] md:gap-[0.5vw] h-full content-start">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-[0.2vh] md:gap-[0.3vw] p-[0.2vh] md:p-[0.4vw] rounded-md bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 transition-all duration-300 group whitespace-nowrap"
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
            <div className="flex-1 flex flex-col h-full ">
                <h3 className="font-bold text-white text-[2vh] md:text-[1.8vw] mb-[0vh] md:mt-[3vw]  md:mb-[0.5vw] text-center">
                    Featured Projects
                </h3>
                <Card className="flex-1 backdrop-blur-md pt-[1vh] pb-[1vh] bg-white/10 border border-white/20 shadow-lg hover:bg-white/15 transition-all duration-300 overflow-hidden">
                    <CardContent className="p-[1vh] pt-0 pb-0 md:p-[1vw] h-full">
                        <div className="space-y-[0.5vh] md:space-y-[0.5vw] h-full overflow-visible">
                            {projects.map((project, index) => (
                                <div
                                    key={index}
                                    className={`relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-md p-[1vh] md:p-[1vw] transition-all duration-300 cursor-pointer group ${
                                        hoveredProject === index 
                                            ? 'bg-white/20 border-cyan-400/50 shadow-xl shadow-cyan-400/20 transform scale-[1.02] z-10' 
                                            : 'hover:bg-white/15 hover:border-cyan-400/30'
                                    }`}
                                    onMouseEnter={() => setHoveredProject(index)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                    onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                                >
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
                                                    🔗
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
                                                    ⚡
                                                </a>
                                            )}
                                            {project.manual && (
                                                <a 
                                                    href={project.manual} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-white/70 hover:text-cyan-300 transition-colors text-[1vh] md:text-[0.8vw]"
                                                    onClick={(e) => e.stopPropagation()}
                                                >
                                                    📖
                                                </a>
                                            )}
                                        </div>
                                    </div>
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
            {selectedProject !== null && (
                <div 
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-[2vh] md:p-[2vw] opacity-0 animate-[fadeIn_300ms_ease-out_forwards]"
                    onClick={() => setSelectedProject(null)}
                >
                    <div 
                        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-[2vh] md:p-[2vw] max-w-[90vw] md:max-w-[60vw] max-h-[80vh] overflow-y-auto opacity-0 translate-y-4 animate-[slideUpFade_500ms_ease-out_forwards] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="absolute top-[1vh] right-[1vh] md:top-[1vw] md:right-[1vw] w-[3vh] h-[3vh] md:w-[2vw] md:h-[2vw] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-red-400/50 rounded-full flex items-center justify-center text-white hover:text-red-400 transition-all duration-300 z-10"
                            style={{ lineHeight: '1' }}
                        >
                            <div className="flex items-center justify-center w-full h-full text-[1.6vh] md:text-[1.3vw] font-bold transform translate-y-[-1px]">
                                ×
                            </div>
                        </button>
                        <div className="flex justify-between items-start mb-[1vh] md:mb-[1vw] opacity-0 animate-[fadeInDown_300ms_ease-out_100ms_forwards] pr-[4vh] md:pr-[3vw]">
                            <h3 className="text-white font-bold text-[2.5vh] md:text-[2vw] text-cyan-300">
                                {projects[selectedProject].title}
                            </h3>
                        </div>
                        <div className="space-y-[1vh] md:space-y-[1vw] opacity-0 animate-[fadeInUp_400ms_ease-out_200ms_forwards]">
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
                            <div>
                                <h4 className="text-cyan-300 font-semibold text-[1.5vh] md:text-[1.2vw] mb-[0.5vh] md:mb-[0.5vw]">Description:</h4>
                                <p className="text-gray-200 text-[1.3vh] md:text-[1vw] leading-relaxed whitespace-pre-line">
                                    {projects[selectedProject].description}
                                </p>
                            </div>
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
                            <div className="flex gap-[1vh] md:gap-[1vw] pt-[1vh] md:pt-[1vw] border-t border-white/20">
                                {projects[selectedProject].github && (
                                    <a 
                                        href={projects[selectedProject].github} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-[0.5vh] md:gap-[0.5vw] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 px-[1vh] py-[0.5vh] md:px-[1vw] md:py-[0.5vw] rounded-md text-white hover:text-cyan-300 transition-all duration-300 text-[1.2vh] md:text-[0.9vw]"
                                    >
                                        <span>🔗</span>
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
                                        <span>⚡</span>
                                        Live Demo
                                    </a>
                                )}
                                {projects[selectedProject].manual && (
                                    <a 
                                        href={projects[selectedProject].manual} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-[0.5vh] md:gap-[0.5vw] bg-white/10 hover:bg-white/20 border border-white/20 hover:border-cyan-400/50 px-[1vh] py-[0.5vh] md:px-[1vw] md:py-[0.5vw] rounded-md text-white hover:text-cyan-300 transition-all duration-300 text-[1.2vh] md:text-[0.9vw]"
                                    >
                                        <span>📖</span>
                                        User Manual
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
