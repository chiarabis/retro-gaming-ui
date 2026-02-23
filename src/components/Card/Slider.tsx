import {useState} from "react"


export interface Evolution {
    name: string
    image: string
    
}

interface SliderProps {
    evolutions: Evolution[]
}

export default function Slider({evolutions}: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1)
        }
    }
    const next = () => {
        if (currentIndex < evolutions.length - 1) {
            setCurrentIndex(currentIndex + 1)
        }
    }

    if (evolutions.length === 0) {
        return null
    }

    const current = evolutions[currentIndex];

    return (
        <>
            <button
                onClick={prev}
                disabled={currentIndex === 0}
                style={{
                    padding: "0.5rem 1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    fontSize: "1rem",
                    cursor: currentIndex === 0 ? "not-allowed" : "pointer",
                }}>
                <span className="pixelarticons--chevron-left"></span>
            </button>
            
            <div
                style={{
                    minWidth: "90px",
                    borderRadius: "0",
                    //padding: "0.5rem",
                    //boxShadow: "3px 3px 0 0 #F8FF2A, -3px -3px 0 0 #0f172b",
                    //boxShadow: "inset 3px 3px 0 0 #ccc, inset -3px -3px 0 0 #0f172b",
                    border: "3px inset #ccc",
                    textAlign: "center",
                    //border: "1px solid #0f172b", 
                    width: "max-content", 
                    margin: "0 auto",
                    background: "#fff",
                }}>
                <img src={current.image} alt={current.name} style={{ display: "block", margin: "0 auto" }}/>
                <p style={{
                        fontSize: "0.8rem",
                        margin: "0.25rem 0",
                        textTransform: "capitalize",
                    }}>
                    {current.name}
                </p>
                
            </div>

            
            <button
                onClick={next}
                disabled={currentIndex === evolutions.length - 1}
                style={{
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    backgroundColor: "transparent",
                    border: "none",
                    cursor: currentIndex === evolutions.length - 1 ? "not-allowed" : "pointer",
                }}
            >
                <span className="pixelarticons--chevron-right"></span>
            </button>
        </>
    )
}