import { useState, useEffect } from "react";
import Button from "../Button/Button";

export default function Footer() {

    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const formattedTime = dateTime.toLocaleTimeString("it-IT", {
        hour: "2-digit",
        minute: "2-digit",
    });

    const formattedDate = dateTime.toLocaleDateString("it-IT", {
        weekday: "short",
        day: "numeric",
        month: "short",
        year: "numeric",
    });




    return (
        <footer style={{ color: '#0f172b', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '0.75rem 2rem', backgroundColor: "#ed9ac5" }}>
                {/* <button type="button" style={{ fontFamily: 'VT323', fontSize: '1.5rem', margin: '0.75rem 0', padding: 0, border: 'none', background: 'none' }}>
                    <p style={{ margin: 0 }}>Start</p>
                </button> */}
                    
                <Button title="Start"/>
            
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3H5v2H3v14h2v2h14v-2h2V5h-2zm0 2v14H5V5zm-8 2h2v6h4v2h-6z"/>
                    </svg>
                    <div style={{ fontSize: "1.25rem", fontFamily: "VT323", borderRight: "3px solid #0f172b", paddingRight: "1rem", display: "flex", flexDirection: "row", gap: "1rem" }}>
                        {/* {time.toLocaleString()} */}
                        <p>{formattedTime}</p>
                        <p style={{ textTransform: "uppercase" }}>{formattedDate}</p>
                        
                    </div>
                    
                    <p style={{ textAlign: 'center', fontSize: "0.9rem" }}>
                        Made with 
                        <span style={{ margin: '0 0.3rem', color: '#ff6794' }}>♥</span>
                        by CB
                    </p>
                </div>
                
                
            </div>
        </footer>
    )
}