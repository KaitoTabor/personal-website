import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
const ExperienceSection = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
    const experiences = [
        {
            title: 'Machine Learning Engineer',
            company: 'JESGO CO. Ltd',
            period: 'September 2025 - Present',
            location: 'Remote',
            description:
                '● Built a static analysis system for webpages that flags potential vulnerability points, validated through dynamic security testing \n● Designed a RAG pipeline that generates targeted search queries and retrieves knowledge from aggregated cybersecurity documents, providing the agent with relevant expertise for each vulnerability under testing \n● Designed a DynamoDB optimized database schema to support database migration to AWS \n● Implemented dashboards to analyze employee survey results, ESG scoring, and company stock performances',
            skills: ['Python', 'Machine Learning', 'Security', 'AI', 'Threat Detection'],
            highlights: [
                'Building white-hat AI security agent',
                'Implementing ML-based threat recognition',
                'Rule-based vulnerability detection',
      z      ],
        },
        {
            title: 'Software Engineering Intern',
            company: 'UNICS CO. LLC - Japan',
            period: 'October 2025 - Present',
            location: 'Remote',
            description:
                '● Building a real estate platform with a reactive UI that streamlines property search and automates steps in the documenting and brokerage process \n● Constructed SQL filtered dashboards for analyzing market trends and price drops of both public and private listings \n● Created a RAG knowledge base to power an in-platform real estate AI assistant',
            skills: ['React', 'TypeScript', 'Real Estate Tech', 'UI/UX', 'Automation'],
            highlights: [
                'Reactive UI development',
                'Property search optimization',
                'Process automation for brokerage',
            ],
        },
        {
            title: 'Machine Learning Engineering Intern',
            company: 'JESGO CO. Ltd',
            period: 'June 2025 - August 2025',
            location: 'Roppongi, Tokyo',
            description:
                '● Built an ESG scoring agent that scrapes and analyzes various online company disclosures with an LLM pipeline, automating ESG scoring for investing and M&A risk assessment \n● Improved data handling reliability by 21% by creating a hybrid post-processing and pre-processing system using rule-based and LLM checks \n● Scaled pipeline to evaluate 900+ ESG criteria per company from disclosures, producing normalized ESG benchmarks across all prime-listed firms in Japan \n● Deployed an AWS Lambda chatbot integrating dynamic prompting based on Big Five personality traits and managed user state/demographics with DynamoDB \n● Designed backend APIs + AWS RDS infrastructure powering an employee survey platform used across multiple enterprises ● Processed free-text and categorical survey responses with LLM-based sentiment analysis and statistical tests (ANOVA, Chi²) to dynamically format results for frontend dashboards',
            skills: ['Python', 'AWS Lambda', 'MongoDB', 'LLM', 'ESG Analysis'],
            highlights: [
                'Improved data handling reliability by 21%',
                'Scaled pipeline to evaluate 900+ ESG criteria per company',
                'Deployed AWS Lambda chatbot with Big Five personality integration',
                'Built APIs for multi-enterprise survey platform with LLM sentiment analysis',
            ],
        },
    ];
    return (
        <div
            className="h-full w-full pt-[4vh] md:pt-[4vw] px-[2vh] md:px-[2vw] pb-[2vh] md:pb-[2vw] overflow-y-auto scrollbar-hide"
            style={{
                backgroundImage: "url('/Hero-image-ocean.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="relative max-w-[90%] top-[5vh] md:top-0 mx-auto h-[100vh]">
                <div className="absolute left-[2vh] md:left-[3vw] top-0 bottom-0 w-[0.2vh] md:w-[0.2vw] bg-gradient-to-b from-blue-400 via-cyan-400 to-teal-400 shadow-lg"></div>
                {experiences.map((exp, index) => {
                    const dynamicPadding = 2 / experiences.length;
                    return (
                        <div
                            key={index}
                            className="relative mb-[0.5vh] md:mb-[0.5vw] group cursor-pointer"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                        >
                            <div
                                className={`absolute left-[1.4vh] md:left-[2.4vw] w-[1.2vh] h-[1.2vh] md:w-[1.2vw] md:h-[1.2vw] rounded-full transition-all duration-300 ${
                                    hoveredIndex === index
                                        ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-400/50 scale-125'
                                        : 'bg-white/80 shadow-md'
                                } border-[0.2vh] md:border-[0.2vw] border-white/60 z-10`}
                            ></div>
                            <div className="ml-[4vh] md:ml-[6vw]">
                                <Card
                                    className={`backdrop-blur-md  md:py-[0.5vw] border transition-all duration-300 ${
                                        hoveredIndex === index || expandedIndex === index
                                            ? 'bg-white/20 border-cyan-400/50 shadow-xl shadow-cyan-400/20 transform scale-[1.01]'
                                            : 'bg-white/10 border-white/20 shadow-lg'
                                    }`}
                                >
                                    <CardContent
                                        className="p-[0vh] md:px-[0.8vw]"
                                        style={{
                                            paddingTop: `${dynamicPadding}vw`,
                                            paddingBottom: `${dynamicPadding}vw`,
                                        }}
                                    >
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                                            <div className="flex-1">
                                                <h3 className="text-white font-bold text-[1.4vh] md:text-[1.4vw] mb-[0.1vh] md:mb-[0vw] group-hover:text-cyan-300 transition-colors">
                                                    {exp.title}
                                                </h3>
                                                <div className="flex flex-col md:flex-row md:items-center gap-[0.1vh] md:gap-[0.4vw]">
                                                    <h4 className="text-blue-200 font-semibold text-[1vh] md:text-[1vw]">
                                                        {exp.company}
                                                    </h4>
                                                    <span className="text-gray-300 text-[0.9vh] md:text-[0.9vw]">
                                                        {exp.location}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-[0.6vh] md:gap-[0.6vw] mt-[0.2vh] md:mt-0">
                                                <span className="text-cyan-300 font-medium text-[1vh] md:text-[1vw] bg-cyan-900/30 px-[0.5vh] py-[0.15vh] md:px-[0.5vw] md:py-[0.15vw] rounded-full">
                                                    {exp.period}
                                                </span>
                                                <div
                                                    className={`text-cyan-400 text-[1vh] md:text-[0.9vw] transition-transform duration-300 ${
                                                        expandedIndex === index ? 'rotate-180' : ''
                                                    }`}
                                                >
                                                    ▼
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className={`overflow-hidden transition-all duration-500 ease-out ${
                                                expandedIndex === index
                                                    ? 'max-h-[40vh] md:max-h-[30vw] opacity-100 mt-[0.5vh] md:mt-[0vw]'
                                                    : 'max-h-0 opacity-0'
                                            }`}
                                        >
                                            <div className="border-t border-white/20 pt-[0.5vh] md:pt-[0.5vw] space-y-[0.5vh] md:space-y-[0vw]">
                                                <p className="text-gray-200 leading-tight text-[1vh] md:text-[1vw] whitespace-pre-line">
                                                    {exp.description}
                                                </p>
                                                <div>
                                                    <h5 className="text-cyan-300 font-semibold text-[1vh] md:text-[1vw] mb-[0.2vh] md:mb-[0.2vw]">
                                                        Technologies:
                                                    </h5>
                                                    <div className="flex flex-wrap gap-[0.2vh] md:gap-[0.2vw]">
                                                        {exp.skills.map((skill, skillIndex) => (
                                                            <span
                                                                key={skillIndex}
                                                                className="bg-blue-500/20 text-blue-300 px-[0.4vh] py-[0.1vh] md:px-[0.4vw] md:py-[0.1vw] rounded-full text-[0.9vh] md:text-[0.9vw] font-medium border border-blue-400/30 hover:bg-blue-400/30 transition-colors"
                                                            >
                                                                {skill}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="text-cyan-300 font-semibold text-[1vh] md:text-[1vw] mb-[0.2vh] md:mb-[0.2vw]">
                                                        Key Achievements:
                                                    </h5>
                                                    <ul className="space-y-[0.2vh] md:space-y-[0.2vw]">
                                                        {exp.highlights.map(
                                                            (highlight, highlightIndex) => (
                                                                <li
                                                                    key={highlightIndex}
                                                                    className="text-gray-200 text-[0.9vh] md:text-[0.9vw] flex items-start leading-tight"
                                                                >
                                                                    <span className="text-cyan-400 mr-[0.3vh] md:mr-[0.3vw] text-[0.7vh] md:text-[0.6vw]">
                                                                        ▸
                                                                    </span>
                                                                    {highlight}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    );
                })}
                <div className="relative flex items-center justify-center mt-[2vh] md:mt-[2vw]">
                    <div className="absolute left-[1.4vh] md:left-[2.4vw] w-[1.2vh] h-[1.2vh] md:w-[1.2vw] md:h-[1.2vw] rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 shadow-lg border-[0.2vh] md:border-[0.2vw] border-white/60"></div>
                    <div className="ml-[4vh] md:ml-[6vw] bg-gradient-to-r from-teal-500/20 to-cyan-500/20 backdrop-blur-md border border-cyan-400/30 rounded-lg px-[2vh] py-[1vh] md:px-[2vw] md:py-[1vw]">
                        <p className="text-cyan-300 font-kanji text-[1.6vh] md:text-[1.6vw] text-center">
                            Ready for the next adventure
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ExperienceSection;
