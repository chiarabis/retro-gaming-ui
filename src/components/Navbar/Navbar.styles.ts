import styled, { keyframes } from "styled-components";


const sparkleAnimation = keyframes`
  animation: pulse 0.7s ease-in-out infinite;
`;

const delay100 = keyframes`
  animation-delay: 0.1s;
`;

const delay200 = keyframes`
  animation-delay: 0.2s;
`;


// export const Container = styled.div<{ backgroundColor?: string}>`
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100vh;
//     overflow: hidden;
//     pointer-events: none;
//     background-color: ${({ backgroundColor }) => backgroundColor};
//     z-index: -999;
// `;


export const GridContainer = styled.div<{
    gridColor: string;
}>`
    position: absolute;
    top: 0;
    width: 100%;
    height: fit-content;
    pointer-events: none;
    
    background: transparent;
    background-image: linear-gradient(to right, ${({ gridColor }) => gridColor} 1px, transparent 1px),
        linear-gradient(to bottom, ${({ gridColor }) => gridColor} 1px, transparent 1px);

    background-size: 20px 20px;

    -webkit-mask-image: linear-gradient(
        to bottom,
        white 70%,
        transparent 100%
    );
    mask-image: linear-gradient(
        to bottom,
        white 70%,
        transparent 100%
    );
`

export const NavbarContent = styled.div<{
    textColor: string;
    gap?: number;
    fontSize?: number;
}>`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 1rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    gap: ${({ gap }) => `${gap}rem`};
    font-size: ${({ fontSize }) => `${fontSize}rem`};

    color: ${({ textColor }) => textColor};

    animation: ${sparkleAnimation} 0.7s ease-in-out infinite;
    animation-delay: 0.1s;
`




// <div className="flex flex-row justify-center items-center gap-16 text-xl h-40">
//                 {navlinks.map((link, index) => (
//                     <div key={index} className="relative inline-block"
//                         onMouseOver={() => setShowSparkles(index)} 
//                         onMouseEnter={() => setShowSparkles(index)}
//                         onMouseLeave={() => setShowSparkles(null)}
//                         onFocus={() => setShowSparkles(index)}
//                         onBlur={() => setShowSparkles(null)}>
                        
//                         <Link href={link.link} ref={el => textRefs.current[index] = el} className="hover:text-pink-600 relative z-10">{link.name}</Link>

//                         {showSparkles === index && textWidths[index] && 
//                             <span className="absolute top-0 inset-0 pointer-events-none">
//                                 <span className='absolute bottom-0 rotate-45 z-50 w-1 h-1 bg-white sparkle-animation' style={{ left: `${textWidths[index] * 0.95}px` }}></span>
//                                 <span className='absolute bottom-3 rotate-45 z-50 w-[0.2rem] h-[0.2rem] bg-white sparkle-animation delay-200' style={{ left: `${textWidths[index] * 1.1}px` }}></span>
//                                 <span className='absolute bottom-1 -left-2 rotate-45 z-50 w-[0.3rem] h-[0.3rem] bg-white sparkle-animation delay-100'></span>
//                                 <span className='absolute bottom-7 left-0 rotate-45 z-50 w-[0.1rem] h-[0.1rem] bg-white sparkle-animation delay-200'></span>
                                
//                                 <div className='absolute bottom-3 -left-7 sparkle-animation'>
//                                     <span className='absolute bottom-2 left-3 z-50 w-[0.45rem] h-[1px] bg-white'></span>
//                                     <span className='absolute bottom-1 left-[0.95rem] z-50 h-[0.5rem] w-[1px] bg-white'></span>
//                                 </div>
//                             </span>
                           
//                         }
//                     </div>
//                 ))}
//             </div>

// background-image: 
    // linear-gradient(to right, ${({gridColor = "rgb(255,255,255)", opacity = 0.20}) => ${gridColor}${opacity}} 1px, transparent 1px),
    // linear-gradient(to bottom, ${({gridColor = "rgb(255,255,255)", opacity = 0.20}) => ${gridColor}${opacity}} 1px, transparent 1px);


