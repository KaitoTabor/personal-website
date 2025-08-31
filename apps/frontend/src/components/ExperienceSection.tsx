import { Card, CardContent } from "./ui/card";

const ExperienceSection = () => {
    const experiences = [
        {
            title: "Software Engineer",
            company: "Tech Company",
            period: "2023 - Present",
            description: "Working on full-stack development with React and Node.js"
        },
        {
            title: "Data Scientist",
            company: "Data Corp",
            period: "2022 - 2023",
            description: "Developed machine learning models for predictive analytics"
        },
        {
            title: "Intern Developer",
            company: "Startup Inc",
            period: "2021 - 2022",
            description: "Assisted in building web applications and data visualization tools"
        }
    ];

    return (
        <div className="w-full p-4">
            <div className="space-y-4">
                {experiences.map((exp, index) => (
                    <Card key={index} className="bg-[rgba(35,37,41,0.8)] border-[rgba(255,255,255,0.2)] text-white">
                        <CardContent className="p-4">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-semibold">{exp.title}</h3>
                                <span className="text-sm text-gray-300">{exp.period}</span>
                            </div>
                            <h4 className="text-md text-blue-300 mb-2">{exp.company}</h4>
                            <p className="text-sm text-gray-200">{exp.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ExperienceSection;