import { useState, useEffect } from "react";
import Button from "../Button/Button";



const menuStart = [
    { name: "GitHub" },
    { name: "Inspiration" },
    { name: "Credits" },
];



export default function Footer({
    handleOpenModal,
}: {
    handleOpenModal: (name: string) => void;
}) {

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



    //stato per menu start
    const [openMenu, setOpenMenu] = useState<boolean>(false);


    const handleStart = () => {
        setOpenMenu(true);
        console.log("Start clicked");
    };


    return (
        <footer style={{ color: '#0f172b', textAlign: 'center', position: 'fixed', bottom: 0, width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', padding: '0.75rem 2rem', backgroundColor: "#ed9ac5" }}>
                {/* <button type="button" style={{ fontFamily: 'VT323', fontSize: '1.5rem', margin: '0.75rem 0', padding: 0, border: 'none', background: 'none' }}>
                    <p style={{ margin: 0 }}>Start</p>
                </button> */}
                    
                <Button title="Start" onClick={handleStart} />
            
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19 3H5v2H3v14h2v2h14v-2h2V5h-2zm0 2v14H5V5zm-8 2h2v6h4v2h-6z"/>
                    </svg>
                    <div style={{ fontSize: "1.25rem", fontFamily: "VT323", borderRight: "3px solid #0f172b", paddingRight: "1rem", display: "flex", flexDirection: "row", gap: "1rem" }}>
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
            

            {/**menu start */}
            {openMenu && (
                <div style={{ position: 'absolute', bottom: '110%', left: '2%', backgroundColor: '#fff', display: "flex", flexDirection: "column" }}>
                    {/* <div style={{ position: 'absolute', top: 0, left: '10px', width: '18px', height: '100%', backgroundColor: '#f1b8d5' }}></div> */}
                    <button type="button" onClick={() => setOpenMenu(false)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', alignSelf: 'flex-end' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
                            <path fill="#0f172b" 
                            d="M5 5h2v2H5zm4 4H7V7h2zm2 2H9V9h2zm2 0h-2v2H9v2H7v2H5v2h2v-2h2v-2h2v-2h2v2h2v2h2v2h2v-2h-2v-2h-2v-2h-2zm2-2v2h-2V9zm2-2v2h-2V7zm0 0V5h2v2z"/>
                        </svg>
                    </button>
                
                    <div style={{ padding: '0 1rem 1rem', }}>
                        <ul style={{display: 'flex', gap: '0.3rem', flexDirection: 'column', alignItems: 'flex-start', margin: 0, padding: 0, listStylePosition: 'inside', }}>
                        {menuStart.map((item, index) => (
                            <li key={index}>
                                <button className="card-link glitch-anim" data-text={item.name} onClick={() => {handleOpenModal(item.name); setOpenMenu(false);}}
                                style={{ textDecoration: 'none', color: '#0f172b', margin: '0 0.5rem', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "VT323", fontSize: '1.2rem' }}>{item.name}</button>
                            </li>  
                        ))}
                        </ul>
                    </div>   
                    
                </div>
            )}   
        </footer>
    )
}