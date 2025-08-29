import { Card, CardContent } from "./ui/card";

const Skill = ({ name, icon }) => {
    return (
        <Card className=" m-0 p-[0.4vh] md:p-[0.6vw]   text-white  text-[1.5vh] md:text-[1.5vw]  bg-gradient-to-bl from-[rgba(35,37,41,0.7)] to-[rgba(255,255,255,0.2)] border-[rgba(35,37,41,1)] shadow-[0_0_1vw_rgba(0,0,0,0.3)]">
            <CardContent className="flex-row flex items-center justify-center m-0 p-0 gap-x-[0.7vh] md:gap-x-[1vw]">
                {icon}
                {name}
            </CardContent>
        </Card>
    );
}

const iconTailwind = "inline-block rounded-lg  w-[2.5vh] h-[2.5vh] md:w-[2.5vw] md:h-[2.5vw]";

const skills = [
    { name: "AWS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className={iconTailwind} /> },
    { name: "MangoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" className={iconTailwind} /> },
    { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className={iconTailwind} /> },
    { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className={iconTailwind} /> },
    { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" className={iconTailwind} /> },
    { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" className={iconTailwind} /> },
    { name: "Express", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className={iconTailwind} /> },

    //extra to test spacing
    { name: "AWS", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" className={iconTailwind} /> },
    { name: "MangoDB", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg" className={iconTailwind} /> },
    { name: "Node.js", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" className={iconTailwind} /> },
    { name: "React", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className={iconTailwind} /> },
    { name: "Python", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg" className={iconTailwind} /> },
    { name: "PostgreSQL", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg" className={iconTailwind} /> },
    { name: "Express", icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" className={iconTailwind} /> }
];

const SkillsSection = () => {
    return (
        <div className="flex flex-row  flex-wrap items-center justify-center w-full  gap-x-[0.5vh] gap-y-[0.5vh] md:gap-x-[1vw] md:gap-y-[0.5vw]">
            {skills.map((skill, index) => (
                <Skill key={index} name={skill.name} icon={skill.icon} />
            ))}
        </div>
    );
};

export default SkillsSection;


