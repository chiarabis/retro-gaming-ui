
import { GridContainer, NavbarContent, Sparkle } from "./Navbar.styles";
import { useState, useLayoutEffect, useRef } from "react";


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
    const textRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const [textWidths, setTextWidths] = useState<number[]>([]);

    //ottieni le larghezze dei testi dinamici dei link (pixels)
    useLayoutEffect(() => {
        const widths = textRefs.current.map(ref => ref?.offsetWidth || 0);
        setTextWidths(widths);
    }, []);



    return (
        <GridContainer gridColor={gridColor}>
            <NavbarContent textColor={textColor} gap={gap} fontSize={fontSize}>
                
                {links.map((link, index) => (
                    <div key={index} style={{ display: 'inline-block', position: 'relative', overflow: 'visible' }}
                        onMouseOver={() => setShowSparkles(index)} 
                        onMouseEnter={() => setShowSparkles(index)}
                        onMouseLeave={() => setShowSparkles(index)}
                        onFocus={() => setShowSparkles(index)}
                        onBlur={() => setShowSparkles(null)}
                        >

                        <a href={link.href} style={{ textDecoration: 'none', color: 'inherit', position: 'relative' }}
                        ref={(el) => { textRefs.current[index] = el; }}>
                            {link.label}
                        </a>

                        {showSparkles === index && textWidths[index] && 
                            <div style={{ pointerEvents: 'none' }}>
                                <Sparkle width={5.4} height={5.4} background="#12b8af" rotate={45} top={-1} left={textWidths[index] + 4} right={0} delay={0.3}/>
                                <Sparkle width={3} height={3} background="#0c8552" rotate={45} top={10} left={textWidths[index] + 12} right={0} delay={0} />

                                <div style={{ position: 'absolute', top: "5px", right: `${textWidths[index] + 18}px` }}>
                                    <Sparkle width={6} height={1} background="#10866d" rotate={0} top={12} left={8} right={0} delay={0}/>
                                    <Sparkle width={1} height={6.5} background="#a4a71e" rotate={0} top={9} left={10} right={0} delay={0} />
                                </div>

                                <Sparkle width={1.5} height={1.5} background="#07439cff" rotate={45} top={21} right={textWidths[index]} left={0} delay={0.5}/>
                                <Sparkle width={3.5} height={3.5} background="#b31f14" rotate={45} top={1} right={textWidths[index] + 900} left={0} delay={0.5}/>
                            </div>
                        }
                    </div>
                ))}
            
            </NavbarContent>
        </GridContainer>
    )
}