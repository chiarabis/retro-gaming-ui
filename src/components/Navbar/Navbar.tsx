
import { GridContainer, NavbarContent, Sparkle } from "./Navbar.styles";
import { useState, useLayoutEffect, useRef } from "react";
import { Container } from "../../components/Background/general.styles";


export interface NavLink {
  name: string;
  href?: string;
}




export type NavbarProps = {
    gridColor: string;
    links: NavLink[];
    textColor: string;
    gap?: number;
    fontSize?: number;
    backgroundColor: string;
    position?: string;
    justify?: string;
}


export default function Navbar({
    gridColor,
    links,
    textColor,
    gap,
    fontSize,
    backgroundColor,
    position,
    justify = 'center',
    handleOpenModal
}: NavbarProps & { handleOpenModal: (name: string) => void }) {

    const [showSparkles, setShowSparkles] = useState<number | null>(null); 
    //const textRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const textRefs = useRef<(HTMLAnchorElement | HTMLButtonElement | null)[]>([]);
    const [textWidths, setTextWidths] = useState<number[]>([]);

    //ottieni le larghezze dei testi dinamici dei link (pixels)
    useLayoutEffect(() => {
        const widths = textRefs.current.map(ref => ref?.offsetWidth || 0);
        setTextWidths(widths);
    }, []);


  



    return (
        <Container backgroundColor={backgroundColor} position={position}>
        <GridContainer gridColor={gridColor}>
            <NavbarContent textColor={textColor} gap={gap} justify={justify} fontSize={fontSize}>
                
                {links.map((link, index) => (
                    <div key={index} style={{ display: 'inline-block', position: 'relative', overflow: 'visible', cursor: 'pointer' }} 
                        onMouseEnter={() => setShowSparkles(index)}
                        onMouseLeave={() => setShowSparkles(null)}
                        onFocus={() => setShowSparkles(index)}
                        onBlur={() => setShowSparkles(null)}>

                        {link.href ? (
                            <a
                                href={link.href}
                                ref={(el) => {
                                    textRefs.current[index] = el;
                                }}
                            >
                                {link.name}
                            </a>
                            ) : (
                            <button
                                type="button"
                                onClick={() => handleOpenModal(link.name)}
                                ref={(el) => {
                                    textRefs.current[index] = el;
                                }}
                            >
                                {link.name}
                            </button>
                        )}
                        
                        
                        
                        


                        {showSparkles === index && textWidths[index] && 
                            <div>
                                <div style={{position: 'absolute', left: `${textWidths[index] + 22}px`}}>
                                    <Sparkle width={5.4} height={5.4} background="#00ffff" rotate={45} top={-28} left={-13} right={0} delay={0.3}/>
                                    <Sparkle width={3} height={3} background="#e60076" rotate={45} top={-15} left={-15} right={0} delay={0} />
                                </div>

                                <div style={{ position: 'absolute', top: "5px", left: `-22px` }}>
                                    <Sparkle width={6} height={1} background="#F8FF2A" rotate={0} top={12} left={7} right={0} delay={0}/>
                                    <Sparkle width={1} height={6.5} background="#F8FF2A" rotate={0} top={9} left={10} right={0} delay={0} />
                                </div>

                                <Sparkle width={1.5} height={1.5} background="#00ffff" rotate={45} top={30} right={0} left={-5} delay={0.5}/>
                                <Sparkle width={3.5} height={3.5} background="#e60076" rotate={45} top={-3} right={50} left={0} delay={0.5}/>
                            </div>
                        }
                    </div>
                ))}
            
            </NavbarContent>
        </GridContainer>
        </Container>
    )
}