import { Card, CardContent } from "./ui/card";

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Data Scientist",
            company: "Tech Company",
            period: "2023 - Present",
            description: "Working on machine learning models and data analysis to drive business insights and product improvements."
        },
        {
            title: "Software Engineer Intern",
            company: "Startup Inc.",
            period: "2022 - 2023",
            description: "Developed full-stack applications using React, Node.js, and various databases. Contributed to product development."
        },
        {
            title: "Research Assistant",
            company: "WPI",
            period: "2021 - 2022",
            description: "Conducted research in machine learning and deep learning applications. Published findings in academic conferences."
        }
    ];

    return (
        <div className="space-y-6">
            {experiences.map((exp, index) => (
                <Card key={index} className="bg-white bg-opacity-10 border border-white border-opacity-20 backdrop-blur-sm">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                            <h3 className="text-xl md:text-2xl font-semibold text-white">{exp.title}</h3>
                            <span className="text-blue-200 font-medium">{exp.period}</span>
                        </div>
                        <h4 className="text-lg text-blue-100 mb-3">{exp.company}</h4>
                        <p className="text-gray-200 leading-relaxed">{exp.description}</p>
                    </CardContent>
                </Card>
            ))}
            
            <div className="mt-8 text-center">
                <p className="text-white text-lg font-kanji">
                    More details coming soon...
                </p>
            </div>
        </div>
    );
}

export default ExperienceSection;