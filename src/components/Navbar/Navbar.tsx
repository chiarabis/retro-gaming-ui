
import { GridContainer, NavbarContent } from "./Navbar.styles";
import { useState, useEffect, useRef } from "react";


export interface NavLink {
  label: string;
  href: string;
}


export type NavbarProps = {
    gridColor: string;
    links: NavLink[];
    textColor: string;
    gap?: number;
    fontSize?: number;
    //backgroundColor: string;
}


export default function Navbar({
    gridColor,
    links,
    textColor,
    gap,
    fontSize,
    //backgroundColor,
}: NavbarProps) {
    const [showSparkles, setShowSparkles] = useState<number | null>(null);
    const [textWidths, setTextWidths] = useState<number[]>([]);
    const refs = useRef<(HTMLAnchorElement | null)[]>([]);


    useEffect(() => {
        const widths = refs.current.map((el) => (el ? el.offsetWidth : 0));
        setTextWidths(widths);
    }, [links]);

    return (
        <GridContainer gridColor={gridColor}>
            <NavbarContent textColor={textColor} gap={gap} fontSize={fontSize}>
                
                {links.map((link, index) => (
                    <div key={index} style={{ display: 'inline-block', position: 'relative', overflow: 'visible' }}
                        onMouseOver={() => setShowSparkles(index)}  
                        onMouseEnter={() => setShowSparkles(index)}
                        onMouseLeave={() => setShowSparkles(null)}
                        onFocus={() => setShowSparkles(index)}
                        onBlur={() => setShowSparkles(null)}>

                        <a href={link.href} style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}
                        ref={(el) : void => {refs.current[index] = el}}>
                            {link.label}
                        </a>

                        {showSparkles === index && textWidths[index] && (
                            <span style={{ position: 'absolute', pointerEvents: 'none', inset: 0, bottom: 0 }}>
                            <span className="sparkle-animation"
                                style={{
                                    position: "absolute",
                                    width: "5.4px",
                                    height: "5.4px",
                                    background: "blue",
                                    transform: "rotate(45deg)",
                                    left: `${textWidths[index]}px`,
                                    top: "-1px",
                                }}
                            />
                            <span className="sparkle-animation delay-200"
                                style={{
                                    position: "absolute", 
                                    width: "3.5px",
                                    height: "3.5px",
                                    background: "blue",
                                    transform: "rotate(45deg)",
                                    left: `${textWidths[index] + 10}px`,
                                    top: "10px",
                                }}
                            />
                            <span className="sparkle-animation delay-100"
                                style={{
                                    position: "absolute",
                                    width: "4px",
                                    height: "4px",
                                    transform: "rotate(45deg)",
                                    background: "blue",
                                    left: `-${textWidths[index] - 10}px`,
                                    top: 0
                                }}
                            />
                            </span>


                            // <span className="absolute bottom-0 inset-0 pointer-events-none">
                            //     <span
                            //     className="absolute bottom-0 rotate-45 z-50 w-1 h-1 bg-red-500 sparkle-animation"
                            //     style={{ left: `${textWidths[index] * 0.95}px` }}
                            //     ></span>
                            //     <span
                            //     className="absolute bottom-3 rotate-45 z-50 w-[0.2rem] h-[0.2rem] bg-red-500 sparkle-animation delay-200"
                            //     style={{ left: `${textWidths[index] * 1.1}px` }}
                            //     ></span>
                            //     <span
                            //     className="absolute bottom-1 -left-2 rotate-45 z-50 w-[0.3rem] h-[0.3rem] bg-red-500 sparkle-animation delay-100"
                            //     ></span>
                            //     <span
                            //     className="absolute bottom-7 left-0 rotate-45 z-50 w-[0.1rem] h-[0.1rem] bg-red-500 sparkle-animation delay-200"
                            //     ></span>

                            //     <div className="absolute bottom-3 -left-7 sparkle-animation">
                            //         <span className="absolute bottom-2 left-3 z-50 w-[0.45rem] h-[1px] bg-red-500"></span>
                            //         <span className="absolute bottom-1 left-[0.95rem] z-50 h-[0.5rem] w-[1px] bg-red-500"></span>
                            //     </div>
                            // </span>
                        )}
                    </div>
                ))}
            
            </NavbarContent>
        </GridContainer>
    )
}