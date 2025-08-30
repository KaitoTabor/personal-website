import { ReactNode, useId } from 'react';

interface GlowButtonProps {
    children?: ReactNode;
    className?: string;
    glowColor?: string;
    onClick?: () => void;
    href?: string;
    icon?: string | ReactNode; // CSS class for the icon OR React component (e.g., Lucide icon)
    text?: string; // Text to display
    iconSize?: string; // Icon size class (e.g., "md:text-[5vw]")
    textSize?: string; // Text size class (e.g., "md:text-[2vw]")
}

const GlowButton = ({ 
    children, 
    className = "", 
    glowColor = "#0077b5", // LinkedIn blue as default
    onClick,
    href,
    icon,
    text,
    iconSize = "md:text-[5vw]",
    textSize = "md:text-[2vw]"
}: GlowButtonProps) => {
    const uniqueId = useId(); // Generate unique ID for each button
    const animationName = `glowPulse-${uniqueId.replace(/:/g, '-')}`; // Create unique animation name

    const renderIcon = () => {
        if (!icon) return null;
        
        // If icon is a string (CSS class), render as <i> element
        if (typeof icon === 'string') {
            return <i className={`${icon} ${iconSize} text-white`}></i>;
        }
        
        // If icon is a React component (like Lucide), render it directly
        return <div className={`${iconSize} text-white`}>{icon}</div>;
    };

    const handleMouseEnter = (target: HTMLElement) => {
        target.style.boxShadow = `
            0 0 0 3px ${glowColor},
            0 0 15px ${glowColor}88,
            0 0 30px ${glowColor}66,
            0 0 45px ${glowColor}44,
            inset 0 0 20px ${glowColor}33
        `;
        target.style.background = `rgba(42,42,39,0.95)`;
    };

    const handleMouseLeave = (target: HTMLElement) => {
        target.style.boxShadow = `
            0 0 0 2px ${glowColor},
            0 0 10px ${glowColor}66,
            0 0 20px ${glowColor}44,
            0 0 30px ${glowColor}22,
            inset 0 0 10px ${glowColor}11
        `;
        target.style.background = `rgba(42,42,39,0.8)`;
    };

    const buttonContent = (
        <div 
            className={`rounded-lg bg-[rgba(42,42,39,0.8)] cursor-pointer relative transition-all duration-500 hover:bg-[rgba(42,42,39,0.9)] ${className}`}
            style={{
                boxShadow: `
                    0 0 0 2px ${glowColor},
                    0 0 10px ${glowColor}66,
                    0 0 20px ${glowColor}44,
                    0 0 30px ${glowColor}22,
                    inset 0 0 10px ${glowColor}11
                `,
                animation: `${animationName} 3s ease-in-out infinite alternate`
            }}
            onClick={onClick}
        >
            {children || (
                <>
                    {/* Fixed position icon */}
                    {icon && (
                        <div className="absolute left-[1vw] top-1/2 transform -translate-y-1/2 flex items-center justify-center">
                            {renderIcon()}
                        </div>
                    )}
                    {/* Text with left margin to account for icon */}
                    {text && (
                        <div className={`flex items-center justify-center w-full h-full ${icon ? 'pl-[6vw]' : ''}`}>
                            <span className={`${textSize} text-white text-center`}>{text}</span>
                        </div>
                    )}
                    {/* If no text, center the icon */}
                    {!text && icon && (
                        <div className="flex items-center justify-center w-full h-full">
                            {renderIcon()}
                        </div>
                    )}
                </>
            )}
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes ${animationName} {
                        0% {
                            box-shadow: 
                                0 0 0 2px ${glowColor},
                                0 0 0px ${glowColor}66,
                                0 0 0px ${glowColor}44,
                                0 0 0px ${glowColor}22,
                                inset 0 0 0px ${glowColor}11;
                        }
                        100% {
                            box-shadow: 
                                0 0 0 2px ${glowColor},
                                0 0 10px ${glowColor}88,
                                0 0 20px ${glowColor}66,
                                0 0 30px ${glowColor}44,
                                inset 0 0 10px ${glowColor}22;
                        }
                    }
                `
            }} />
        </div>
    );

    if (href) {
        return (
            <a 
                href={href} 
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={(e) => {
                    const buttonDiv = e.currentTarget.querySelector('div') as HTMLElement;
                    if (buttonDiv) handleMouseEnter(buttonDiv);
                }}
                onMouseLeave={(e) => {
                    const buttonDiv = e.currentTarget.querySelector('div') as HTMLElement;
                    if (buttonDiv) handleMouseLeave(buttonDiv);
                }}
            >
                {buttonContent}
            </a>
        );
    }

    return (
        <div
            onMouseEnter={(e) => handleMouseEnter(e.currentTarget)}
            onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
            {buttonContent}
        </div>
    );
};

export default GlowButton;
